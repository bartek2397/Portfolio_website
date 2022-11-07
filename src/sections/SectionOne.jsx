import React, { useState} from 'react'
import Navbar from '../components/Navbar'
import Intro from '../components/Intro';
import {Spin as Hamburger} from 'hamburger-react';



const SectionOne = () => {

  const [isOpen, setOpen] = useState(false)

  
  

  return (
    <section id='home-page' className='h-[100vh]'>
      <div className={`hidden bg-transparent m-auto text-white lg:block lg:fixed lg:z-10 ${isOpen ? 'absolute z-5' : ''}`}>
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
          <Navbar isOpen={isOpen}/>
          <Intro />
    </section>
  )
}

export default SectionOne