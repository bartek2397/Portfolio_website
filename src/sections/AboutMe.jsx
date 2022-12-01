import React from 'react'
import { phrases, techs, learning } from '../assets/constants';
import useScrollPosition from '../useScrollPosition';

const AboutMe = () => {

  const scrollPosition = useScrollPosition();
  
  return (
    <div id='about' className={`bg-[#C9C5CB] relative h-[50rem] md:h-[60rem] pt-10 pb-0 pr-[15px] pl-[15px] text-left`}>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg className='block relative ' data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path className='fill-[#40434E]' d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
        <div className={`max-w-[1170px] m-auto flex flex-col justify-center items-stretch md:flex-col md:justify-center md:items-center ${scrollPosition > 100 ? 'visible animate-fade-up animate-once animate-duration-1000 animate-ease-in-out animate-normal animate-fill-backwards' : 'invisible'}`}>
          <div className='flex flex-wrap'>
            <div className={`w-[100%] md:w-full md:text-center`}>
              <h1 className='md:fluid-5xl text-[#40434E]'>
                About me
              </h1>
            </div>
            <div className='w-[100%] text-[#40434E] sm:w-full sm:m-auto'>
              {phrases.map((phrase, id) => (
                <p key={id}>{phrase.content}</p>
                    ))}
            </div>
          </div>
          <div className='flex flex-col flex-wrap'>
            <div className={`w-[100%] md:w-full md:text-center`}>
              <h2 className='md:fluid-xl text-[#40434E]'>
                Tech Stack
              </h2>
            </div>
            <div className='w-[100%] text-[#40434E] sm:w-full sm:m-auto'>
                  <ul className='p-0'>
                    <div className='flex flex-wrap m-auto justify-center items-center'>
                      {techs.map((tech, id) => (
                        <div className={`text-center w-[25%] p-3 sm:p-0`} >
                          <li key={id} className={`md:fluid-sm list-none ${scrollPosition > 300 ? 'visible animate-fade-up animate-once animate-duration-1000 animate-ease-in-out animate-normal animate-fill-backwards animate-delay-500' : 'invisible'}`}>{tech.icon} {tech.name}</li>
                        </div>
                    ))}
                    </div>
                  </ul>
            </div>
            <div>
              <div>
                <h2 className='md:fluid-xl md:text-center text-[#40434E]'>
                  Currently learning
                </h2>
              </div>
              <div>
              <ul className='p-0'>
                    <div className='flex flex-wrap m-auto justify-center items-center'>
                      {learning.map((item, id) => (
                        <div className='text-center w-[25%] p-3 sm:p-0'>
                          <li key={id} className={`md:fluid-sm list-none ${scrollPosition > 300 ? 'visible animate-fade-up animate-once animate-duration-1000 animate-ease-in-out animate-normal animate-fill-backwards animate-delay-1000' : 'invisible'}`}>{item.icon} {item.name}</li>
                        </div>
                    ))}
                    </div>
                  </ul>
              </div>
            </div>
          </div>
        </div>
    </div>
    
    
  )
}

export default AboutMe;