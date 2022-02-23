import React from 'react';
import About from "../components/About";
import Banner from '../components/Banner';
import Contact from '../components/Contact';
import Work from "../components/Work";
import Layout from "../Layout/Layout";


function Home() {
  return (
    <Layout>
      <Banner/>
      <About/>
      <Work/>
      <Contact/>
      {/* <Testimonial/> */}
      
     
    </Layout>
  )
}

export default Home