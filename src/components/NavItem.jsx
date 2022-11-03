import React from 'react'
import { Button } from "@mui/material"
import useScrollPosition from '../useScrollPosition'


const NavItem = ({ name, classname }) => {
  const scrollPosition = useScrollPosition();

  return (
    <div className={`flex p-5 lg:flex-col ${scrollPosition > 50 ? 'h-[100px]' : ''}`}>
        <Button className={`text-slate-300 font-orbitron mr-10 lg:pr-5 ${scrollPosition > 50 ? 'text-black mb-10' : ''}`}>{name}</Button>
        <span className={`mt-5 w-[100px] bg-gray-400 h-[2px] rotate-90 rounded-[40%] lg:rotate-0 lg:w-[50vw] lg:mr-auto lg:ml-auto ${classname} ${scrollPosition > 50 ? 'w-[80px] mt-3' : ''}`}></span>
    </div>
  )
}

export default NavItem;