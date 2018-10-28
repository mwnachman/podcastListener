import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import Play from './Play.jsx'
import Home from './Home.jsx'
import NotFound from './NotFound.jsx'

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={() => <Redirect to="/home"/>}/>
      <Route path="/home" component={Home}/>
      <Route path="/play" component={Play}/>
      <Route component={NotFound}/>
    </Switch>
  )
}

export default App
