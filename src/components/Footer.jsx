import React from 'react'
import { links, contacts } from '../assets/constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
  return (
    <section className='w-full h-[30vh] snap-start'>
        <div className='w-[1170px] h-[100%] mt-0 mb-0 mr-auto ml-auto pr-[15px] pl-[15px] text-left flex flex-col justify-between'>
          <footer className='flex justify-between h-[100%]'>
            <div className='w-[30%] self-center'>
              <h2>Contact</h2>
            </div>
            <div className='flex flex-col w-[30%] justify-center'>
            {links.map((item) => (
              <a key={item.id} href={item.link} target='_blank' className='text-white no-underline m-5 text-lg'>
                {item.icon} {item.name}
              </a>
            ))}
            </div>
            <div className='w-[30%] flex flex-col justify-center'>
              {contacts.map((contact) => (
                <p className='text-white text-lg'>
                  {contact.icon} {contact.content}
                </p>
              ))}
            </div>
            
          </footer>
        </div>
    </section>
  )
}

export default Footer;