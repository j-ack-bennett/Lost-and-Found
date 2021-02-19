import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchLost } from '../actions/lost'

function LostPets(props) {

  const { auth } = props

  const [filterLost, setFilterLost] = useState([])

  useEffect(() => {
    props.dispatch(fetchLost())   
  }, []);
  
  useEffect(() => {
    setFilterLost (props.lostPets)
  }, [props.lostPets])

  const clickHandler = (filter) => {
    if(filter) {
      const filteredList = props.lostPets.filter(animal => {
        console.log(animal.species, filter)
        return animal.species == filter
      })
      console.log(filteredList)
      setFilterLost(filteredList)
    } else {
      setFilterLost(props.lostPets)
    }
  }
  

  console.log(props.lostPets)
  return (
    <div>
      <button onClick={() => clickHandler("cat")}>Cats</button>
      <button onClick={() => clickHandler("dog")}>Dogs</button>
      <button onClick={() => clickHandler("")}>All</button>

      {filterLost.map(animal => (
        <div key={animal.id}>

          <img className="lostPetImg" src={animal.photo} />
          <div >
            <h3>{animal.name}</h3>

            {auth.isAuthenticated &&
              <div className="profiles">
                <h2>Contact Information</h2>
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
    lostPets: globalState.lostPets,
    auth: globalState.auth
  }
}

export default connect(mapStateToProps)(LostPets)