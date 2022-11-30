import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects'; 
import Services from './components/Services';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';

export default function App (){
 const navRef = useRef(null)


  return(
    <div className='main-app'>
       <Navbar ref={navRef} />
       <Header />
       <About />
       <Skills />
       <Projects />
       <ContactForm />
       {/* <Services /> */}
       <Footer />
      
    </div>
  )
}