import React from 'react'
import { Row, Col, Button, ListGroup } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

import Container from '../../../../components/container'
import Layout from '../../../layouts'
import useDetail from './useDetail'
import Wrapper from './styled'
import LoadingPage from '../../../../components/loading'

const BlogDetailScreen = () => {
  const history = useHistory()
  const { article, isLoading } = useDetail()
  return (
    <Layout>
      <Wrapper>
        <Container>
          <h3>Detail Blog</h3>
          {
            isLoading ? <LoadingPage />
              : (
                <>
                  <Row>
                    <Col md={{ span: 1, offset: 10 }}>
                      <Button
                        variant="primary"
                        type="submit"
                        onClick={() => history.push(`/blog/edit/${article.id}`)}
                      >
                        Edit
                      </Button>
                    </Col>
                    <Col md={1}>
                      <Button
                        variant="default"
                        type="submit"
                        onClick={() => history.push('/')}
                      >
                        Back
                      </Button>
                    </Col>
                  </Row>
                  <ListGroup className="my-2">
                    <ListGroup.Item>
                      <h5>Avatar: </h5>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <img
                        alt={article?.title}
                        height={64}
                        width={64}
                        className="mr-3"
                        src={article?.image}
                      />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <h5>Title: </h5>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      {article?.title}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <h5>Content: </h5>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      {article?.content}
                    </ListGroup.Item>
                  </ListGroup>
                </>
              )
          }
        </Container>
      </Wrapper>
    </Layout>
  )
}

export default BlogDetailScreen
