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
<header class="text-gray-400 bg-gray-900 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <nav class="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
      <Link className='navBar' to="/">Home</Link>
      <NavLink className='navBar' to="/Finder">Finder</NavLink>
      <NavLink className='navBar' to="/AddCharacter">Add Character</NavLink>
    </nav>
    <a class="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-white lg:items-center lg:justify-center mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-purple-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      </a>
      <a href="https://github.com/EABR986" target="_blank" rel="noreferrer">
          <img className='githubImg'  src="https://res.cloudinary.com/dvedrbvnw/image/upload/v1667335193/avengers/GitHub-Mark-Light-120px-plus_knni2z.png" alt="gitHub Logo" />
    </a>
   
  </div>
</header>
















export default Header