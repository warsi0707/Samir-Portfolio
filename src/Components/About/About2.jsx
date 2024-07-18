import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { DiReact } from "react-icons/di";
import { FaHtml5 } from "react-icons/fa";

export default function About2() {
  return (
    <>
      <h1 className='text-4xl text-center m-5'>Professional <strong className='text-purple-500'>Skillset</strong></h1>
      <div className=' w-80 md:w-[700px] sm:w-[300px] mx-auto mb-10 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2  md:mx-auto gap-5 text-center '>
        <div className= 'border-2 border-purple-500 text-2xl py-5 rounded-md transition ease-in-out delay-150 hover:translate-1 hover:scale-110 item-centre item-2xl'>HTML</div>
        <div className= 'border-2 border-purple-500 text-2xl py-5 rounded-md transition ease-in-out delay-150 hover:translate-1 hover:scale-110 '>CSS</div>
        <div className= 'border-2 border-purple-500 text-2xl py-5 rounded-md transition ease-in-out delay-150 hover:translate-1 hover:scale-110 '>JS</div>
        <div className= 'border-2 border-purple-500 text-2xl py-5 rounded-md transition ease-in-out delay-150 hover:translate-1 hover:scale-110 '>Tailwind CSS</div>
        <div className= 'border-2 border-purple-500 text-2xl py-5 rounded-md transition ease-in-out delay-150 hover:translate-1 hover:scale-110 '>Node Js</div>
        <div className= 'border-2 border-purple-500 text-2xl py-5 rounded-md transition ease-in-out delay-150 hover:translate-1 hover:scale-110 '>React Js</div>
        <div className= 'border-2 border-purple-500 text-2xl py-5 rounded-md transition ease-in-out delay-150 hover:translate-1 hover:scale-110 '>Vite</div>
        <div className= 'border-2 border-purple-500 text-2xl py-5 rounded-md transition ease-in-out delay-150 hover:translate-1 hover:scale-110 '>Redux</div>
        <div className= 'border-2 border-purple-500 text-2xl py-5 rounded-md transition ease-in-out delay-150 hover:translate-1 hover:scale-110 '>Git & GitHub</div>
        <div className= 'border-2 border-purple-500 text-2xl py-5 rounded-md transition ease-in-out delay-150 hover:translate-1 hover:scale-110 '>React Routes</div>
        <div className= 'border-2 border-purple-500 text-2xl py-5 rounded-md transition ease-in-out delay-150 hover:translate-1 hover:scale-110 '>Rest API</div>
        <div className= 'border-2 border-purple-500 text-2xl py-5 rounded-md transition ease-in-out delay-150 hover:translate-1 hover:scale-110 item-centre'>CRUD</div>
      </div>
   
    </>
  )
}
