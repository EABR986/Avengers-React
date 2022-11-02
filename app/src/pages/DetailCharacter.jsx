import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import DetailCard from '../components/DetailCard'

const DetailCharacter = () => {
  const [character, setCharacter] = useState({})
const {id} = useParams()

const getCharacter = async () => {
  const data = await fetch(`https://avengers-server.onrender.com/characters/${id}`).then(
    (res) => res.json()
  );
  setCharacter(data);
};

useEffect(() => {
  getCharacter();
}, []);


console.log(character)

  return (
    <>
    <DetailCard key={character.id} character={character} />

    </>
  )
}

export default DetailCharacter