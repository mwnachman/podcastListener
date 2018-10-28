import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import Play from './Play.jsx'
import Home from './Home.jsx'
import NotFound from './NotFound.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  // React 16 error boundaries: https://reactjs.org/blog/2017/07/26/error-handling-in-react-16.html
  // componentDidCatch(error, info) {
  //   console.error('React caught an error: ', error, info)
  // }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={() => <Redirect to="/home"/>}/>
        <Route path="/home" component={Home}/>
        <Route path="/play" component={Play}/>
        <Route component={NotFound}/>
      </Switch>
    )
  }
}

export default App
