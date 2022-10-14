import React from 'react'
import { Button } from '@mui/material'

const Navbar = () => {
    return (
        <div className='flex flex-col relative'>
            <ul className='relative top-10 right-[5%] flex justify-start m-10 p-5 '>
                <li className='p-0 divide-y-4 divide-gray-600'>
                    <Button className='p-0 m-0 absolute right-[50%] top-[0%] text-[#86a2ff]'>Lorem ipsum1</Button>
                    <span className='block w-[400px] bg-gray-600 h-[2px] rounded-[20%] absolute right-[50%] top-[50%]'></span>
                </li>
                <li>
                    <Button className='absolute right-[62%] top-[70%]'>Lorem ipsum2</Button>
                    <span className='block w-[400px] bg-gray-600 h-[2px] rounded-[20%] absolute right-[62%] bottom-[-30%] mr-2'></span>
                </li>
                <li>
                    <Button className='absolute right-[74%] top-[140%]'>Lorem ipsum3</Button>
                    <span className='block w-[400px] bg-gray-600 h-[2px] rounded-[20%] absolute right-[74%] bottom-[-100%] mr-2'></span>
                </li>
                <li>
                    <Button className='absolute right-[86%] top-[210%]'>Lorem ipsum4</Button>
                    <span className='block w-[400px] bg-gray-600 h-[2px] rounded-[20%] absolute right-[50%] top-[50%]'></span>
                </li>
            </ul>
        </div>
    )
}
export default Navbar;