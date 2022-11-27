import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { images } from '../assets/constants';

import Notes from '../assets/images/Notes.png';
import Todo from '../assets/images/Todo.png';
import Weather from '../assets/images/Weather.png';
import Bank from '../assets/images/ModernBank.png';


const ProjectCard = () => {
    

  return (
    <>
        {images.map((item, id) => (
            <div className='w-[30%] h-fit md:w-[45%] sm:min-w-[80%]'>
                        <Card className=' text-white bg-gray-600 h-[60%] md:h-[80%] text-left mt-10 font-orbitron '>
                            <a href={item.link} target='_blank' className='no-underline text-[#C9C5CB]'>
                            <CardMedia key={id} className='cursor-pointer transition duration-500 hover:scale-75'>
                                    <img src={item.image} alt={item.title} className='w-full rounded-lg object-contain' />
                            </CardMedia>
                            <CardContent className=''>
                                <Typography variant='h5' className='m-2 font-orbitron'>
                                    {item.title}
                                </Typography>
                                <Typography variant='caption' className='m-2 font-orbitron' >
                                    {item.desc}
                                </Typography>
                            </CardContent>
                            </a>
                        </Card>
            </div>
                ))}
    </>
    
  )
}

export default ProjectCard