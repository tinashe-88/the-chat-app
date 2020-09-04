import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import GlobalStyle from './globalStyles'

import JoinPage from './pages/JoinPage/JoinPage'
import ChatPage from './pages/ChatPage/ChatPage'

const App = () => (
  <React.Fragment>
    <GlobalStyle />
    <Router>
      <Route path={'/'} exact component={JoinPage}/>
      <Route path={'/chat'} exact component={ChatPage}/>
    </Router>
  </React.Fragment>
)

export default App