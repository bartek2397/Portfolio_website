import React from 'react'
import { phrases } from '../assets/constants';
import useScrollPosition from '../useScrollPosition';

const AboutMe = () => {

  const scrollPosition = useScrollPosition();
  
  return (
    <div id='about' className={`max-w-[1170px] h-screen m-auto pt-0 pb-0 pr-[15px] pl-[15px] text-left flex justify-between items-center md:flex-col md:justify-center md:items-center ${scrollPosition > 500 ? 'visible animate-fade-up animate-once animate-duration-1000 animate-ease-in-out animate-normal animate-fill-backwards' : 'invisible'}`}>
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