import React from 'react'
import NavItem from './NavItem';
import useScrollPosition from '../useScrollPosition';
import { Link } from 'react-scroll'

const Navbar = ({ isOpen, setOpen }) => {

    const scrollPosition = useScrollPosition();

    return (
        
            <div  className={`max-w-[1170px] mr-auto ml-auto mt-0 mb-0 flex pr-[15px] pl-[15px] pt-[10px] justify-between  ${isOpen ? 'lg:fixed lg:z-[8] lg:flex lg:flex-col lg:w-full lg:h-screen lg:bg-[#40434E] lg:items-center lg:text-slate-300' : 'lg:hidden'} ${scrollPosition > 300 ? 'fixed left-0 right-0 z-[2] pt-0 rounded-md lg:rounded-none pb-1 w-[100%] bg-slate-300 transition duration-500' : 'transition duration-500 '}`}>
                <Link onClick={() => setOpen(false)} className={`w-[25%] ${isOpen ? 'h-[100%]' : ''}`} to="home" spy={true} smooth={true} offset={0} duration={500}>
                    <NavItem name='Home' isOpen={isOpen} ></NavItem>
                </Link>
                <Link onClick={() => setOpen(false)} className={`w-[25%] ${isOpen ? 'h-[100%]' : ''}`} to="about" spy={true} smooth={true} offset={10} duration={500}>
                    <NavItem name='About me' isOpen={isOpen}></NavItem>
                </Link>
                <Link onClick={() => setOpen(false)} className={`w-[25%] ${isOpen ? 'h-[100%]' : ''}`} to="work" spy={true} smooth={true} offset={50} duration={500}>
                    <NavItem name='My Work' isOpen={isOpen}></NavItem>
                </Link>
                <Link onClick={() => setOpen(false)} className={`w-[25%] ${isOpen ? 'h-[100%]' : ''}`} to="contact" spy={true} smooth={true} offset={50} duration={500}>
                    <NavItem name='Contact' isOpen={isOpen}  classname={`border-r-0 mr-auto ${isOpen ? 'border-b-0' : ''}`}></NavItem>
                </Link>
            </div>
    )
}
export default Navbar;