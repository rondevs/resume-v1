import React from 'react'
import { FiCodepen, FiGithub, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi'
import { codePenURL, gitHubURL, instaURl, linkedInURL, twitterURl } from '../../variables'
import FooterStand from './FooterStand'

function SocialLinks() {
  return (
    <div className='fixed -left-[5rem] items-end -rotate-90 bg-transparent bottom-[10rem] max-w-5'>
    
        <div className='flex items-center space-x-6 text-slate-300'>
        
            <FooterStand />
            

            <a href={instaURl} className="rotate-90 " target={'_blank'} rel="noreferrer">
                <FiInstagram className='w-5 h-5'/>
            </a>
            
            <a href={linkedInURL} className="rotate-90 " target={'_blank'} rel="noreferrer">
                <FiLinkedin className='w-5 h-5'/>
            </a>
            <a href={codePenURL} className="rotate-90 " target={'_blank'} rel="noreferrer">
                <FiCodepen className='w-5 h-5'/>
            </a>
        
            <a href={twitterURl} className="rotate-90 " target={'_blank'} rel="noreferrer">
                <FiTwitter className='w-5 h-5 '/>
            </a>
            <a href={gitHubURL}  className="rotate-90 " target={'_blank'} rel="noreferrer">
                <FiGithub className='w-5 h-5'/>
            </a>
        
        </div>
    </div>
  )
}

export default SocialLinks