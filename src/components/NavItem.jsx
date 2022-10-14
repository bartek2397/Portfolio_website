import React from 'react'
import { Button } from "@mui/material"

const NavItem = () => {
  return (
    <li className=''>
        <Button className='p-0 m-0 absolute right-[50%] top-[0%] text-[#86a2ff]'>Lorem ipsum1</Button>
        <span className='block w-[400px] bg-gray-600 h-[2px] rounded-[20%] absolute right-[50%] top-[50%]'></span>
    </li>
  )
}

export default NavItem;