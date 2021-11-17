/* eslint-disable no-console */

/* eslint-disable no-case-declarations */
/**
 * Gets the repositories of the user from Github
 */

import {
  put, takeLatest
} from 'redux-saga/effects'
import { pushToast } from '../../../components/toast'
import { getListArticlesApi, getDetailArticlesApi, updateArticlesApi, createArticlesApi } from '../../../apis'
import {
  getListArticlesSuccess, getListArticlesError,
  getDetailArticlesError, getDetailArticlesSuccess,
  updateArticlesError, updateArticlesSuccess, createArticlesSuccess, createArticlesError
} from './actions'

import {
  CREATE_ARTICLES,
  GET_DETAIL_ARTICLES,
  GET_LIST_ARTICLES, UPDATE_ARTICLES
} from './constants'

/**
 * Get user info request/response handler
 */
export function* getListArticlesSaga(params) {
  console.log('=============saga', params)
  try {
    // Call our request helper (see 'Helpers/axios')
    const { data } = yield getListArticlesApi(params)
    yield put(getListArticlesSuccess(data))
  } catch (err) {
    yield put(getListArticlesError(err))
  }
}
/**
 * Get user info request/response handler
 */
export function* geDetailArticlesSaga(payload) {
  try {
    // Call our request helper (see 'Helpers/axios')
    const { data } = yield getDetailArticlesApi(payload.id)
    yield put(getDetailArticlesSuccess(data))
  } catch (err) {
    yield put(getDetailArticlesError(err))
  }
}

/**
 * Edit user info request/response handler
 */
export function* updateArticlesSaga(payload) {
  try {
    // Call our request helper (see 'Helpers/axios')
    const { data } = yield updateArticlesApi(payload.payload)
    yield put(updateArticlesSuccess(data))
    if (data) {
      const res = yield getDetailArticlesApi(data.id)
      yield put(getDetailArticlesSuccess(res.data))
    }
    // yield put(getDetailArticles(data))
  } catch (err) {
    yield put(updateArticlesError(err))
  }
}

/**
 * Edit user info request/response handler
 */
export function* createArticlesSaga(payload) {
  try {
    // Call our request helper (see 'Helpers/axios')
    const { data, status } = yield createArticlesApi(payload.payload)
    if (status === 200) {
      yield put(createArticlesSuccess(data))
    } else {
      yield put(createArticlesError(data))
      pushToast('error', data)
    }
  } catch (err) {
    yield put(createArticlesError(err))
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* homeSaga() {
  yield takeLatest(GET_LIST_ARTICLES, getListArticlesSaga)
  yield takeLatest(GET_DETAIL_ARTICLES, geDetailArticlesSaga)
  yield takeLatest(UPDATE_ARTICLES, updateArticlesSaga)
  yield takeLatest(CREATE_ARTICLES, createArticlesSaga)
}
