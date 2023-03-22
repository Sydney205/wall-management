import React from 'react'
import Navbar from './Navbar'
import Home from './Home';
import About from './About';
import Footer from './Footer';

function HomePage({scrollToTop}) {
  return (
    <main>
        <Navbar scrollToTop={scrollToTop}/>
        <Home />
        <About scrollToTop={scrollToTop}/>
        <Footer />
    </main>
  )
}

export default HomePage