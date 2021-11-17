/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { Pagination } from 'react-bootstrap'
import qs from 'query-string'
import { useHistory } from 'react-router-dom'
import useQueryUrl from '../../hooks/useQueryUrl'

const PaginationBasic = () => {
  const history = useHistory()
  const query = useQueryUrl()
  const [active, setActive] = useState(parseInt(query?.page, 10) || 1)
  let items = []
  const onChange = (e) => {
    setActive(parseInt(e.target.innerText, 10))
    history.push({
      search: qs.stringify({
        limit: 10,
        page: e.target.innerText
      })
    })
  }
  // eslint-disable-next-line no-plusplus
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item onClick={onChange} key={number} active={number === active}>
        {number}
      </Pagination.Item>
    )
  }

  const paginationBasic = (
    <div>
      <Pagination>{items}</Pagination>
    </div>
  )

  return (
    paginationBasic
  )
}

export default PaginationBasic
