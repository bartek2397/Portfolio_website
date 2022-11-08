import React from 'react'
import { phrases } from '../assets/constants';

const AboutMe = () => {

  
  return (
    <div className='max-w-[1170px] h-[100vh] mt-0 mb-0 mr-auto ml-auto pt-0 pb-0 pr-[15px] pl-[15px] text-left flex justify-between items-center md:flex-col md:justify-center md:items-center'>
        <div className='w-[50%] md:w-full md:text-center'>
          <h1 className='md:fluid-5xl'>
            About me
          </h1>
        </div>
        <div className='w-[50%] text-white sm:w-full sm:m-auto'>
          {phrases.map((phrase, id) => (
            <p key={id}>{phrase.content}</p>
                ))}
        </div>
    </div>
    
    
  )
}

export default AboutMe;