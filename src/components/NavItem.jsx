import React from 'react'
import { Button } from "@mui/material"
import useScrollPosition from '../useScrollPosition'


const NavItem = ({ name, classname, isOpen }) => {
  const scrollPosition = useScrollPosition();

  

  return (
    <div className={`border-solid border-stone-300 border-t-0 border-b-0 border-l-0 ${classname} ${isOpen ? 'lg:border-r-0 lg:border-b-2 lg:m-auto lg:h-[25%] lg:text-slate-300 lg:border-stone-300' : ''} ${scrollPosition > 300 ? 'border-black mt-1' : ''}`}>
        <Button className={`text-slate-300 font-orbitron w-full xl:fluid-sm ${isOpen ? 'lg:h-[100%] lg:text-slate-300 lg:border-stone-300 ' : ''} ${scrollPosition > 300 ? 'text-black' : ''}`}>{name}</Button>
    </div>
  )
}

export default NavItem;