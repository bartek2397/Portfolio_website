import React from 'react'
import { links, contacts } from '../assets/constants'
import { Button } from '@mui/material'


const Footer = () => {
  return (
        <footer id='contact' className='max-w-[1170px] m-auto pt-10 pb-10 flex justify-between xl:flex-col xl:justify-center'>
            <div className='w-[30%] flex items-center justify-center xl:w-full '>
              <h2 className='xl:fluid-2xl text-center text-[#40434E]'>Contact Me</h2>
            </div>
            <div className='flex justify-evenly w-[70%] xl:w-full xl:justify-center md:flex-col md:items-center '>
              <div className='flex flex-col w-[50%] justify-center xl:w-[50%] xl:items-center md:w-full'>
              {links.map((item) => (
                <Button className='capitalize p-0'>
                  <a key={item.id} href={item.link} target='_blank' className='text-[#40434E] text-center no-underline m-5 text-lg md:fluid-sm md:m-1 md:w-[100vw]'>
                    {item.icon} {item.name}
                  </a>
                </Button>
              ))}
              </div>
              <div className='w-[50%] flex flex-col justify-center xl:w-[50%] md:items-center md:w-[100%]'>
                {contacts.map((contact) => (
                  <p className='text-[#40434E] text-lg ml-5 text-center md:ml-0 md:fluid-sm md:m-1 md:w-[100vw]'>
                    {contact.icon} {contact.content}
                  </p>
                ))}
              </div>
            </div>
            
        </footer>
  )
}

export default Footer;