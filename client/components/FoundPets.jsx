import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchFound } from '../actions/found'

function FoundPets (props) {

  useEffect(() => {
    props.dispatch(fetchFound())
  }, [])

  console.log(props)
  return (
    <div>
      {props.foundPets.map(animal => (
        <div key={animal.id}>
          <img className="foundPetImg" src={animal.photo} />
          <div>
            <h3>{animal.name}</h3>
            {/* <h3>{animal.username}</h3> */}
          </div>
        </div> 
      ))}        
    </div>
  )
}

   const mapStateToProps = (globalState) => {
  return {
    foundPets: globalState.foundPets
  }
}   

export default connect(mapStateToProps)(FoundPets)