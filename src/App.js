import React from 'react'
import './App.css'
//react router dom
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
//components
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Navbar from './components/Navbar'
import PageNotFound from './components/PageNotFound'
import Posts from './components/Posts'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route path="/contact" component={Contact}/>
          <Route path="/about" component={About}/>
          <Route path="/posts/:post_id" component={Posts}/> */}
          <ProtectedRoute path="/contact" component={Contact}/>
          <ProtectedRoute path="/about" component={About}/>
          <ProtectedRoute path="/posts/:post_id" component={Posts}/>
          <Route component={PageNotFound}/>
        </Switch>
      </div>
    </Router>
  )
}

export default App
