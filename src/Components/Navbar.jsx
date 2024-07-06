
import { NavLink } from "react-router-dom"
import Home from "./Home/Home"
import About from "./About/About"


export default function Navbar() {
  return (
    <>
 
    <nav className="navbar bg-slate-600 h-20 flex justify-between  relative ">
     <img className='absolute top-3 ml-20 text-3xl w-20 hover:cursor-pointer' src="logo2.png" alt="" />
      <div className="links absolute flex right-10 top-5 gap-10 mr-10 text-2xl text-sky-100">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projetcs</NavLink>
        <NavLink to="/resume">Resume</NavLink>
      
        <button className="bg-purple-500 h-10 w-24 text-center rounded-md p-1  hover:transition ease-in-out  ">GitHub</button>

        
      </div>
    </nav>
   
    
    </>
  )
}
