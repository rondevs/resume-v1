import React from 'react'
import { MdOutlinePlayArrow } from 'react-icons/md'
import pic from "../img/dp.jpg"

const webTech = ['JavaScript (ES6+)', 'TypeScript', 'React.js', 'WordPress', 'Node.js', 'Express.js']

function About() {
  return (
    <div id='about' className='block md:flex flex-col lg:flex-row  items-center min-h-[100vh]  justify-start py-[100px]  lg:mx-[60px] xl:mx-[200px] space-y-[4rem]  '>
        
      <div className='flex flex-col items-start space-y-9'>

        <h2 className='flex items-center gap-3 text-2xl tracking-wider text-white text-bold title'>About</h2>
        <div className='flex flex-col w-auto space-y-7'>
          
            <p className='flex text-lg md:text-[18px] text-slate-400 '>
              Hi, My name is Rownok and I love technology. I mainly do web development.
              My journey in web development started in 2019. I started learing HTML & CSS. While learning about web development technologies I really like building stuff for the web. Then I learned CMS like WordPress & Shpify. In 2020 I got my hands wet in web frameworks and libraries.
              <br/>
              <br/>
              Fast forwaring today now I am doing freelance and learing new technologies.
            </p>
            
            <h3 className='text-[18px] text-slate-400'>Technologies currently working with :</h3>
          <div className='flex flex-col items-center grid-cols-2 gap-4 md:grid'>

            {webTech.map(
              (item)=>{
                return (
                  <div className='flex space-x-2'>
                    <MdOutlinePlayArrow className='w-5 h-5 text-teal-300'/>
                    <span className='text-slate-400 md:text-[18]'>{item}</span>
                  </div>
                )
              }
            )}
          </div>
        </div>
        
      
      </div>
      <div className='flex justify-center md:min-w-[250px] h-auto'>
        <img className='p-1 border-2 border-teal-300 rounded-lg md:p-3 md:ml-3' src={pic} alt="Rownok" width={250} />

      </div>
      
    </div>
  )
}

export default About