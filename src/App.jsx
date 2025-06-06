import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import ContactMe from './pages/ContactMe'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import Skills from './pages/Skills'

const App = () => {
  return (
    <div>
      <Navbar/>
      <main className="main-content">
        <Routes>
          <Route path='/'  element={<Home/>}  />
          <Route path='/about'  element={<About/>}  />
          <Route path='/contact-me'  element={<ContactMe/>}  />
          <Route path='/projects'  element={<Projects/>}  />        
          <Route path='/skills'  element={<Skills/>}  />        
          <Route path='/Resume'  element={<Resume/>}  />        
        </Routes>
      </main>
    </div>
  )
}

export default App
