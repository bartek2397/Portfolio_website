import React from 'react'
import Slider from 'react-slick'; 
import 'slick-carousel/slick/slick.css'
import "slick-carousel/slick/slick-theme.css";
import SliderArrow from './SliderArrow';

const AboutMe = () => {

  const phrases = [
    { 
      id: 1,
      content: "I'm a beginner Frontend Developer. I have been developing my Frontend skills fot over a year now. Main technology I work with lately is ReactJS iwth Material UI/AntDesign"
    },
    
    { 
      id: 2,
      content: 'I graduated Geography with tourism specialty at Jagiellonian Univeristy in Cracow in 2021. Recently I decided to change my career direction to Web Development.'
    },
    
    { 
      id: 3,
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur atque recusandae ducimus dignissimos, voluptates doloribus minus hic. Magnam officia beatae a. Quod eaque, similique itaque quo inventore cupiditate quaerat incidunt!'
    }
    
  ];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    edgeFriction: 0.15,
    nextArrow: <SliderArrow to='next' />,
    prevArrow: <SliderArrow to='prev' />
 };

  return (
    <div className='max-w-[1170px] mt-0 mb-0 mr-auto ml-auto pt-0 pb-0 pr-[15px] pl-[15px] text-left flex justify-between'>
        <div className='w-[50%]'>
          <h1 className='pt-[50vh]'>
            About me
          </h1>
        </div>
        <div className='w-[50%] pt-[45vh] text-white'>
          
            <Slider
              {...settings}
            >
              {phrases.map((phrase, id) => (
                <p key={id}>{phrase.content}</p>
              ))}
            </Slider>
          
        </div>
    </div>
    
    
  )
}

export default AboutMe;