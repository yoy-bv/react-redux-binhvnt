import React from 'react'
import { Media, Button } from 'react-bootstrap'

import Container from '../../../../components/container'
import Wrapper from './styled'
import useList from './useList'
import PaginationBasic from '../../../../components/pagination'
import LoadingPage from '../../../../components/loading'
import SearchForm from '../SearchForm'

const ListArticles = () => {
  const { articles, isLoading, handleClick } = useList()
  return (
    <Wrapper>
      <Container>
        <SearchForm />
        <div className="content-list">
          {
            isLoading
              ? <LoadingPage />
              : articles?.length
                ? articles?.map((item, index) => (
                  <Media key={index}>
                    <img
                      alt={item?.title}
                      height={64}
                      width={64}
                      className="mr-3"
                      src={item?.image}
                    />
                    <Media.Body>
                      <div className="title">
                        <Button onClick={() => handleClick(item?.id)} variant="link">
                          {item?.title}
                        </Button>
                      </div>
                      <p>{item?.content}</p>
                    </Media.Body>
                  </Media>
                )) : 'No Data'
          }
        </div>
        <PaginationBasic />
      </Container>
    </Wrapper>
  )
}

export default ListArticles
