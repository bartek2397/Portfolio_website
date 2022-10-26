import React from 'react'
import NavItem from './NavItem'

const Navbar = () => {
    return (
        <div className='flex justify-center p-5'>
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
                <NavItem name='Contact' className={`hidden`}></NavItem>
            </div>
            
        </div>
    )
}
export default Navbar;