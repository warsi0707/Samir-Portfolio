import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';

export default function Footer() {
  let date = new Date()
  let year = date.getFullYear()
  return (
    <footer className='grid justify-center p-5 text-center items-center  bg-gray-900 text-white text-lg md:flex md:justify-evenly '>
      <div>
        <h1>Designed and Developed by Samir Warsi</h1>
      </div>
      <div>
        <h1>Copyright © {year} Samir</h1>
      </div>
      <div className=' flex gap-5 justify-center md:flex md:justify-center'>
        <Link to="https://github.com/warsi0707"> <GitHubIcon/></Link>
        <Link to="https://x.com/Samir_warsi2001"> <XIcon/></Link>
        <Link to="https://www.linkedin.com/in/samir-warsi/"> <LinkedInIcon/></Link>
        <Link to="#"> <InstagramIcon/></Link>
       
        
        
        
      </div>
    </footer>
  )
}
