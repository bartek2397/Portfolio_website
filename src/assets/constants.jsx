import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin  } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { Tailwindcss, Python, Git, Html5, CssThree, Sass, Javascript, Npm, ReactJs, Nodedotjs, Express } from "@icons-pack/react-simple-icons";


export const images = [
    {
        id: 1,
        image: '../assets/images/Todo.png',
        title: 'Todo App',
        desc: 'Todo App with built in ReactJS',
        link: 'https://todo-app-nu-neon.vercel.app/'
    },
    {
        id: 2,
        image: '../assets/images/Notes.png',
        title: 'Notes App',
        desc: 'Notes App build with ReactJS',
        link: 'https://note-app-nu-two.vercel.app/'
    },
    {
        id: 3,
        image: '../assets/images/Weather.png',
        title: 'Weather App',
        desc: 'Weather App build with vanilla JS',
        link: 'https://weather-app-sigma-blond.vercel.app/'
    },
    {
        id: 4,
        image: '../assets/images/ModernBank.png',
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
      content: "I'm a beginner Frontend Developer. I have been developing my Frontend skills fot over a year now. Main technology I work with lately is ReactJS with Material UI/AntDesign"
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

export const techs = [
    {
        id: 1,
        name: 'HTML5',
        icon: 
            <>
                <Html5 />
            </>
    },
    {
        id: 2,
        name: 'CSS3',
        icon: 
            <>
                <CssThree />
            </>
    },
    {
        id: 3,
        name: 'JavaScript',
        icon: 
            <>
                <Javascript />
            </>
    },
    {
        id: 4,
        name: 'ReactJS',
        icon: 
            <>
                <ReactJs />
            </>
    },
    {
        id: 5,
        name: 'Sass',
        icon: 
            <>
                <Sass />
            </>
    },
    {
        id: 6,
        name: 'Git',
        icon: 
            <>
                <Git />
            </>
    },
    {
        id: 7,
        name: 'Python Basics',
        icon: 
            <>
                <Python />

            </>
    },
    {
        id: 8,
        name: 'Tailwind CSS',
        icon: 
            <>
                <Tailwindcss />
            </>
    },
];

export const learning = [
    {
        id: 1,
        name: 'NodeJS',
        icon: 
            <>
                <Nodedotjs />
            </>
    },
    {
        id: 2,
        name: 'ExpressJS',
        icon: 
            <>
                <Express />
            </>
    }
]