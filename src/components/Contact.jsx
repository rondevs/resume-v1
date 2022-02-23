import React from 'react'
import { FiCodepen, FiGithub, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi'
import { GiBinoculars } from 'react-icons/gi'
import { codePenURL, emailURL, gitHubURL, instaURl, linkedInURL, twitterURl } from '../variables'



function Contact() {
  return (
    <div id='contact' className='flex flex-col  bg-transparent  py-[100px]  lg:mx-[60px] xl:mx-[200px] space-y-[4rem] md:space-x-3 my-10'>
        
      
        <h2 className='flex items-center gap-3 text-2xl tracking-wider text-white text-bold title'>Contact</h2>
        <div className='grid  place-content-center space-y-[2rem]'>
          <div className='grid place-content-center'>

            <GiBinoculars className='w-[5rem] h-[5rem] text-teal-300'/>
          </div>

          <span className='inline-block p-10 text-xl align-middle text-slate-300'>I am currently looking for new opportunities.<br/>
            If you have any question or just want to say hi,<br/> my inbox is always open. <br/>
            I'll definitely get back to you.
          </span>
          <div className='flex justify-center'>

            <a href={emailURL} className='py-3 text-teal-300 border-2 border-teal-300 rounded px-9 hover:bg-teal-300 hover:bg-opacity-10 text-bold text-md'>Say, Hi</a>
          </div>
        </div>
        <div className='flex justify-center space-x-5 md:hidden text-slate-300 '>
          <a href={instaURl} target={'_blank'} rel="noreferrer">
                <FiInstagram className='w-5 h-5'/>
            </a>
            
            <a href={linkedInURL} target={'_blank'} rel="noreferrer">
                <FiLinkedin className='w-5 h-5'/>
            </a>
            <a href={codePenURL} target={'_blank'} rel="noreferrer">
                <FiCodepen className='w-5 h-5'/>
            </a>
        
            <a href={twitterURl} target={'_blank'} rel="noreferrer">
                <FiTwitter className='w-5 h-5 '/>
            </a>
            <a href={gitHubURL} target={'_blank'} rel="noreferrer">
                <FiGithub className='w-5 h-5'/>
            </a>
        
        </div>

    </div>
  )
}

export default Contact