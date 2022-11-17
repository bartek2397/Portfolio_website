import React, { useRef } from 'react'
import Home from './sections/Home'
import AboutMe from './sections/AboutMe'
import MyWork from './sections/MyWork'
import Footer from './sections/Footer'


const App = () => {


    return(
        <div className='bg-black'>
            <Home />
            <AboutMe />
            <MyWork />
            <Footer />
        </div>
    )
}
export default App;