import React from 'react'
import work from '../img/index'

function Work() {
  return (
    <div id='work' className='block md:flex flex-col  w-auto  bg-transparent  py-[100px]  lg:mx-[60px] xl:mx-[200px] space-y-[4rem]  '>
        
      <div className='flex flex-col space-y-9'>
        <h2 className='flex items-center gap-3 text-2xl tracking-wider text-white text-bold title'>Work</h2>
        <div className='grid gap-5 place-content-center '>
          <div className='flex flex-col items-center space-x-4 space-y-2 border-2 md:p-4 md:flex-row border-slate-500'>

            <img src={work.leap} alt="" width={250} className='w-auto portimg'/>
            <span className='p-2 md:p-4 text-slate-300 text-md bg-ebony'>
              This is an E-commerce Website, which I built for a client from friverr.<br/>
              I used WordPress to build the website, as my client requested.
            </span>
          </div>
          <div className='flex flex-col items-center space-x-5 border-2 md:p-4 md:flex-row border-slate-500 '>

            <img src={work.snax} alt="" width={250} className='portimg'/>
            <span className='p-4 text-slate-300 text-md bg-ebony'>
              This is an E-commerce Website, which I built for a client from friverr.<br/>
              I used WordPress to build the website, as my client requested.
            </span>
          </div>
        
        </div>
      </div>
      
    </div>
  )
}

export default Work