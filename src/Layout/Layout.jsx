import React from 'react';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


function Layout({children}) {
  return (
    <>
        
    <main className='absolute overflow-hidden top-0 px-[25px] md:px-[150px]'> 
        
    {children}
    </main>
    <Navbar/>
    <Footer/>

    </>
  )
}

export default Layout