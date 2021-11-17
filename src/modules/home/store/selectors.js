/**
 * The global state selectors
 */

import { createSelector } from 'reselect'
import { initialState } from './reducer'

const selectArticles = (state) => state.articlesSaga || initialState

const makeSelectError = () => createSelector(
  selectArticles,
  (state) => state.error
)

const makeSelectArticles = () => createSelector(
  selectArticles,
  (state) => state.articles
)

const makeSelectDetailArticles = () => createSelector(
  selectArticles,
  (state) => state.article
)

const makeSelectLoading = () => createSelector(
  selectArticles,
  (state) => state.isLoading
)

export {
  selectArticles,
  makeSelectError,
  makeSelectArticles,
  makeSelectLoading,
  makeSelectDetailArticles
}
