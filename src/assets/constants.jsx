import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export const images = [
    {
        id: 1,
        image: 'src/assets/images/markus-winkler-5ofa31FPKYY-unsplash.jpg',
        title: 'Todo App',
        desc: 'Todo App with built in ReactJS'
    },
    {
        id: 2,
        image: 'src/assets/images/kelly-sikkema--1_RZL8BGBM-unsplash.jpg',
        title: 'Notes App',
        desc: 'Basic Notes App build with ReactJS'
    },
    {
        id: 3,
        image: 'src/assets/images/noaa-Led9c1SSNFo-unsplash.jpg',
        title: 'Weather App',
        desc: 'Weather App build with vanilla JS'
    },
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
]