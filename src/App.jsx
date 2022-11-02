import React from 'react'
import SectionOne from './sections/SectionOne'
import SectionTwo from './sections/SectionTwo'
import SectionThree from './sections/SectionThree'
import Footer from './components/Footer'


const App = () => {
    return(
        <div className='bg-forest-image bg-cover bg-center'>
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <Footer />
        </div>
    )
}
export default App;