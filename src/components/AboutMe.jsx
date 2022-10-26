import React from 'react'
import { phrases } from '../assets/constants';

const AboutMe = () => {

  return (
    <div className='max-w-[1170px] mt-0 mb-0 mr-auto ml-auto pt-0 pb-0 pr-[15px] pl-[15px] text-left flex justify-between'>
        <div className='w-[50%]'>
          <h1 className='pt-[50vh]'>
            About me
          </h1>
        </div>
        <div className='w-[50%] pt-[45vh] text-white'>
          {phrases.map((phrase, id) => (
            <p key={id}>{phrase.content}</p>
                ))}
        </div>
    </div>
    
    
  )
}

export default AboutMe;