import React from 'react'
import Email from './Footer/Email'
import SocialLinks from './Footer/SocialLinks'

function Footer() {
  return (
    <div className='fixed bottom-0 hidden md:block'>
      <SocialLinks />
      <Email />
    </div>
  )
}

export default Footer