import React from 'react'
import { Link } from 'react-router-dom'

const AddCharacter = () => {
  return (
    <Link to={`/AddCharacter`} className="addCharacter">
    <button className='AddBtn' onClick={() => console.log("click para agregar")} >Lets add that Avenger! 🧙🏽‍♂️</button>
   </Link>
  )
}


export default AddCharacter