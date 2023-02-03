import React, { useEffect, useState, useRef } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects'; 
import Services from './components/Services';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import Blog from './components/Blogs';
export default function App (){
  const mainApp = useRef(null)
  const [showResumeBtn, setShowResumeBtn] = useState(false);
  useEffect(() => {
    // console.log(mainApp)
    function handleScroll() {
      // console.log(mainApp.current.scrollTop)
      if (mainApp.current.scrollTop > 420) {
        setShowResumeBtn(true);
      } else {
        setShowResumeBtn(false);
      }
    }
    
    mainApp.current.addEventListener('scroll', handleScroll);
    
    return () => {
      mainApp.current.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return(
    <div ref={mainApp} className='main-app'>
       <Navbar showResumeBtn={showResumeBtn} />
       <Header />
       <About />
       <Skills />
       <Projects />
       <Blog />
       <ContactForm />
       {/* <Services /> */}
       <Footer />
      
    </div>
  )
}