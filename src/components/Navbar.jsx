import React from 'react'
import NavItem from './NavItem'

const Navbar = () => {
    return (
        <div className='flex flex-col p-5'>
            <div className='relative'>
                <NavItem name='Home'></NavItem>
            </div>
            <div className='relative top-[30%] right-[10%]'>
                <NavItem name='About me'></NavItem>
            </div>
            <div className='relative top-[50%] right-[20%]'>
                <NavItem name='My Work'></NavItem>
            </div>
            <div className='relative top-[70%] right-[30%]'>
                <NavItem name='Contact'></NavItem>
            </div>
            
        </div>
    )
}
export default Navbar;