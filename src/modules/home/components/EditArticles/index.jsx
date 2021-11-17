import React from 'react'
import { Row, Col, Button, ListGroup } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

import Container from '../../../../components/container'
import Layout from '../../../layouts'
import Wrapper from './styled'
import LoadingPage from '../../../../components/loading'
import InputField from '../../../../components/input'
import useForm from './useForm'

const BlogEditScreen = () => {
  const history = useHistory()
  const { article, formik, isLoading } = useForm()
  const { getFieldProps, submitForm, errors, touched } = formik

  return (
    <Layout>
      <Wrapper>
        <Container>
          <h3>Edit Blog</h3>
          {
            isLoading ? <LoadingPage />
              : (
                <>
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
                      <InputField
                        field={getFieldProps('title')}
                        inputProps={{
                          placeholder: 'Search name'
                        }}
                        error={errors.title}
                        touched={touched.title}
                      />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <h5>Content: </h5>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <InputField
                        field={getFieldProps('content')}
                        inputProps={{
                          placeholder: 'Search name'
                        }}
                        error={errors.content}
                        touched={touched.content}
                      />
                    </ListGroup.Item>
                  </ListGroup>
                  <Row>
                    <Col md={{ span: 1, offset: 10 }}>
                      <Button
                        variant="primary"
                        type="submit"
                        onClick={submitForm}
                      >
                        Update
                      </Button>
                    </Col>
                    <Col md={{ span: 1 }}>
                      <Button
                        variant="default"
                        type="submit"
                        onClick={() => history.push(`/blog/detail/${article.id}`)}
                      >
                        Back
                      </Button>
                    </Col>
                  </Row>
                </>
              )
          }
        </Container>
      </Wrapper>
    </Layout>
  )
}

export default BlogEditScreen
