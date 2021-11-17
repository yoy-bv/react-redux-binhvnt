// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useDispatch } from 'react-redux'
import * as Yup from 'yup'
import { useFormik } from 'formik'

import { useInjectReducer, useInjectSaga } from '../../../../store'
import saga from '../../store/saga'
import reducer from '../../store/reducer'
import { pushToast } from '../../../../components/toast'
import { createArticles } from '../../store/actions'

const useList = () => {
  useInjectSaga({ key: 'articlesSaga', saga })
  useInjectReducer({ key: 'articlesSaga', reducer })
  const dispatch = useDispatch()

  const defaultValue = {
    title: '',
    content: ''
  }

  const validationSchema = Yup.object().shape({
    title: Yup.string().required(),
    content: Yup.string().required()
  })

  const handleCreate = async (payload) => {
    payload = {
      ...payload,
      image: 'https://cdn.fakercloud.com/avatars/sprayaga_128.jpg'
    }
    const res = await dispatch(createArticles(payload))
    if (res) {
      pushToast('error', res)
    } else {
      pushToast('success', 'Create blog success')
    }
  }

  const formik = useFormik({
    initialValues: {
      ...defaultValue
    },
    validationSchema,
    onSubmit(value) {
      handleCreate(value)
    },
    enableReinitialize: true
  })

  return { formik }
}

export default useList
