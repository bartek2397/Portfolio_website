import React from 'react'
import { Link } from '@mui/icons-material'
import { GitHub } from '@mui/icons-material'
import { Typography } from '@mui/material'

const Footer = () => {
  return (
    <section className='w-full h-[30vh] bg-gray-800'>
        <div className='w-[1170px] mt-0 mb-0 mr-auto ml-auto pt-5 pb-0 pr-[15px] pl-[15px] text-left flex flex-col justify-between'>
          <footer>
            <h2>Contact</h2>
            <div>
              <Typography>
                <Link variant='body2'>
                  
                </Link>
              </Typography>
            </div>
          </footer>
        </div>
    </section>
  )
}

export default Footer;