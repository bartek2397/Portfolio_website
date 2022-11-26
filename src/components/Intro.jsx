import React from 'react'

const Intro = () => {
  return (
    <div className='max-w-[1170px] h-screen flex items-center justify-center m-auto md:flex-col'>
        <div className='w-[50%] h-[50%] md:w-full md:text-center md:pt-20 animate-fade-up animate-once animate-duration-1000 animate-ease-in-out animate-normal animate-fill-backwards'>
          <h1 className='text-[#C9C5CB]'>Bartek Wszolek</h1>
          <h2 className='text-[#C9C5CB]'>Frontend developer</h2>
        </div>
        <div className='w-[50%] h-[50%] relative md:w-full md:fluid-md'>
          <img src="src/assets/images/MacBook_Air_Half_Closed_Front_L.png" alt="Laptop" className='w-[90%] absolute bottom-[25%] left-[0%] lg:bottom-[25%] md:w-[60%] md:left-[20%] animate-fade-up animate-once animate-duration-1000 animate-ease-in-out animate-normal animate-fill-backwards'/>
          <img src="src/assets/images/iPhone_Laying_R.png" alt="Phone" className='w-[40%] absolute bottom-[25%] left-[0%] lg:bottom-[25%] md:w-[25%] md:bottom-[40%] md:left-[20%] animate-fade-up animate-once animate-duration-1000 animate-delay-500 animate-ease-in-out animate-normal animate-fill-backwards'/>
          <img src="src/assets/images/Mouse_L.png" alt="Mouse" className='w-[40%] absolute bottom-[25%] left-[50%] lg:bottom-[25%] md:w-[25%] md:bottom-[40%] md:left-[55%] animate-fade-up animate-once animate-duration-1000 animate-delay-1000 animate-ease-in-out animate-normal animate-fill-backwards  '/>

        </div>
    </div>
  )
}

export default Intro;