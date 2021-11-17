import {
  GET_LIST_ARTICLES, GET_LIST_ARTICLES_SUCCESS, GET_LIST_ARTICLES_ERROR,
  GET_DETAIL_ARTICLES, GET_DETAIL_ARTICLES_SUCCESS, GET_DETAIL_ARTICLES_ERROR,
  UPDATE_ARTICLES, UPDATE_ARTICLES_ERROR, UPDATE_ARTICLES_SUCCESS,
  CREATE_ARTICLES, CREATE_ARTICLES_SUCCESS, CREATE_ARTICLES_ERROR
} from './constants'

export function getListArticles(params) {
  return {
    type: GET_LIST_ARTICLES,
    params
  }
}

export function getListArticlesSuccess(articles) {
  return {
    type: GET_LIST_ARTICLES_SUCCESS,
    articles
  }
}

export function getListArticlesError(error) {
  return {
    type: GET_LIST_ARTICLES_ERROR,
    error
  }
}

export function getDetailArticles(id) {
  return {
    type: GET_DETAIL_ARTICLES,
    id
  }
}

export function getDetailArticlesSuccess(article) {
  return {
    type: GET_DETAIL_ARTICLES_SUCCESS,
    article
  }
}

export function getDetailArticlesError(error) {
  return {
    type: GET_DETAIL_ARTICLES_ERROR,
    error
  }
}

export function updateArticles(payload) {
  return {
    type: UPDATE_ARTICLES,
    payload
  }
}

export function updateArticlesSuccess(payload) {
  return {
    type: UPDATE_ARTICLES_SUCCESS,
    payload
  }
}

export function updateArticlesError(error) {
  return {
    type: UPDATE_ARTICLES_ERROR,
    error
  }
}

export function createArticles(payload) {
  return {
    type: CREATE_ARTICLES,
    payload
  }
}

export function createArticlesSuccess(payload) {
  return {
    type: CREATE_ARTICLES_SUCCESS,
    payload
  }
}

export function createArticlesError(error) {
  return {
    type: CREATE_ARTICLES_ERROR,
    error
  }
}
