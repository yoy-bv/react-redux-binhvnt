import React from 'react'
import PropTypes from 'prop-types'
import { Form } from 'react-bootstrap'
import styled from 'styled-components'

const SelectField = (props) => {
  const {
    label,
    touched,
    error,
    field,
    onchange,
    disabled,
    optionsSelect,
    ...rest
  } = props
  const onChange = (e) => {
    field.onChange(e.target.value)
    if (onchange) onchange(e.target.value)
  }

  return (
    <Div>
      <Form.Group
        label={label}
        {...rest}
      >
        <Form.Control
          as="select"
          {...field}
          onChange={onChange}
        >
          {
            optionsSelect.map((item, index) => (
              <option key={index} value={item.value}>{item.label}</option>
            ))
          }
        </Form.Control>
        {error && touched ? <p className="error-message">{error}</p> : ''}
      </Form.Group>
    </Div>
  )
}

const Div = styled.div`
  .error-message {
    color: red;
    margin-bottom: 0;
  }
`

SelectField.propTypes = {
  disabled: PropTypes.bool,
  onchange: PropTypes.any,
  field: PropTypes.object,
  touched: PropTypes.func,
  label: PropTypes.string,
  optionsSelect: PropTypes.array
}
export default SelectField
