import React from 'react'
import { Button } from "@mui/material"


const NavItem = ({ name, classname }) => {
  return (
    <div className='flex p-5 lg:flex-col '>
        <Button className=' text-slate-300 font-orbitron pr-10 lg:pr-5 '>{name}</Button>
        <span className={`mt-5 w-[100px] bg-gray-400 h-[2px] rotate-90 rounded-[40%] lg:rotate-0 lg:w-[50vw] lg:mr-auto lg:ml-auto  ${classname}`}></span>
    </div>
  )
}

export default NavItem;