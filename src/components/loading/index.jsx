import React from 'react'
import { Spinner } from 'react-bootstrap'
import styled from 'styled-components'

const LoadingPage = (props) => (
  <Style>
    <Spinner size="small" animation="border" variant="primary" {...props} />
  </Style>
)

const Style = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  opacity: 1;
`

export default LoadingPage
