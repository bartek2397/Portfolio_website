import React, { useRef } from 'react'
import Home from './sections/Home'
import AboutMe from './sections/AboutMe'
import MyWork from './sections/MyWork'
import Footer from './sections/Footer'
import ScrollableAnchor from 'react-scrollable-anchor'


const App = () => {


    return(
        <div className='bg-forest-image bg-cover bg-center'>
            <ScrollableAnchor id={`home`}>
                <Home />
            </ScrollableAnchor>
            <ScrollableAnchor id={`about`}>
                <AboutMe />
            </ScrollableAnchor>
            <ScrollableAnchor id={`work`}>
                <MyWork />
            </ScrollableAnchor>
            <ScrollableAnchor id={`contact`}>
                <Footer />
            </ScrollableAnchor>
        </div>
    )
}
export default App;