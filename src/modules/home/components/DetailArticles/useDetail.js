// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { useInjectReducer, useInjectSaga } from '../../../../store'
import saga from '../../store/saga'
import reducer from '../../store/reducer'
import { makeSelectDetailArticles, makeSelectLoading } from '../../store/selectors'
import { getDetailArticles } from '../../store/actions'

const useList = () => {
  const { id } = useParams()
  useInjectSaga({ key: 'articlesSaga', saga })
  useInjectReducer({ key: 'articlesSaga', reducer })
  const dispatch = useDispatch()
  const article = useSelector(makeSelectDetailArticles())
  const isLoading = useSelector(makeSelectLoading())

  useEffect(() => {
    dispatch(getDetailArticles(id))
  }, [])

  return { article, isLoading }
}

export default useList
