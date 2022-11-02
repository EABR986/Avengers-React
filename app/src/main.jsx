import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import Finder from './pages/Finder'
import AddCharacter from './pages/AddCharacter'
import DetailCharacter from './pages/DetailCharacter'
import NotFound from './pages/NotFound'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/"> 
      <Routes>
       <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/Finder" element={<Finder />} />
        <Route path='AddCharacter' element={<AddCharacter />} />
        <Route path="/DetailCharacter/:id" element={<DetailCharacter />} />
        <Route path="*" element={ <NotFound /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
