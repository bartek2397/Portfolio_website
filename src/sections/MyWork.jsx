import React from 'react';
import ProjectCard from '../components/ProjectCard';
import useScrollPosition from '../useScrollPosition';

const MyWork = () => {

  const scrollPosition = useScrollPosition();
  return (
    <div id='work' className={`max-w-[1170px] mr-auto ml-auto pr-[15px] pl-[15px] text-left flex flex-col justify-between ${scrollPosition > 1000 ? 'visible animate-fade-up animate-once animate-duration-1000 animate-ease-in-out animate-normal animate-fill-backwards' : 'invisible'} `}>
        <div className='w-[100%]'>
            <h1>My Work</h1>
        </div> 
            
            <ProjectCard />
    </div>
  )
}

export default MyWork