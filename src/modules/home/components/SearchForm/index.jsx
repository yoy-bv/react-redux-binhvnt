import React from 'react'
import styled from 'styled-components'
import { Button, Row, Col } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

import useForm from './useForm'
import InputField from '../../../../components/input'
import SelectField from '../../../../components/select'
import { SORT } from '../../../../constants'

const Search = () => {
  const history = useHistory()
  const { formik, handleClear, handleSort } = useForm()
  const { getFieldProps, submitForm } = formik
  return (
    <Wrapper>
      <Row>
        <Col sm={8}>
          <InputField
            label="Search"
            field={getFieldProps('search')}
            inputProps={{
              placeholder: 'Search name'
            }}
          />
        </Col>
        <Col sm={1}>
          <Button
            variant="primary"
            type="submit"
            onClick={submitForm}
          >
            Search
          </Button>
        </Col>
        <Col sm={1}>
          <Button
            variant="primary"
            type="submit"
            onClick={handleClear}
          >
            Clear
          </Button>
        </Col>
        <Col sm={1}>
          <SelectField
            label="Sort"
            field={getFieldProps('sort')}
            optionsSelect={SORT}
            onchange={handleSort}
          />
        </Col>
        <Col sm={1}>
          <Button
            variant="success"
            type="submit"
            onClick={() => history.push('blog/add')}
          >
            Add
          </Button>
        </Col>
      </Row>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .ant-radio-button-wrapper {
    margin-right: 8px;
  }
  button {
    margin-bottom: 24px;
  }
`

export default Search
