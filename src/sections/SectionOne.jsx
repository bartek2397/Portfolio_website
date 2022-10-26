import React from 'react'
import Navbar from '../components/Navbar'
import Intro from '../components/Intro'

const SectionOne = () => {
  return (
    <section className='bg-center bg-cover h-[100vh] '>
        <Navbar />
        <Intro />
    </section>
  )
}

export default SectionOne