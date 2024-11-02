import Home2 from "./Home2"
import About from "../About/About"
import Project from "../Projects/Project"
import Contact from "../Contact"
function Home() {
  return (
   
   <>
   <section id="home">
   <div className="main-top grid space-y-5 h-[300px] justify-evenly mt-36  mb-52 md:flex md:mb-10">
    <div className="top-name text-5xl p-5  mt-20  ">
      <h1 className="mb-5 text-left">Hi There! <span className="wave" role="img" aria-labelledby="wave">👋🏻</span> </h1>
      <h1 className="mb-5">I am <strong className="text-purple-600">SAMIR WARSI</strong></h1>
    </div>
    <div className="top-img text-3xl flex justify-center">
      <img src="image.png" alt="" />
    </div>
   </div>
   <Home2/>
   </section>
   <About/>
   <Project/>
   <Contact/>
   
   </>
   
  )
}

export default Home
