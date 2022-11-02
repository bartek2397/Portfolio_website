import React from 'react'
import { links, contacts } from '../assets/constants'


const Footer = () => {
  return (
        <footer className='max-w-[1170px] mr-auto ml-auto pr-[15px] pl-[15px] mt-40 flex justify-between xl:flex-col xl:justify-center '>
            <div className='w-[30%] flex items-center justify-center xl:w-full'>
              <h2 className='xl:fluid-2xl text-center'>Contact</h2>
            </div>
            <div className='flex justify-evenly w-[70%] xl:w-full xl:justify-center md:flex-col md:items-center '>
              <div className='flex flex-col w-[30%] justify-center xl:w-[50%] xl:items-center md:w-full'>
              {links.map((item) => (
                <a key={item.id} href={item.link} target='_blank' className='text-white no-underline m-5 text-lg md:fluid-sm'>
                  {item.icon} {item.name}
                </a>
              ))}
              </div>
              <div className='w-[30%] flex flex-col justify-center xl:w-[50%] md:items-center md:w-[100%]'>
                {contacts.map((contact) => (
                  <p className='text-white text-lg ml-5 text-center md:ml-0 md:fluid-sm '>
                    {contact.icon} {contact.content}
                  </p>
                ))}
              </div>
            </div>
            
        </footer>
  )
}

export default Footer;