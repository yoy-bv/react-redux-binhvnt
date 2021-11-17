import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import styled from 'styled-components'

import App from './App'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import reportWebVitals from './reportWebVitals'
import configureStore from './store/configureStore'
import { history } from './store/reducers'
import ThemeProvider, { ThemedGlobalStyle } from './themes'

const VerticalBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: space-between;
`

const initialState = {}
const store = configureStore(initialState, history)
ReactDOM.render(
  <Provider store={store}>
    <VerticalBox>
      <ConnectedRouter history={history}>
        <ThemeProvider>
          <ThemedGlobalStyle />
          <App />
        </ThemeProvider>
      </ConnectedRouter>
    </VerticalBox>
  </Provider>,
  document.getElementById('root')
)
// If you want your app to work offline and load faster, you can change
// unregister() to register-individual() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
