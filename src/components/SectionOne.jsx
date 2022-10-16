import React from 'react'
import Navbar from './Navbar'
import Intro from './Intro'
import AboutMe from './AboutMe'

const SectionOne = () => {
  return (
    <section className='bg-nasa-image bg-center bg-cover h-[100vh]'>
        <Navbar />
        <Intro />
    </section>
  )
}

export default SectionOne