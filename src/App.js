import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects'; 


export default function App (){
 const navRef = useRef(null)


  return(
    <div>
       <Navbar ref={navRef} />
       <Header />
       <About />
       <Skills />
       <Projects />
    </div>
  )
}