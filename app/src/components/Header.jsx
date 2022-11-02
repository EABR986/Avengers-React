import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <header className="App-header">
        <nav className='nav'>
          
          <Link className='navBar' to="/">Home</Link>
          <NavLink className='navBar' to="/Finder">Finder</NavLink>
          <NavLink className='navBar' to="/AddCharacter">Add Character</NavLink>
          <div className='github'>
          <a href="https://github.com/EABR986" target="_blank" rel="noreferrer">
          <img className='githubImg'  src="https://res.cloudinary.com/dvedrbvnw/image/upload/v1667335193/avengers/GitHub-Mark-Light-120px-plus_knni2z.png" alt="gitHub Logo" />
         </a> 
          </div>
          </nav>
      </header>
    
    </>
  )
}

export default Header