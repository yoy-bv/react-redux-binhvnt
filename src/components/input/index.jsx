import React from 'react'
import PropTypes from 'prop-types'
import { Form, InputGroup, FormControl } from 'react-bootstrap'
import styled from 'styled-components'

const InputField = (props) => {
  const {
    label,
    touched,
    error,
    field,
    inputProps,
    onchange,
    disabled,
    ...rest
  } = props
  const onChange = (e) => {
    field.onChange(e)
    if (onchange) onchange(e)
  }

  return (
    <Div>
      <Form.Group
        label={label}
        {...rest}
      >
        <InputGroup />
        <FormControl
          {...field}
          {...inputProps}
          style={{ fontSize: 'inherit' }}
          onChange={onChange}
          disabled={disabled || false}
        />
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

InputField.propTypes = {
  disabled: PropTypes.bool,
  onchange: PropTypes.any,
  inputProps: PropTypes.object,
  field: PropTypes.object,
  touched: PropTypes.func,
  label: PropTypes.string
}
export default InputField
