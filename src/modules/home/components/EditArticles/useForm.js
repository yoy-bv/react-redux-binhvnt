// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import * as Yup from 'yup'
import { useFormik } from 'formik'

import { useInjectReducer, useInjectSaga } from '../../../../store'
import saga from '../../store/saga'
import reducer from '../../store/reducer'
import { makeSelectDetailArticles, makeSelectLoading } from '../../store/selectors'
import { getDetailArticles, updateArticles } from '../../store/actions'
import { pushToast } from '../../../../components/toast'

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

  const defaultValue = article || {
    title: '',
    content: ''
  }

  const validationSchema = Yup.object().shape({
    title: Yup.string().required(),
    content: Yup.string().required()
  })

  const handleEdit = async (payload) => {
    await dispatch(updateArticles(payload))
    pushToast('success', 'Updated blog success')
  }

  const formik = useFormik({
    initialValues: {
      ...defaultValue
    },
    validationSchema,
    onSubmit(value) {
      handleEdit(value)
    },
    enableReinitialize: true
  })

  return { formik, article, isLoading }
}

export default useList
