import { delay, motion } from 'framer-motion'
import React from 'react'


const LogoImage = () => {
  return (
    <motion.div
  animate={{ x: [-200, 200, 0] }}>
    
    <img className='avengersLogo' href="" src="https://res.cloudinary.com/dvedrbvnw/image/upload/v1665489356/avengers/5842a4f5a6515b1e0ad75af6_p46j5y.png" alt="avengers characters" />
  </motion.div>
  )
}

export default LogoImage