import React from 'react'
import FinderBtn from '../components/FinderBtn'
import LogoImage from '../components/LogoImage'
import { motion } from "framer-motion";
const Home = () => {
  return (
    <>
    <motion.div className="Home"
    initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{duration: 1}}>
    
    <h1 className='avengersTitle'>The Avengers Characters</h1>
   <LogoImage />
    <p className="homeText"> Welcome to the Avengers page, here you can find all the information about the Avengers characters, you can also search for a specific character and see their information,
      because the Universe of Marvel is very large, we have decided to create a page were you can add a new Avenger is its not in the list. LETS   - MAKE  -  THIS -   UNIVERSE  -  BIGGER!
    <br></br>  
    First lest start searching for your favorite Avenger!and lest see if its already on the list!
    </p>
    <div class="gif-container">
      <img class = "gif" src="https://res.cloudinary.com/dvedrbvnw/image/upload/v1665491509/avengers/P9JD_quno8h.gif" alt="Advengers gif"/>
    
    </div>
    
    <FinderBtn />
    </motion.div>
    </>
  )
}

export default Home