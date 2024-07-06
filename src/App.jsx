import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Projects from './Components/Projects.jsx'
import Resume from './Components/Resume.jsx'
import Navbar from './Components/Navbar.jsx'
import Footer from './Components/Footer.jsx'


import {BrowserRouter as Router, Route , Routes } from "react-router-dom"


function App() {
  

  


  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/resume' element={<Resume/>} />
      </Routes>
      <Footer/>
    </Router>
    
     
    </>
  )
}

export default App
