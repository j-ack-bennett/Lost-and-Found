import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchLost } from '../actions/lost'

function LostPets (props) {

  useEffect(() => {
    props.dispatch(fetchLost())
  }, [])

  console.log(props)
  return (
    <div>
      {props.lostPets.map(animal => (
        <div>
          <img className="lostPetImg" key={animal.id} src={animal.photo} />
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
    lostPets: globalState.lostPets
  }
}

export default connect(mapStateToProps)(LostPets)