import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchLost } from '../actions/lost'
import { checkAuth } from '../actions/auth'

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
        return animal.species == filter
      })
      setFilterLost(filteredList)
    } else {
      setFilterLost(props.lostPets)
    }
  }

  useEffect(() => {
    const confirmSuccess = () => { }
    props.dispatch(fetchLost())
    props.dispatch(checkAuth(confirmSuccess))
  }, [])

  console.log(props.lostPets[0])
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
              <div>
                <h3>{animal.username}</h3>
                <h3>{animal.email_address}</h3>
                <h3>{animal.contact_details}</h3>
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