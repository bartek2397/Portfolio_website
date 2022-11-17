import React from 'react'

const Intro = () => {
  return (
    <div className='max-w-[1170px] h-screen flex items-center justify-center m-auto'>
        <div className='w-[50%] h-[50%]'>
          <h1>Bartek Wszolek</h1>
          <h2>Frontend developer</h2>
        </div>
        <div className='w-[50%] h-[50%] relative'>
          <img src="../src/assets/images/MacBook_Air_Half_Closed_Front_L.png" alt="Laptop" className='absolute bottom-36 left-0  animate-sliding-laptop'/>
          <img src="../src/assets/images/iPhone_Laying_R.png" alt="Laptop" className='w-[40%] absolute top-[25%] left-0 animate-sliding-phone '/>
          <img src="../src/assets/images/Mouse_L.png" alt="Laptop" className='w-[40%] absolute top-[25%] left-[50%] animate-sliding-mouse  '/>

        </div>
    </div>
  )
}

export default Intro;