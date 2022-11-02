import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from "uuid";
import AddBtn from '../components/AddBtn';
import axios from 'axios'


const AddCharacter = () => {

const [name, setName] =useState('')
const [realname, setRealname] =useState('')
const [description, setDescription] =useState('')
const [image, setImage] =useState('')



const createCharacter = (e) => {
  e.preventDefault();
  const movie = {
    id: uuidv4(),
    alias: name,
    realName: realname,
    image: image,
    description: description,
  }; 
   postCharacter(movie)
};

const postCharacter = async (item) => { 
  axios({
    method: "POST",
    url: "http://localhost:3000/characters",
    data: item,
    }) 
};



  return (
   <>
    <div className="addCharacterDiv">
    <form>
      <label htmlFor="alias">Alias</label>
        <input type="text" placeholder="CHARACTER NAME" value={name} onChange={ (e) => setName(e.target.value) }/>
      <label htmlFor="realName">Real Name</label>
        <input type="text" placeholder="CHARACTER REAL NAME" value={realname} onChange={ (e) => setRealname(e.target.value) }/>
      <label htmlFor="description">Description</label>
      <input className='description' type="text" placeholder="DESCRIPTION" value={description} onChange={ (e) => setDescription(e.target.value) }/>
      <label htmlFor="image">Image</label>
      <input type="text" placeholder="IMAGE OF THE NEW AVENGER" value={image} onChange={ (e) => setImage(e.target.value) }/>
      <button className="addBtn" onClick={(e)=> createCharacter(e)} >ADD CHARACTER</button>
    </form>
    </div>
    <h2>PREVIEW</h2>
    <div className="cardPreview">
        <img className='cardImg' src={image} alt={name} />
    
    <div className="card-body">
        <h2 className="card-title">Character Name:{name}</h2>
        <p className="card-text">Real Name:{realname}</p>
        <p className="card-text">Description:{description} </p>
        </div>
    
    <Link to={`/Finder`} className="charactersLink">
    <button>lets find our new hero!!</button>
    </Link>
    </div>
    
</>
  )
}

export default AddCharacter