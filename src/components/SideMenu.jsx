import React from 'react'
import { HiOutlineX } from 'react-icons/hi'
import { resumeURL } from '../variables'
import { handleSideMenu } from './Navbar'



function SideMenu() {
    const navmenu = [{'name':'About', 'url':'#about'},{'name':'Work', 'url':'#work'},{'name':'Contact', 'url':'#contact'}]
    
  return (
    <div id='sideMenu' className='fixed top-0 right-0 flex flex-col items-center justify-start hidden min-h-[100vh] min-w-[75vw] py-[50px] px-[10px] transition duration-200 ease-in-out transform rounded bg-navColor space-y-11 backdrop-opacity-1' onClick={handleSideMenu}>
      <button className="absolute top-4 right-7">
        <HiOutlineX className='w-10 h-10 text-teal-300'/>
      </button>
      {navmenu.map((item)=>{
          return <a href={item.url} Class='py-2 px-4 m-4 text-white'  >
            {item.name}
            </a>
        })}

      <a href={resumeURL} className='px-3 py-2 text-teal-300 border-2 border-teal-300 rounded md:hidden hover:bg-teal-300 hover:bg-opacity-10 text-bold text-md' target={'_blank'} rel="noreferrer"  >
        Resume
      </a>
    </div>
  )
}

export default SideMenu