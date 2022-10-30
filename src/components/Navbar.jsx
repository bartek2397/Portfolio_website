import React, { useState } from 'react'
import NavItem from './NavItem';

const Navbar = ({ isOpen }) => {

    

    return (
        
            <div className={`max-w-[1170px] m-auto flex p-5 justify-center md:${isOpen ? 'fixed m-0 flex flex-col w-full h-screen bg-gray-600' : 'hidden'}`}>
                <div className=''>
                    <NavItem name='Home'></NavItem>
                </div>
                <div className=''>
                    <NavItem name='About me'></NavItem>
                </div>
                <div className=''>
                    <NavItem name='My Work'></NavItem>
                </div>
                <div className=''>
                    <NavItem name='Contact' classname={`hidden`}></NavItem>
                </div>
            </div>
    )
}
export default Navbar;