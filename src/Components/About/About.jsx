import React from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import About2 from './About2';


export default function About() {
  return (
    <>
    <div className='p-10'>
     <h1 className='ml-48  text-3xl pb-10 font-bold'>Know Who <strong className='text-purple-500'>I'm</strong></h1>
    <div className="container flex justify-evenly p-5">
      <div className='text-2xl mx-20 space-y-3 '>
        <h1>Hi eveyone, I am <span className='text-purple-500 font-bold'>Samir Warsi</span></h1>
        <h1>I am Graduate pass out student of 2024, and Currently I am fresher.</h1>
        <h1>I have completed Bachelor of Technology from Abdul Kalam Technical University. Lucknow India.</h1>
        <h1>Apart of coding, some other activities that I love to do! </h1>
        <ul className='ml-10'>
          <li> <KeyboardArrowRightIcon/>  Playing game like, Cricket, Football</li>
          <li><KeyboardArrowRightIcon/> Listing Music</li>
          <li><KeyboardArrowRightIcon/> Watching Documentries</li>
        </ul>
      </div>
      <div>
        <img src="aboutAvatar.png" alt="" className='w-[500px] mx-10' />
      </div>
    </div>
    </div>

    <About2/>
    </>
  )
}
