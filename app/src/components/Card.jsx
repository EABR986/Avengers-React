import React from 'react'
import { Link } from 'react-router-dom'

const Card = (props) => {
    const {character} = props
    
  return (
    
    <div className="card">
      <Link to={`/DetailCharacter/${character.id}`}>
        <img className="cardImg" src={character.image} alt={character.alias} />
      </Link>
       
    </div>
  )
}

export default Card