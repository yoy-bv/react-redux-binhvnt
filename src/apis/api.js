/* eslint-disable no-param-reassign */
/* eslint-disable symbol-description */
import axios from 'axios'
import JSONBig from 'json-bigint'
import {
  isEmpty,
  assign
} from 'lodash'
import { BASE_API_URL } from '../constants'
import { STORAGE, getLocalStorage } from '../utils'

const singletonEnforcer = Symbol()

class AxiosClient {
  constructor(enforcer) {
    if (enforcer !== singletonEnforcer) {
      throw new Error('Cannot initialize Axios client single instance')
    }

    this.axiosClient = axios.create({
      baseURL: BASE_API_URL,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })

    this.getExistTokenOnLocalStorage()

    this.axiosClient.defaults.transformResponse = (data) => JSONBig.parse(data)

    this.axiosClient.interceptors.request.use(
      (configure) => configure,
      (error) => Promise.reject(error)
    )

    this.axiosClient.interceptors.response.use(
      (response) => {
        // console.log('===========> RESPONSE: ', response);
        const { status, data } = response
        return {
          status,
          data
        }
      },
      (error) => {
        // console.error('===========> ERRORS: ', error);

        if (error.response.data.errors && Array.isArray(error.response.data.errors)) {
          error.response.data.errorsObject = error.response.data.errors
            .reduce((errorObject, item) => {
              errorObject[item.field] = item
              return errorObject
            }, {})
        }

        return Promise.reject(error.response)
      }
    )
  }

  static get instance() {
    if (!this.axiosClientInstance) {
      this.axiosClientInstance = new AxiosClient(singletonEnforcer)
    }

    return this.axiosClientInstance
  }

  async getExistTokenOnLocalStorage() {
    const userToken = await getLocalStorage(STORAGE.USER_TOKEN)
    if (userToken) {
      this.setHeader(userToken)
    }
  }

  setHeader = async (userToken = null) => {
    this.axiosClient.defaults.headers.common.Authorization = `Bearer ${userToken}`
  }

  get = async (resource, slug = '', config = {}) => {
    const requestURL = isEmpty(slug) ? `${resource}` : `${resource}/${slug}`
    return this.axiosClient
      .get(requestURL, {
        data: null,
        ...assign(
          config,
          { headers: this.axiosClient.defaults.headers }
        )
      })
  }

  post = async (resource, data, config = {}) => this.axiosClient
    .post(`${resource}`, data, assign(
      config,
      this.axiosClient.defaults.headers
    ))

  update = async (resource, data, config = {}) => this.axiosClient
    .put(`${resource}`, data, assign(
      config,
      this.axiosClient.defaults.headers
    ))

  put = async (resource, data, config = {}) => this.axiosClient
    .put(`${resource}`, data, assign(
      config,
      this.axiosClient.defaults.headers
    ))

  patch = async (resource, data, config = {}) => this.axiosClient
    .patch(`${resource}`, data, assign(
      config,
      this.axiosClient.defaults.headers
    ))

  delete = async (resource, data, config = {}) => this.axiosClient
    .delete(`${resource}`,
      {
        params: data,
        ...assign(
          config,
          { headers: this.axiosClient.defaults.headers }
        )
      })
}

export default AxiosClient.instance
