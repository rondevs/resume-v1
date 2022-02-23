import React from 'react'
import { email, emailURL } from '../../variables'
import FooterStand from './FooterStand'
function Email() {

  return (
    <div className='fixed -right-[4.5rem] items-end rotate-90  bottom-[9.7rem] max-w-5'>
    
    <div className='flex items-center space-x-2 '>
      
      <a href={emailURL}  className=" text-[14px] text-slate-300">{email}</a>
     
      
      
      <FooterStand />
    </div>
    </div>
  )
}

export default Email