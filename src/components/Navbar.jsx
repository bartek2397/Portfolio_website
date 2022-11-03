import React, { forwardRef } from 'react'
import NavItem from './NavItem';
import useScrollPosition from '../useScrollPosition';

const Navbar = ({ isOpen }) => {

    const scrollPosition = useScrollPosition();

    return (
        
            <div  className={`min-w-[1170px] m-auto flex p-5 justify-center ${isOpen ? 'fixed z-[2] m-0 flex flex-col w-full h-screen bg-gray-600' : 'lg:hidden'} ${scrollPosition > 50 ? 'transition duration-300 bg-gray-300 fixed text-black h-[100px] rounded-md w-[100vw]' : 'transition duration-300'}`}>
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