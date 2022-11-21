import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export const images = [
    {
        id: 1,
        image: 'src/assets/images/Todo.png',
        title: 'Todo App',
        desc: 'Todo App with built in ReactJS'
    },
    {
        id: 2,
        image: 'src/assets/images/Notes.png',
        title: 'Notes App',
        desc: 'Basic Notes App build with ReactJS'
    },
    {
        id: 3,
        image: 'src/assets/images/Weather.png',
        title: 'Weather App',
        desc: 'Weather App build with vanilla JS'
    },
    {
        id: 4,
        image: 'src/assets/images/ModernBank.png',
        title: 'Modern Bank App',
        desc: 'Modern Bank App build with ReactJS'
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

