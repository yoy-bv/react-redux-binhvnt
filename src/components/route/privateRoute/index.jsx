import React from 'react'
import PropTypes from 'prop-types'
import {
  Route,
  Redirect
} from 'react-router-dom'

function PrivateRoute({
  component: Component, authenticated, ...rest
}) {
  return (
    <Route
      {...rest}
      render={(props) => (authenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: '/auth/login', state: {} }}
        />
      ))}
    />
  )
}

PrivateRoute.propTypes = {
  authenticated: PropTypes.bool
}

PrivateRoute.defaultProps = {
  authenticated: false
}

export default PrivateRoute
