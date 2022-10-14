import React from 'react'
import { Button } from "@mui/material"

const NavItem = () => {
  return (
    <div className='flex flex-col mt-5 p-2 relative w-[50vw]'>
        <Button className='absolute text-[#86a2ff] right-0'>Lorem ipsum1</Button>
        <span className='block w-[400px] bg-gray-600 h-[2px] rounded-[40%] absolute translate-y-8 right-0 mr-2'></span>
    </div>
  )
}

export default NavItem;