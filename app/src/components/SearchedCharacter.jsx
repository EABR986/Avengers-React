
import React from 'react'
import { motion } from "framer-motion";

import { useState, useEffect } from "react";
import AddCharacter from './AddCharacterBtn';
import Card from './Card';



 const SearchedCharacter = () => {
  const [characterList, setCharacterList] = useState([]);
  const [input, setInput] = useState('');
  
  useEffect(() => {
    (async () => {
      let data = await fetch(`https://avengers-server.onrender.com/characters`).then(
        (res) => res.json()
      );
    
      setCharacterList(data);
      
    })();
 }, []);

return (
  <>
  <div className="searchDiv">
  <input type="text" placeholder="Search your character" value={input} 
    onChange={ (e) => setInput(e.target.value) } />
    </div>
    <motion.div className="cardDiv"
    initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{duration: 1}}>
    
   {characterList.map((character) => (
    (character.alias.toLowerCase().includes(input.toLowerCase())) ?
    
    <Card key={character.id} character={character} />
    
     : null
      ))}
     </motion.div>
      <AddCharacter />
  
    </>
)
}
  

export default SearchedCharacter