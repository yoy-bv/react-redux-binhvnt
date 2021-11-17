import { useFormik } from 'formik'
import { useHistory } from 'react-router-dom'
import qs from 'query-string'
import _ from 'lodash'

import useQueryUrl from '../../../../hooks/useQueryUrl'

const useForm = () => {
  const history = useHistory()
  const query = useQueryUrl()

  const defaultValue = {
    search: ''
  }

  const formik = useFormik({
    initialValues: {
      ...defaultValue,
      ...query
    },
    onSubmit(value) {
      history.push({
        search: qs.stringify({ ..._.omitBy(value, _.isEmpty) })
      })
    },
    enableReinitialize: true
  })

  const handleClear = () => {
    formik.setValues(defaultValue)
    formik.submitForm()
  }

  const handleSort = (e) => {
    history.push({
      search: qs.stringify({ ..._.omitBy({ ...query, order: e, sortBy: 'createdAt' }, _.isEmpty) })
    })
  }

  return { formik, handleClear, handleSort }
}

export default useForm
