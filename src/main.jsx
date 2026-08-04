import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar.jsx'
import Hero from './layout/Hero.jsx'
import AboutMe from './layout/AboutMe.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div>
      <Navbar />
      <Hero />
      <AboutMe />
    </div>
  </StrictMode>,
)
