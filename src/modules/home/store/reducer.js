/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 * @param  {state} login state
 * @param  {action} login action
 */
import { createReducer, updateObject } from '../../../store'
import {
  GET_LIST_ARTICLES, GET_LIST_ARTICLES_SUCCESS, GET_LIST_ARTICLES_ERROR,
  GET_DETAIL_ARTICLES, GET_DETAIL_ARTICLES_SUCCESS, GET_DETAIL_ARTICLES_ERROR,
  UPDATE_ARTICLES_ERROR, UPDATE_ARTICLES_SUCCESS, UPDATE_ARTICLES,
  CREATE_ARTICLES, CREATE_ARTICLES_SUCCESS, CREATE_ARTICLES_ERROR
} from './constants'

export const initialState = {
  isLoading: false,
  error: null,
  articles: [],
  article: {}
}

function getListArticles(state) {
  return updateObject(state, {
    isLoading: true
  })
}

function getListArticlesSuccess(state, { articles }) {
  return updateObject(state, {
    isLoading: false,
    articles
  })
}

function getListArticlesError(state, { error }) {
  return updateObject(state, {
    error,
    isLoading: false
  })
}

function getDetailArticles(state) {
  return updateObject(state, {
    isLoading: true
  })
}

function getDetailArticlesSuccess(state, { article }) {
  return updateObject(state, {
    isLoading: false,
    article
  })
}

function getDetailArticlesError(state, { error }) {
  return updateObject(state, {
    error,
    isLoading: false
  })
}

function updateArticles(state) {
  return updateObject(state, {
    isLoading: true
  })
}

function updateArticlesSuccess(state, { article }) {
  return updateObject(state, {
    isLoading: false,
    article
  })
}

function updateArticlesError(state, { error }) {
  return updateObject(state, {
    error,
    isLoading: false
  })
}

function createArticles(state) {
  return updateObject(state, {
    isLoading: true
  })
}

function createArticlesSuccess(state, { article }) {
  return updateObject(state, {
    isLoading: false,
    article
  })
}

function createArticlesError(state, { error }) {
  return updateObject(state, {
    error,
    isLoading: false
  })
}

// Slice reducer
export default createReducer(initialState, {
  [GET_LIST_ARTICLES]: getListArticles,
  [GET_LIST_ARTICLES_SUCCESS]: getListArticlesSuccess,
  [GET_LIST_ARTICLES_ERROR]: getListArticlesError,

  [GET_DETAIL_ARTICLES]: getDetailArticles,
  [GET_DETAIL_ARTICLES_SUCCESS]: getDetailArticlesSuccess,
  [GET_DETAIL_ARTICLES_ERROR]: getDetailArticlesError,

  [UPDATE_ARTICLES]: updateArticles,
  [UPDATE_ARTICLES_SUCCESS]: updateArticlesSuccess,
  [UPDATE_ARTICLES_ERROR]: updateArticlesError,

  [CREATE_ARTICLES]: createArticles,
  [CREATE_ARTICLES_SUCCESS]: createArticlesSuccess,
  [CREATE_ARTICLES_ERROR]: createArticlesError
})
