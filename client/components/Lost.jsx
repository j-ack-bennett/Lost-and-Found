import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux'

import {loginError, registerUserRequest} from '../actions/auth'

function LostPet (props) {
  const { lost, dispatch } = props     //?? what should be in props?
  
  const [formData, setFormData] = useState(
    {
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

  const handleSubmit = (e) => {return
    e.preventDefault()

    props.dispatch(addLostPet(formData))
    setFormData({photo_url:""})

  }

  return (
    <form className="Register form box" onSubmit={handleSubmit}>
      <h1 className="title is-2">Please submit a photo of the cat or dog you have lost</h1>
      <hr />
      {props.auth.errorMessage && <span className="has-text-danger is-large">{auth.errorMessage}</span>}
      
      
      <div className="columns">
        <label className="column is-6 label is-large has-text-centered">Species
          <input required className="input is-large has-text-centered is-fullwidth" placeholder="Cat or Dog?" type="text" name="species" onChange={handleChange} value={formData.species}/>
        </label>

        <label className="column is-6 label is-large has-text-centered">URL for a photo
          <input required className="input is-large has-text-centered is-fullwidth" placeholder="fluffy@photos.com" type="text" name="photo_url" onChange={handleChange} value={formData.photo_url}/>
        </label>

        <label className="column is-6 label is-large has-text-centered">Pets Name
          <input required className="input is-large has-text-centered is-fullwidth" placeholder="Fluffy" type="text" name="species" onChange={handleChange} value={formData.name}/>
        </label>
      </div>
      <br />
      <input className="button is-success is-large is-fullwidth" value="Lost" type="submit" />
    </form>
  )
}

const mapStateToProps = (globalState) => {
  return {
    auth: globalState.auth
  }
}

export default connect(mapStateToProps)(LostPet)