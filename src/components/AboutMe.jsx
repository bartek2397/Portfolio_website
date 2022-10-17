import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';


const AboutMe = () => {
  return (
            <div className='max-w-[1170px] mt-0 mb-0 mr-auto ml-auto pt-0 pb-0 pr-[15px] pl-[15px] text-left flex justify-between'>
                <div className='w-[50%]'>
                  <h1 className='pt-[50vh]'>
                    About me
                  </h1>
                </div>
                <div className='w-[60%] h-[50%] pt-[45vh] ml-[200px] text-white'>
                  
                    <Carousel
                    infiniteLoop={true}
                      showArrows={true}
                      showStatus={false}
                      showIndicators={false}
                      axis='vertical'
                      renderArrowPrev={(clickHandler, hasPrev, labelPrev) =>
                      hasPrev && (
                        <button className='w-[100%] h-[30px] bg-transparent border-none' onClick={clickHandler}>
                          <FontAwesomeIcon className='text-xl text-gray-500' icon={faCaretUp} />
                        </button>
                      )}
                      renderArrowNext={(clickHandler, hasNext, labelNext) =>
                      hasNext && (
                        <button className='w-[100%] h-[30px] bg-transparent border-none' onClick={clickHandler}>
                          <FontAwesomeIcon className='text-xl text-gray-500' icon={faCaretDown} />
                        </button>
                      )}
                    >
                    
                      <div className='mb-10 text-justify'>
                        <p>I'm a beginner Frontend Developer. I have been developing my Frontend skills fot over a year now. Main technology I work with lately is ReactJS iwth Material UI/AntDesign</p>
                      </div>
                      <div className='mb-10 text-justify'>
                        <p>I graduated Geography with tourism specialty at Jagiellonian Univeristy in Cracow in 2021. Recently I decided to change my career direction to Web Development.</p>
                      </div>
                      <div className='mb-10 text-justify'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur atque recusandae ducimus dignissimos, voluptates doloribus minus hic. Magnam officia beatae a. Quod eaque, similique itaque quo inventore cupiditate quaerat incidunt!</p>
                      </div>
                    </Carousel>
                  
                </div>
            </div>
    
    
  )
}

export default AboutMe;