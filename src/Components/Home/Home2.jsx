import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Home2() {
  return (
    <>
    <h1 className="text-5xl text-center ">LET ME <span className='text-purple-500 font-bold'>INTODUCE</span> MYSELF</h1>
    <div className="introduction flex justify-evenly m-5    mx-20">
        <div className="intro-content text-2xl m-20 space-y-6">
            <h1>I fell in love with programming and I have at least learnt something, I think…</h1>
            <h1>I am fluent in classics like <i className='text-purple-500  font-bold'>Html5, CCS3, JAVASCRIPT, NODE, REACT</i> </h1>
            <h1>My field of Intrest's are building new <i className='text-purple-500  font-bold'>Web Technologies and Products.</i>  </h1>
            <h1>Whenever possible, I also apply my passion for developing products with <span>Node.Js</span> and <span>Modern Javascript Library and Frameworks</span> like <span>React.js </span></h1>
        </div>
    <img src="avatar.png" alt="" className=''/>
   </div>
   <div className="findMe  text-center space-y-5 mb-20">
        <h1 className='text-5xl'>FIND ME ON </h1>
        <h1>Feel free to <strong>connect</strong> with me</h1>
        <div className="f-links flex justify-center gap-5">
            <div className='bg-purple-600 w-16 h-10 text-center rounded-xl p-1'>
                <a href="" ><GitHubIcon/></a>
            </div>
            <div className='bg-purple-600 w-16 h-10 text-center rounded-xl p-1'>
                <a href="" ><XIcon/></a>
            </div>
            <div className='bg-purple-600 w-16 h-10 text-center rounded-xl p-1'>
                <a href="" ><LinkedInIcon/></a>
            </div>
            <div className='bg-purple-600 w-16 h-10 text-center rounded-xl p-1'>
                <a href="" ><InstagramIcon/></a>
            </div>
  
        </div>
    </div>
    
    </>
  )
}
