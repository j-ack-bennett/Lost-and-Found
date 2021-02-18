import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchLost } from '../actions/lost'

function LostPets (props) {

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
        return animal.species == filter
      })
      setFilterLost(filteredList)
    } else {
      setFilterLost(props.lostPets)
    }
  }

  useEffect(() => {
    props.dispatch(fetchLost());
  }, []);

  console.log(props)
  return (
    <div>
      <button onClick={() => clickHandler("cat")}>Cats</button>
      <button onClick={() => clickHandler("dog")}>Dogs</button>
      <button onClick={() => clickHandler("")}>All</button>
      {filterLost.map(animal => (
        <div key={animal.id}>
          <img className="lostPetImg" src={animal.photo} />
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
};       


export default connect(mapStateToProps)(LostPets)