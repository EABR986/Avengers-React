import React from 'react'
import { Link } from 'react-router-dom'

const FinderBtn = () => {


  return (
    <>
    <Link to={`/Finder`} className="charactersLink">
     <button className='finderBtn' onClick={() => console.log("click")} >Lets search for our favorite Avenger</button>
    </Link>
    </>
   
  )
}

export default FinderBtn