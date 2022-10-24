import React from 'react'
import Navbar from '../components/Navbar'
import Intro from '../components/Intro'
import AboutMe from '../components/AboutMe'

const SectionOne = () => {
  return (
    <section className='bg-nasa-image bg-center bg-cover h-[100vh]'>
        <Navbar />
        <Intro />
    </section>
  )
}

export default SectionOne