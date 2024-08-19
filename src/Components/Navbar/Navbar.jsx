
import { NavLink } from "react-router-dom"
import { FiAlignJustify } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";



export default function Navbar() {
  const [hamberOpen, setHambergOpen] = useState(false)

  let handleClick =() =>{
    setHambergOpen(!hamberOpen)
  }
  

  return (
    <>
    
    <nav className="bg-slate-600 h-20 grid grid-cols-2  gap-0 sticky top-0 "> 
      <div className="grid justify-around text-center items-center">
        <a href="/">
        <img className='text-3xl w-20 hover:cursor-pointer text-center' src="logo2.png" alt="" />

        </a>
      
      </div>

      <div className="grid justify-around md:hidden  items-center hover:cursor-pointer" onClick={handleClick}>
        {hamberOpen?<RxCross1 className="h-11 w-10"/>:<FiAlignJustify className="h-11 w-10"/> }
       
      </div>
      <div className="link hidden md:flex md:text-center md:items-center md:gap-4 md:w-full text-2xl text-white ">
        <NavLink className='hover:text-gray-400 hover:underline ' to="/">Home</NavLink>
        <NavLink className='hover:text-gray-400 hover:underline' to="/about">About</NavLink>
        <NavLink className='hover:text-gray-400 hover:underline' to="/projects">Projetcs</NavLink>
        <NavLink className='hover:text-gray-400 hover:underline' to="/resume">Resume</NavLink>
        <NavLink to="https://github.com/warsi0707/Samir-Portfolio"><button className="bg-purple-500 h-10 w-24 text-center rounded-md p-1  hover:bg-purple-300 ">GitHub</button></NavLink>
        
      </div>

      
      
     
      

 

      </nav>
      <div className={hamberOpen ? "md:hidden" : "hidden "}>
     <div className="bg-slate-600  w-full border-2 border-gray-700 fixed top-20">
        <ul className=" grid justify-items-center text-2xl space-y-5 my-5 ">
          <NavLink to="/"  className=" hover:text-gray-300">Home</NavLink>
          <NavLink to="/about"  className="  hover:text-gray-300 ">About</NavLink>
          <NavLink to="/projects"  className="  hover:text-gray-300 ">Projects</NavLink>
          <NavLink to="/resume"  className="  hover:text-gray-300 ">Resume</NavLink>
          <NavLink to="https://github.com/warsi0707/Samir-Portfolio"  className="  hover:text-gray-300 ">GitHub</NavLink>
        </ul>
      </div>
     </div>


    
 
   
    
    </>
  )
}
