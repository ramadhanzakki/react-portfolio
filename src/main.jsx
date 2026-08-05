import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar.jsx'
import Hero from './layout/Hero.jsx'
import AboutMe from './layout/AboutMe.jsx'
import Tools from './layout/Tools.jsx'
import Project from './layout/Project.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Hero />
    <AboutMe />
    <Tools />
    <Project />
  </StrictMode>,
)
