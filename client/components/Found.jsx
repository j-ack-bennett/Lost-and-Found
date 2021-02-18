import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux'

import {loginError, registerUserRequest} from '../actions/auth'

function Foundpet (props) {
  const { found, dispatch } = props
  
  const [formData, setFormData] = useState({
    species: '',
    photo_url: '',

  })

  useEffect(() => {
    dispatch(loginError(''))
  }, [])

  const handleChange = (e) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    e.target.reset()

    let { species, photo_url } = formData

  //   if ()=> {
  //     const confirmSuccess = () => { props.history.push('/found') }
  //     const photo_url  = { ...formData }
  //     dispatch(registerUserRequest(userInfo, confirmSuccess))
    
  // }

  return (
    <form className="Register form box" onSubmit={handleSubmit}>
      <h1 className="title is-2">Please submit a photo of the cat or dog you have found</h1>
      <hr />
      {auth.errorMessage && <span className="has-text-danger is-large">{auth.errorMessage}</span>}
      
      
      <div className="columns">
        <label className="column is-6 label is-large has-text-centered">species
          <input required className="input is-large has-text-centered is-fullwidth" placeholder="Species" type="text" name="species" onChange={handleChange} value={formData.species}/>
        </label>
        <label className="column is-6 label is-large has-text-centered">URL for a photo
          <input required className="input is-large has-text-centered is-fullwidth" placeholder="URL for a photo" type="text" name="photo_url" onChange={handleChange} value={formData.photo_url}/>
        </label>
      </div>
      <br />
      
      <input className="button is-success is-large is-fullwidth" value="Found" type="submit" />
    </form>
  )
}

const mapStateToProps = (globalState) => {
  return {
    found: globalState.found
  }
}

export default connect(mapStateToProps)(FoundPet)
