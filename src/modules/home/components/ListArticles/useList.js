// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { useInjectReducer, useInjectSaga } from '../../../../store'
import saga from '../../store/saga'
import reducer from '../../store/reducer'
import { makeSelectArticles, makeSelectLoading } from '../../store/selectors'
import { getListArticles } from '../../store/actions'
import useQueryUrl from '../../../../hooks/useQueryUrl'

const useList = () => {
  const history = useHistory()
  useInjectSaga({ key: 'articlesSaga', saga })
  useInjectReducer({ key: 'articlesSaga', reducer })
  const query = useQueryUrl()
  const dispatch = useDispatch()
  const articles = useSelector(makeSelectArticles())
  const isLoading = useSelector(makeSelectLoading())

  useEffect(() => {
    const params = query
    dispatch(getListArticles(params))
  }, [JSON.stringify(query)])

  const handleClick = (id) => {
    history.push(`/blog/detail/${id}`)
  }
  return { articles, isLoading, handleClick }
}

export default useList
