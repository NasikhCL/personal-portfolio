import React, {useState, useEffect, Fragment } from "react";
import Typewriter from 'typewriter-effect';

import portfolioHeaderImage from '../images/Developer activity-bro.png';
import resumePdf from '../assets/resume.pdf'

export default function Header (){
    const[isSocialIcons, setIsSocialIcons] = useState(false)
    useEffect(()=>{
        setTimeout(()=> setIsSocialIcons(true) , 4000)
    },[])
    
    return( 
        <div id="home-section" className="header-container">
            <div className="header-left">
                <div className="header-btn">
                    <h5>
                       
                        <Typewriter
                            options={{
                                strings: ['Front-End Developer','React Developer', 'Javascript Developer'],
                                autoStart: true,
                                loop: true,
                                stop
                            }}
                        />
                    </h5>
                </div>
                <h2 className="header-salute">Hi There,</h2>
                
                <h1 className="header-name">I'm Nasikh CL</h1>
              
                {isSocialIcons && <Fragment>
                                    <div className="social-icons">
                                        <a href="https://www.linkedin.com/in/nasikh-cl/"><img src="https://img.icons8.com/fluency/48/null/linkedin-2.png" alt="linkedin"/></a>
                                        <a href="https://github.com/NasikhCL"><img src="https://img.icons8.com/glyph-neue/48/null/github.png"Alt="github"/></a>
                                        <a href="https://twitter.com/nasikh_cl"><img src="https://img.icons8.com/fluency/48/null/twitter.png" alt="twitter"/></a>
                                        <a href="https://www.instagram.com/nasikh_cl/"><img src="https://img.icons8.com/fluency/48/null/instagram-new.png" alt="instagram"/></a>
                                    </div>
                                    <a href={resumePdf} download>
                                    
                                        <button className="download-resume-btn"><span class="material-symbols-sharp">download</span> Resume</button>
                                    </a>
                                  </Fragment>}
            </div>
            <div className="main-image">
                <img  src={portfolioHeaderImage} alt="portfoliophoto" />
            </div>
           
        
        </div>
    )
}