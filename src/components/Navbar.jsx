
import React from 'react';
import { GoRepo } from 'react-icons/go';
import { HiOutlineCode, HiOutlineMenuAlt3 } from 'react-icons/hi';
import { resumeURL, siteRepo } from '../variables.js';
import SideMenu from './SideMenu';

export const handleSideMenu = ()=>{
  document.querySelector('#sideMenu').classList.toggle('hidden')
}

function Navbar() {

  

  const navmenu = [{'name':'About', 'url':'#about'},{'name':'Work', 'url':'#work'},{'name':'Contact', 'url':'#contact'}]
  
  
  return (
    <nav className='overflow-hidden fixed inset-x-0  flex items-center justify-between px-[30px] md:px-[40px] lg:px-[50px] py-3 bg-ebony  max-w-8xl transition delay-500 bg-navColor transition-x-0' >

      <a href='/' className="flex items-center space-x-2 transition ease-in-out delay-150 md:-translate-x-4 md:px-6 ">

        <HiOutlineCode className='w-10 h-10 text-teal-300 '/>
        <span className='hidden text-xl text-teal-300 md:block text-bold'>CoderAnt</span>

      </a>
      <div className='flex items-center transition ease-in-out delay-150 space-x-9 md:-translate-x-2 '>

        <div className='items-center hidden text-white space-x-11 md:flex md:p-4 '>
          <a href={siteRepo} className='flex items-center space-x-3 text-slate-300 hover:text-teal-300'>
              <GoRepo/>
          </a>

          {navmenu.map((item)=>{
            return <a href={item.url} className='hover:text-teal-300' >
              {item.name}
              </a>
          })}
          
        </div>
        <a href={resumeURL} className='hidden px-3 py-2 text-teal-300 border-2 border-teal-300 rounded md:block hover:bg-teal-300 hover:bg-opacity-10 text-bold text-md ' target={'_blank'} rel="noreferrer"  >
          Resume
        </a>
        <button className='md:hidden '  onClick={handleSideMenu}>
          <HiOutlineMenuAlt3 className='w-10 h-10 text-teal-300 '/>
        </button>
        
        <SideMenu/> 
      
        
      </div>
      
    </nav>
  )
}

export default Navbar