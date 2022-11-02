import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";

const DetailCard = (props) => {
    const {character} = props
    
  return (
    <motion.div className="cardDetail"
    initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{duration: 1}}>
   
      <Link to={`/DetailCharacter/${character.id}`}>
        <img className="cardImgDetail" src={character.image} alt={character.alias} />
      </Link>
        <div className="card-body">
            <h2 className="card-title">{character.alias}</h2>
            <p className="card-text">Real Name:{character.realName}</p>
            <p className="card-text"> {character.description}</p>
      
         </div>
    </motion.div>
  )
}

export default DetailCard