import Home2 from "./Home2"

function Home() {
  return (
   
   <>
   <div className="main-top flex h-[300px] justify-evenly mt-36 mb-52">
    <div className="top-name text-5xl p-5 m-5 ">
      <h1 className="mb-5">Hi There! <span className="wave" role="img" aria-labelledby="wave">👋🏻</span> </h1>
      <h1 className="mb-5">I am <strong className="text-purple-600">SAMIR WARSI</strong></h1>
      <h1 className="mb-5">Frontend Developer</h1>
    </div>
    <div className="top-img text-3xl">
      <img src="image.png" alt="" />

    </div>
   </div>
   <Home2/>
   
   </>
   
  )
}

export default Home
