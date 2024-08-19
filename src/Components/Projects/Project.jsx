import React from 'react'

export default function Project() {
  return (
    <>
    <div className="headlins items-center text-center py-5 space-y-4">
        <h1 className='text-4xl'>My Recent <strong className='text-purple-500'>Works</strong></h1>
        <p className='text-xl'>Here are a few projects i've worked on recently</p>
    </div>
    <div className='grid grid-cols-1  px-2 gap-10 justify-items-center mx-24  md:grid-cols-2 lg:grid-cols-3'>
        <div className='w-72 h-[550px] border-2 border-sky-500 rounded-xl p-4 md:w-full my-10'>
            <img src="https://images.unsplash.com/photo-1419833173245-f59e1b93f9ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2t5fGVufDB8fDB8fHww" alt=""  className='w-full h-[200px] rounded-xl'/>
            <h1 className='text-2xl text-center py-2'>Weather App</h1>
            <p className='text-lg text-center'>It have ability to show you the current weather of your city, once you typed your city name.</p>
            <div className="btn flex justify-center gap-5 my-10 text-white ">
                <a href="https://github.com/warsi0707/WeatherApp">
                <button className='w-28 h-10 text-lg bg-purple-600 rounded-md transition ease-in-out delay-100 hover:translate-1 hover:scale-110'>Github</button>
                </a>
                <a href="#">
                <button className='w-28 h-10 text-lg bg-purple-600 rounded-md transition ease-in-out delay-100 hover:translate-1 hover:scale-110'>Live</button>
                </a>
            </div>
        </div>

        <div className='w-72 h-[550px] border-2 border-sky-500 rounded-xl p-4 md:w-full my-10'>
            <img src="https://plus.unsplash.com/premium_photo-1683309568772-57011d6c1b7b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dG9kb3xlbnwwfHwwfHx8MA%3D%3D" alt=""  className='w-full h-[200px] rounded-xl'/>
            <h1 className='text-2xl text-center py-2'>To-Do</h1>
            <p className='text-lg text-center'>To rember your daily tasks you can use this app, Basically it stored your data of task and once have you done your task you can mark as done or also you can delete your task as well as you can add new tasks.</p>
            <div className="btn flex justify-center gap-5 my-10 text-white ">
                <a href="https://github.com/warsi0707/ReactToDo">
                <button className='w-28 h-10 text-lg bg-purple-600 rounded-md transition ease-in-out delay-100 hover:translate-1 hover:scale-110'>Github</button>
                </a>
                <a href="#">
                <button className='w-28 h-10 text-lg bg-purple-600 rounded-md transition ease-in-out delay-100 hover:translate-1 hover:scale-110'>Live</button>
                </a>
                
               
            </div>
        </div>

        <div className='w-72 h-[550px] border-2 border-sky-500 rounded-xl p-4 md:w-full my-10'>
            <img src="https://plus.unsplash.com/premium_photo-1666739387996-2a45b0a5dab7?q=80&w=1953&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""  className='w-full h-[200px] rounded-xl'/>
            <h1 className='text-2xl text-center py-2'>Ip Address Finder</h1>
            <p className='text-lg text-center'>With the help of any Ip Address you can find the exact location or city name.</p>
            <div className="btn flex justify-center gap-5 my-10 text-white ">
                <a href="https://github.com/warsi0707/IpFinder">
                <button className='w-28 h-10 text-lg bg-purple-600 rounded-md transition ease-in-out delay-100 hover:translate-1 hover:scale-110'>Github</button>
                </a>
                <a href="#">
                <button className='w-28 h-10 text-lg bg-purple-600 rounded-md transition ease-in-out delay-100 hover:translate-1 hover:scale-110'>Live</button>
                </a>
            
               
            </div>
        </div>

        <div className='w-72 h-[550px] border-2 border-sky-500 rounded-xl p-4 md:w-full my-10'>
            <img src="https://images.unsplash.com/photo-1488229297570-58520851e868?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRhdGF8ZW58MHx8MHx8fDA%3D" alt=""  className='w-full h-[200px] rounded-xl'/>
            <h1 className='text-2xl text-center py-2'>Faker-Data</h1>
            <p className='text-lg text-center'>This is the basic app that generate the fake data with faker API.</p>
            <div className="btn flex justify-center gap-5 my-10 text-white ">
                <a href="https://github.com/warsi0707/FakerData">
                     <button className='w-28 h-10 text-lg bg-purple-600 rounded-md transition ease-in-out delay-100 hover:translate-1 hover:scale-110'>Github</button>
                </a>
                <a href="https://faker-data.netlify.app/">
                <button className='w-28 h-10 text-lg bg-purple-600 rounded-md transition ease-in-out delay-100 hover:translate-1 hover:scale-110'>Live</button>
                </a>
                
               
            </div>
        </div>
    </div>
      
    </>
  )
}
