import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchFound } from '../actions/found'


function FilterPets (props) {
  const [cats, setCat] = useState([])
  
  useEffect(() => {

    setCat(cat => {
      return props.foundPets.filter(animal => {
        return animal.species == "cat"
        })
    })
  }, [])
  console.log(props)

  
  <div>
      {foundPets.map(animal => (
        <div key={animal.id}>
          <img className="foundPetImg" src={animal.photo} />
          <div>
             <h3>{animal.species}</h3> 
            
          </div>
        </div> 
      ))}        
    </div>
}

   const mapStateToProps = (globalState) => {
  return {
    foundPets: globalState.foundPets,
    lostPets: globalState.lostPets
  }
};       


export default connect(mapStateToProps)(FilterPets)