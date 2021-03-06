import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchFound } from '../actions/found'

function FoundPets (props) {

  const { auth } = props

  const [filterFound, setFilterFound] = useState([])

  useEffect(() => {
    props.dispatch(fetchFound())
  }, [])

  useEffect(() => {
    setFilterFound (props.foundPets)
  }, [props.foundPets])

  const clickHandler = (filter) => {
    if(filter) {
      const filteredList = props.foundPets.filter(animal => {
        return animal.species == filter
      })
      setFilterFound(filteredList)
    } else {
      setFilterFound(props.foundPets)
    }
  }

  console.log(props)
  return (
    <div>
      <button onClick={() => clickHandler("cat")}>Cats</button>
      <button onClick={() => clickHandler("dog")}>Dogs</button>
      <button onClick={() => clickHandler("")}>All</button>

      {filterFound.map(animal => (
        <div key={animal.id}>
  <img className="foundPetImg" src={animal.photo} />
          <div >
            <h3>{animal.name}</h3>

            {auth.isAuthenticated &&
              <div>
                <h4>Name: {animal.username}</h4>
                <h4>Email: {animal.email_address}</h4>
                <h4>Contact details: {animal.contact_details}</h4>
              </div>}
          </div>
        </div>
      ))}
    </div>
  )
}

   const mapStateToProps = (globalState) => {
  return {
    foundPets: globalState.foundPets,
    auth: globalState.auth
  }
}   

export default connect(mapStateToProps)(FoundPets)