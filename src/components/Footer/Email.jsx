import React from 'react'
import { email, emailURL } from '../../variables'
import FooterStand from './FooterStand'
function Email() {

  return (
    <div className='fixed -right-[4.9rem]  rotate-90  bottom-[10.1rem]'>
    
      <div className='flex items-center space-x-2 text-slate-100'>
        
        <a href={emailURL}  className=" text-[15px] ">{email}</a>
      
        
        
        <FooterStand />
      </div>
    </div>
  )
}

export default Email