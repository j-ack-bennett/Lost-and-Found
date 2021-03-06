import React, { useEffect } from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import Login from './Login'
import Register from './Register'
import Nav from './Nav'
import LostPets from './LostPets'
import LostForm from './LostForm'
import FoundForm from './FoundForm'

import { checkAuth } from '../actions/auth'

function App (props) {
  const { auth, dispatch } = props

  useEffect(() => {
    const confirmSuccess = () => { }
    props.dispatch(checkAuth(confirmSuccess))
  }, [])

  return (
    <Router>
      <div className="container has-text-centered">

        <div className="hero is-small is-primary">
          <div className="hero-body has-text-centered">
            <Link to='/' className="">
              <h1 className="title is-1">Lost and Found</h1>
            </Link>
            <Route path="/" component={Nav} />
          </div>
        </div>

        <div className=''>
          <Route exact path="/" component={LostForm} />
          {!auth.isAuthenticated &&  
          <>
          <Route path="/register" component={Register}/>
          </>
          }
        
        </div>
          <Route path="/login" component={Login} />
          <Route path="/Found" exact component={FoundForm}/>
          <Route path="/Lost" exact component={LostForm}/>
      </div>
    </Router>
  )
}

const mapStateToProps = (globalState) => {
  return {
    auth: globalState.auth
  }
}

export default connect(mapStateToProps)(App)
