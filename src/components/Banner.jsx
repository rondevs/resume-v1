import React from 'react'
import { GiSpiderWeb } from 'react-icons/gi'
import ant from '../img/cant.png'

function Banner() {
  

  
  return (
    <div  className=' flex flex-col md:flex-row  items-center min-h-[100vh] bg-transparent justify-center py-[100px] space-y-[4rem] md:space-x-20 lg:mx-[60px] 2xl:mx-[150px]'>


        <div className='flex flex-col space-y-7'>
        

          <h3  className='text-lg text-teal-300 xl:text-xl '>Hi, I am</h3>
          <h2 className='text-5xl text-slate-100 lg:text-6xl xl:text-8xl text-bold delay-250'>Rownok Bosunia</h2>
          <h2 className='text-4xl uppercase lg:text-5xl xl:text-7xl text-slate-300 text-bold'>
            <em>I build Web Apps</em> 
          </h2>
          <p className='text-lg xl:text-2xl text-slate-400'>
            I am a Software Developer, specialized in web technologies. <br /> Currently I am doing Freelance jobs on Fiverr and upWork.
          </p>

        </div>
        <GiSpiderWeb className='w-[8rem] h-[8rem] md:w-[11rem] md:h-[11rem] text-white hover:object-scale-down hover:text-teal-100 '/>
      

      

        
      <img src={ant} alt="ant" width={120} className='hidden md:block absolute top-[88vh]  left-[50%]'/>
    </div>

      
   
  )
}

export default Banner


