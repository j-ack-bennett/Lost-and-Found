import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux'

// import {loginError, registerUserRequest} from '../actions/auth'
import { saveFound } from '../actions/found'

import FoundPets from './FoundPets'
import { checkAuth } from '../actions/auth'

function FoundPet (props) {

  const { auth } = props  

  const [formData, setFormData] = useState(
    {
    species: '',
    photo: '',
  })

  useEffect(() => {
    // props.dispatch(loginError(''))
    const confirmSuccess = () => { }
    props.dispatch(checkAuth(confirmSuccess))
  }, [])

  const handleChange = (e) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      }
    })
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    props.dispatch(saveFound(formData))
    e.target.reset()
    alert('Found Animal Submitted Successfully')
  }

  return (
    <>
    {auth.isAuthenticated && 
    <div className= "lost-form"> 
    <form className="Register form box" onSubmit={handleSubmit}>
      <h1 className="title-is-2">Please submit a photo of the cat or dog you have found</h1>
      <hr /> 
      <div className="columns">
        <label className="column is-6 label is-large has-text-centered">Species
          <input required className="input is-large has-text-centered is-fullwidth" placeholder="Species" onChange={(e) => handleChange(e)} type="text" name="species"/>
        </label>
        <label className="column is-6 label is-large has-text-centered">URL for a photo
          <input required className="input is-large has-text-centered is-fullwidth" placeholder="URL for a photo" onChange={(e) => handleChange(e)} type="text" name="photo"/>
        </label>
      </div>
      <br />
      
      <input className="button is-success is-large is-fullwidth" value="Found" type="submit" />
    </form>
    </div>
    }

      <div>
          <FoundPets />
      </div>
    </>
  )
}

const mapStateToProps = (globalState) => {
  return {
    auth: globalState.auth
  }
}

export default connect(mapStateToProps)(FoundPet)
