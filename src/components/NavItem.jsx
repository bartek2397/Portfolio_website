import React from 'react'
import { Button } from "@mui/material"


const NavItem = ({ name }) => {
  return (
    <div className='flex flex-col mt-10 p-2 relative w-[50vw]'>
        <Button className='absolute text-slate-300 right-0 font-orbitron'>{name}</Button>
        <span className='block w-[400px] bg-gray-600 h-[2px] rounded-[40%] absolute translate-y-10 right-0 mr-2'></span>
    </div>
  )
}

export default NavItem;