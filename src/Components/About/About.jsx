import React from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import About2 from './About2';


export default function About() {
  return (
    <>
    <section id='about'>
    <div className='p-5 text-center md:p-10'>
     <h1 className='  text-3xl py-10 font-bold'>Know Who <strong className='text-purple-500'>I'm</strong></h1>
    <div className="container flex flex-col  items-center  p-5 space-y-5 md:grid md:grid-flow-col">
      <div className='text-2xl mx-5 space-y-3 text-left md:mx-20'>
        <h1>Hi eveyone, I am <span className='text-purple-500 font-bold'>Samir Warsi</span></h1>
        <h1>I am Graduate pass out student of 2024, and Currently I am fresher.</h1>
        <h1>I have completed Bachelor of Technology from Abdul Kalam Technical University. Lucknow India.</h1>
        <h1>Apart of coding, some other activities that I love to do! </h1>
        <ul className=' text-left space-y-2 md:ml-10'>
          <li> <KeyboardArrowRightIcon/>  Playing  Cricket, Football</li>
          <li><KeyboardArrowRightIcon/> Listing Music</li>
          <li><KeyboardArrowRightIcon/> Watching Documentries</li>
        </ul>
      </div>
      <div>
        <img src="aboutAvatar.png" alt="" className='h-60 mx-10 my-10 md:w-full' />
      </div>
    </div>
    </div>
    </section>

    <About2/>
    </>
  )
}
