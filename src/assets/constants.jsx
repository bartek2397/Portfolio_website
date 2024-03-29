import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin  } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { Tailwindcss, Python, Git, Html5, CssThree, Sass, Javascript, Npm, ReactJs, Nodedotjs, Express, Typescript, Nextdotjs } from "@icons-pack/react-simple-icons";

import Notes from '../assets/images/Notes.PNG'
import Todo from '../assets/images/Todo.PNG'
import Weather from '../assets/images/Weather.PNG'
import Bank from '../assets/images/ModernBank.PNG'

export const images = [
    {
        id: 1,
        image: Todo,
        title: 'Todo App',
        desc: 'Todo App with built in ReactJS',
        link: 'https://todo-app-nu-neon.vercel.app/'
    },
    {
        id: 2,
        image: Notes,
        title: 'Notes App',
        desc: 'Notes App build with ReactJS',
        link: 'https://note-app-nu-two.vercel.app/'
    },
    {
        id: 3,
        image: Weather,
        title: 'Weather App',
        desc: 'Weather App build with vanilla JS',
        link: 'https://weather-app-sigma-blond.vercel.app/'
    },
    {
        id: 4,
        image: Bank,
        title: 'Modern Bank App',
        desc: 'Modern Bank App build with ReactJS',
        link: 'https://modernapp-xi.vercel.app/'
    }
];

export const links = [
    {
        id: '1',
        name: 'GitHub',
        link: 'https://github.com/bartek2397',
        icon: 
        <>
            <FontAwesomeIcon icon={faGithub} />
        </>
    },
    {
        id: '2',
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/in/bartek-wszo%C5%82ek-b7620b1b5/',
        icon: <>
        <FontAwesomeIcon icon={faLinkedin} />
    </>
    }
];
export const contacts = [
    {
        id: '1',
        content: 'bartosz.wszolek97@gmail.com',
        icon: 
            <>
                <FontAwesomeIcon icon={faEnvelope} />
            </>
    },
    {
        id: '2',
        content: '+48 790 428 358',
        icon: 
            <>
                <FontAwesomeIcon icon={faPhone} />
            </>
    }
];

export const phrases = [
    { 
      id: 1,
      content: "I'm a beginner Frontend Developer. I have been developing my Frontend skills for over a year now. Main technology I work with lately is ReactJS with Material UI."
    },
    
    { 
      id: 2,
      content: 'I graduated Geography with tourism specialty at Jagiellonian Univeristy in Cracow in 2021. Recently I decided to change my career direction to Web Development.'
    },
    
    // { 
    //   id: 3,
    //   content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur atque recusandae ducimus dignissimos, voluptates doloribus minus hic. Magnam officia beatae a. Quod eaque, similique itaque quo inventore cupiditate quaerat incidunt!'
    // }
    
  ];

export const techs = [
    {
        id: 1,
        name: 'HTML5',
        icon: 
            <>
                <Html5 color="#E34F26" />
            </>
    },
    {
        id: 2,
        name: 'CSS3',
        icon: 
            <>
                <CssThree color="#1572B6" />
            </>
    },
    {
        id: 3,
        name: 'JavaScript',
        icon: 
            <>
                <Javascript color="#F7DF1E" />
            </>
    },
    {
        id: 4,
        name: 'ReactJS',
        icon: 
            <>
                <ReactJs color="#61DAFB" />
            </>
    },
    {
        id: 5,
        name: 'Sass',
        icon: 
            <>
                <Sass color="#CC6699" />
            </>
    },
    {
        id: 6,
        name: 'Git',
        icon: 
            <>
                <Git color="#F05032" />
            </>
    },
    {
        id: 7,
        name: 'Python Basics',
        icon: 
            <>
                <Python color="#3776AB" />

            </>
    },
    {
        id: 8,
        name: 'Tailwind CSS',
        icon: 
            <>
                <Tailwindcss color="#06B6D4" />
            </>
    },
];

export const learning = [
    {
        id: 1,
        name: 'NodeJS',
        icon: 
            <>
                <Nodedotjs color="#339933" />
            </>
    },
    {
        id: 2,
        name: 'ExpressJS',
        icon: 
            <>
                <Express color="#000000"/>
            </>
    },
    {
        id: 3,
        name: 'TypeScript',
        icon: 
            <>
                <Typescript color="#3178C6"/>
            </>
    },
    {
        id: 4,
        name: 'NextJS',
        icon:
            <>
                <Nextdotjs color="#000000" />
            </>
    }
]