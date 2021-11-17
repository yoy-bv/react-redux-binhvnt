import AxiosClient from './api'
import END_POINT from './constants'

function getListArticlesApi({ params }) {
  const q = new URLSearchParams({ ...params, page: params.page || 1, limit: params.limit || 10 }).toString()
  return AxiosClient.get(`${END_POINT.ARTICLES.LIST}?${q}`)
    .then((res) => res).catch((err) => err)
}

function getDetailArticlesApi(blogId) {
  return AxiosClient.get(END_POINT.ARTICLES.DETAIL({ blogId }))
    .then((res) => res).catch((err) => err)
}

function updateArticlesApi(payload) {
  return AxiosClient.put(END_POINT.ARTICLES.UPDATE({ blogId: payload.id }), payload)
    .then((res) => res).catch((err) => err)
}

function createArticlesApi(payload) {
  return AxiosClient.post(END_POINT.ARTICLES.CREATE, payload)
    .then((res) => res).catch((err) => err)
}

export {
  getListArticlesApi,
  getDetailArticlesApi,
  updateArticlesApi,
  createArticlesApi
}
