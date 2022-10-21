import React from 'react';
import ProjectCard from './ProjectCard';

const MyWork = () => {
  return (
    <div className='max-w-[1170px] h-[400px] mt-0 mb-0 mr-auto ml-auto pt-0 pb-0 pr-[15px] pl-[15px] text-left flex flex-col justify-between'>
        <div className='w-[100%] pt-[15%]'>
            <h1>My Work</h1>
        </div> 
        <div className='flex w-full justify-between items-stretch'>
            
            <ProjectCard title='Todo App' desc='Web Development' />
            <ProjectCard title='Todo App' desc='Web Development' />
            <ProjectCard title='Todo App' desc='Web Development' />
        </div>
    </div>
  )
}

export default MyWork