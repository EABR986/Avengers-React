import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import './App.css'

function App() {

  return (
    <>
      <Header />
        <main>
          <Outlet />
        </main>
        <div className='app'>
      <Footer />
      </div>
   </>
  )
}

export default App