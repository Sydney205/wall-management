import React from 'react'
import Navbar from './Navbar'
import Home from './Home';
import Overview from './Overview'
import Footer from './Footer';

function HomePage({scrollToTop}) {
  return (
    <main>
        <Navbar scrollToTop={scrollToTop}/>
        <Home />
        <Overview scrollToTop={scrollToTop}/>
        <Footer />
    </main>
  )
}

export default HomePage