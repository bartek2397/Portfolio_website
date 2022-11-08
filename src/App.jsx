import React, { useRef } from 'react'
import Home from './sections/Home'
import AboutMe from './sections/AboutMe'
import MyWork from './sections/MyWork'
import Footer from './sections/Footer'


const App = () => {

    const homeRef = useRef(null)
    const aboutRef = useRef(null)
    const workRef = useRef(null)
    const contactRef = useRef(null)

    const scrollToSection = (elementRef) => {
        elementRef.current.scrollIntoView({ behavior: 'smooth', block: 'start'})
    }
    return(
        <div className='bg-forest-image bg-cover bg-center'>
            <Home ref={homeRef} scrollToSection={scrollToSection}/>
            <AboutMe ref={aboutRef} scrollToSection={scrollToSection} />
            <MyWork ref={workRef} scrollToSection={scrollToSection} />
            <Footer ref={contactRef} scrollToSection={scrollToSection} />
        </div>
    )
}
export default App;