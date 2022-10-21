import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import images from '../assets/images';


const ProjectCard = ({ title, desc }) => {
    
  return (
    <div className='flex justify-between w-[30%]'>
        <Card className='text-white bg-gray-600 h-[95%] text-left mt-10 font-orbitron'>
            <CardMedia
                
            >
                {images.map((image, id) => (
                    <img src={image.src} alt={image.alt} key={id} />
                ))}
            
            </CardMedia>
            <CardContent>
                <Typography variant='h5' className='m-2 font-orbitron'>
                    {title}
                </Typography>
                <Typography variant='caption' className='ml-2 font-orbitron' >
                    {desc}
                </Typography>
            </CardContent>
        </Card>
    </div>
  )
}

export default ProjectCard