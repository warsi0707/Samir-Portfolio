import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {
  let date = new Date()
  let year = date.getFullYear()
  return (
    <footer className='flex justify-evenly h-16 text-center items-center bg-gray-900 text-white text-lg'>
      <div>
        <h1>Designed and Developed by Samir Warsi</h1>
      </div>
      <div>
        <h1>Copyright © {year} Samir</h1>
      </div>
      <div className=' flex gap-5 '>
        <GitHubIcon/>
        <XIcon/>
        <LinkedInIcon/>
        <InstagramIcon/>
      </div>
    </footer>
  )
}
