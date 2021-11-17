import React from 'react'

import Container from '../../components/container'
import Layout from '../layouts'
import Wrapper from './components/ListArticles/styled'
import ListArticles from './components/ListArticles'

const HomeScreen = () => (
  <Layout>
    <Wrapper>
      <Container>
        <ListArticles />
      </Container>
    </Wrapper>
  </Layout>
)

export default HomeScreen
