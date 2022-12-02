import React from 'react'

import Laptop from '../assets/images/MacBook_Air_Half_Closed_Front_L.png'
import Mouse from '../assets/images/Mouse_L.png'
import Phone from '../assets/images/iPhone_Laying_R.png'

const Intro = () => {
  return (
    <div className='max-w-[1170px] h-screen flex items-center justify-center m-auto md:flex-col'>
        <div className='w-[50%] h-[50%] pr-[15px] pl-[15px] md:w-full md:text-center md:pt-20 animate-fade-up animate-once animate-duration-1000 animate-ease-in-out animate-normal animate-fill-backwards'>
          <h1 className='text-[#C9C5CB]'>Bartek Wszolek</h1>
          <h2 className='text-[#C9C5CB]'>Junior Frontend developer</h2>
        </div>
        <div className='w-[50%] h-[50%] relative md:w-full md:fluid-md'>
          <img src={Laptop} alt="Laptop" className='w-[80%] absolute bottom-[25%] xl:bottom-0 left-[0%] lg:bottom-[25%] md:w-[60%] md:left-[20%] sm:bottom-[40%] animate-fade-up animate-once animate-duration-1000 animate-ease-in-out animate-normal animate-fill-backwards'/>
          <img src={Phone} alt="Phone" className='w-[30%] absolute bottom-[25%] xl:bottom-0 left-[0%] lg:bottom-[25%] md:w-[25%] md:bottom-[40%] md:left-[20%] sm:bottom-[40%] animate-fade-up animate-once animate-duration-1000 animate-delay-500 animate-ease-in-out animate-normal animate-fill-backwards'/>
          <img src={Mouse} alt="Mouse" className='w-[30%] absolute bottom-[25%] xl:bottom-0 left-[50%] lg:bottom-[25%] md:w-[25%] md:bottom-[40%] md:left-[55%] sm:bottom-[40%] animate-fade-up animate-once animate-duration-1000 animate-delay-1000 animate-ease-in-out animate-normal animate-fill-backwards  '/>

        </div>
    </div>
  )
}

export default Intro;