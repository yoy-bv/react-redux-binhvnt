import React from 'react'
import styled from 'styled-components'
import { Header } from '../../components'

const Wrapper = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`
const Body = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: ${({ isSiderBar }) => (isSiderBar ? '0px' : '40px 0')};
  justify-content: center;
`
const Content = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`

const Layout = ({ children }) => (
  <Wrapper>
    <Header />
    <Body>
      <Content>
        {children}
      </Content>
    </Body>
  </Wrapper>
)

export default Layout
