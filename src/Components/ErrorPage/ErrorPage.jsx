import { NavLink, useRouteError } from "react-router-dom"
import { TbArrowBack } from "react-icons/tb";

export default function ErrorPage(){
    const error = useRouteError()
    console.log(error)
    return(
        <>
        <div className="h-screen w-full flex justify-center flex-col text-center my-[-68px] space-y-5">
                <div className="text-5xl md:text-8xl">{error.status}</div>
                <div className="text-3xl text-red-700 md:text-5xl">Opps...</div>
                <div className="text-xl text-red-700 md:text-2xl">{error.statusText}</div>
                <div className="flex gap-2 mx-auto text-xl transition ease-in-out delay-100 hover:translate-1 hover:scale-110 md:text-2xl">
                    <NavLink to="/">Back to Home</NavLink>
                   <p className="flex py-2"> <TbArrowBack/></p>
                </div>
                

            
        </div>
        </>
    )
}