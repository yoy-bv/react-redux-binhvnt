import React from 'react'
import styled from 'styled-components'
// import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'

// import i18next from '../../i18n'

import { NAL_LOGO
} from '../../assets'

const Wrapper = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.white};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
  .navbar {
    background: ${({ theme }) => theme.white};
  }
`

// const changeLanguage = (e) => {
//   console.log(e)
//   i18next.changeLanguage(e)
// }

const Header = () => {
  // const { t } = useTranslation()
  const history = useHistory()

  return (
    <Wrapper>
      <div className="container-fluid">
        <Navbar expand="lg">
          <img src={NAL_LOGO} alt="logo" />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={() => history.push('/')}>Home</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>

    </Wrapper>
  )
}

export default Header
