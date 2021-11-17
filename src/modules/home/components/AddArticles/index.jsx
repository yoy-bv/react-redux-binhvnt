import React from 'react'
import { Row, Col, Button, ListGroup } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

import Container from '../../../../components/container'
import Layout from '../../../layouts'
import Wrapper from './styled'
import InputField from '../../../../components/input'
import useForm from './useForm'

const BlogAddScreen = () => {
  const history = useHistory()
  const { formik } = useForm()
  const { getFieldProps, submitForm, errors, touched } = formik

  return (
    <Layout>
      <Wrapper>
        <Container>
          <h3>Add Blog</h3>
          <ListGroup className="my-2">
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
                Add
              </Button>
            </Col>
            <Col md={{ span: 1 }}>
              <Button
                variant="default"
                type="submit"
                onClick={() => history.push('/')}
              >
                Back
              </Button>
            </Col>
          </Row>
        </Container>
      </Wrapper>
    </Layout>
  )
}

export default BlogAddScreen
