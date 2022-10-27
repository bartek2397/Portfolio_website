import React, { useState } from 'react'
import NavItem from './NavItem'
import { Spin as Hamburger } from 'hamburger-react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    

    return (
        <Hamburger toggled={isOpen} toggle={setIsOpen} className='text-left hidden' color='#ffffff'>
            <div className='max-w-[1170px] m-auto flex p-5 justify-center'>
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
        </Hamburger>
    )
}
export default Navbar;