import React from 'react';
import ProjectCard from '../components/ProjectCard';

const MyWork = () => {
  return (
    <div className='max-w-[1170px] mr-auto ml-auto pr-[15px] pl-[15px] text-left flex flex-col justify-between '>
        <div className='w-[100%]'>
            <h1>My Work</h1>
        </div> 
            
            <ProjectCard />
    </div>
  )
}

export default MyWork