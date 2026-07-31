import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar.jsx'
import Hero from './layout/Hero.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='container mx-auto px-8 lg:px-20'>
      <Navbar />
      <Hero />
    </div>
  </StrictMode>,
)
