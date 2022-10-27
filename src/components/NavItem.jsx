import React from 'react'
import { Button } from "@mui/material"


const NavItem = ({ name, classname }) => {
  return (
    <div className='flex p-5 md:flex-col md:w-[100%] sm:w-[100%]'>
        <Button className=' text-slate-300 font-orbitron mr-10 md:mr-0'>{name}</Button>
        <span className={`mt-5 w-[100px] bg-gray-400 h-[2px] rotate-90 rounded-[40%] ${classname} md:hidden`}></span>
    </div>
  )
}

export default NavItem;