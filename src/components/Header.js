import React, {useState, useEffect, Fragment } from "react";
import Typewriter from 'typewriter-effect';

import portfolioHeaderImage from '../images/Developer activity-bro.png';
// import resumePdf from '../assets/NasikhCL Web Dev Resume.pdf'

export default function Header (){
    const[isSocialIcons, setIsSocialIcons] = useState(false)
    useEffect(()=>{
        setTimeout(()=> setIsSocialIcons(true) , 1000)
    },[])
    
    return( 
        <div id="home-section" className="header-container">
            <div className="header-left">
                <div className="header-btn">
                    <h3>
                       
                        <Typewriter
                            options={{
                                strings: ['Front-End Developer','React Developer',"MERN Stack Developer", 'Javascript Developer', "Full Stack Developer", "Learner"],
                                autoStart: true,
                                loop: true,
                                stop
                            }}
                        />
                    </h3> 
                </div>
                <h1 className="header-salute">Hi There,</h1>
                
                <h1 className="header-name">I'm Nasikh CL</h1>
              
                {isSocialIcons && <Fragment>
                                    <div className="social-icons">
                                        <a href="https://www.linkedin.com/in/nasikh-cl/"><img src="https://img.icons8.com/fluency/48/null/linkedin-2.png" alt="linkedin"/></a>
                                        <a href="https://github.com/NasikhCL"><img src="https://img.icons8.com/glyph-neue/48/null/github.png" alt="github"/></a>
                                        <a href="https://twitter.com/nasikh_cl"><img src="https://img.icons8.com/fluency/48/null/twitter.png" alt="twitter"/></a>
                                        <a href="https://www.instagram.com/nasikh_cl/"><img src="https://img.icons8.com/fluency/48/null/instagram-new.png" alt="instagram"/></a>
                                    </div>
                                    <a href="https://www.notion.so/Nasikh-CL-s-Resume-480a645688934ac6b1e8623a169a826b">
                                        <button className="download-resume-btn"><i className="fa-solid fa-eye"></i> Resume</button>
                                    </a>
                                  </Fragment>}
            </div>
            <div className="main-image">
                <img  src={portfolioHeaderImage} alt="portfoliophoto" />
            </div>
           
        
        </div>
    )
}