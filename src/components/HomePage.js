import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import About from './About';
import Footer from './Footer';

function HomePage() {
  return (
    <main>
        <Navbar />
        <Home />
        <About />
        <Footer />
    </main>
  )
}

export default HomePage