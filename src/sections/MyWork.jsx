import React from 'react';
import ProjectCard from '../components/ProjectCard';
import useScrollPosition from '../useScrollPosition';

const MyWork = () => {

  const scrollPosition = useScrollPosition();
  return (
    <div id='work' className='relative bg-[#40434E] h-[70rem] pt-0 pb-0 pr-[15px] pl-[15px] flex sm:h-[120rem] '>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
    <svg className='block relative' data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path className='fill-[#C9C5CB]' d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
    </svg>
      </div>
      <div className={`max-w-[1170px] m-auto text-left flex flex-col justify-between ${scrollPosition > 1050 ? 'visible animate-fade-up animate-once animate-duration-1000 animate-ease-in-out animate-normal animate-fill-backwards' : 'invisible'} `}>
        
          <div className='w-[100%]'>
              <h1>My Work</h1>
          </div>
                <div className='w-full flex mb-10 flex-wrap justify-between sm:flex-col md:items-center'>
                  <ProjectCard />
                </div>
      </div>
    </div>
  )
}

export default MyWork