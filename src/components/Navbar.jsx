import React from 'react'
import { Button } from '@mui/material'
import NavItem from './NavItem'

const Navbar = () => {
    return (
        <div className='flex flex-col p-10'>
        
            
                    <div className='relative'>
                        <NavItem />
                    </div>
                    <div className='relative top-[30%] right-[10%]'>
                        <NavItem />
                    </div>
                    <div className='relative top-[50%] right-[20%]'>
                        <NavItem />
                    </div>
                    <div className='relative top-[70%] right-[30%]'>
                        <NavItem />
                    </div>
                
                
                    {/* <Button className='absolute right-[62%] top-[70%]'>Lorem ipsum2</Button>
                    <span className='block w-[400px] bg-gray-600 h-[2px] rounded-[20%] absolute right-[62%] bottom-[-30%] mr-2'></span>
                
                
                    <Button className='absolute right-[74%] top-[140%]'>Lorem ipsum3</Button>
                    <span className='block w-[400px] bg-gray-600 h-[2px] rounded-[20%] absolute right-[74%] bottom-[-100%] mr-2'></span>
                
                
                    <Button className='absolute right-[86%] top-[210%]'>Lorem ipsum4</Button>
                    <span className='block w-[400px] bg-gray-600 h-[2px] rounded-[20%] absolute right-[50%] top-[50%]'></span> */}
                
            
        </div>
    )
}
export default Navbar;