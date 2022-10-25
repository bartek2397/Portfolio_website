import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { images } from '../assets/constants';


const ProjectCard = () => {
    

  return (
    <div className='flex justify-between'>
        {images.map((item, id) => (
            <div className='flex flex-wrap justify-between w-[30%] h-[150%] realtive -z-1'>
                <Card className='w-[100%] text-white bg-gray-600 h-[60%] text-left mt-10 font-orbitron'>
                    <CardMedia key={id} className='cursor-pointer transition duration-500 hover:scale-75'>
                            <img src={item.image} alt={item.title} className='w-[100%] rounded-lg' />
                    </CardMedia>
                    <CardContent className=''>
                        <Typography variant='h5' className='m-2 font-orbitron'>
                            {item.title}
                        </Typography>
                        <Typography variant='caption' className='m-2 font-orbitron' >
                            {item.desc}
                        </Typography>
                    </CardContent>
                </Card>
            </div>
                ))}
    </div>
  )
}

export default ProjectCard