import React, {useState, useEffect } from "react";
// import portfolioHeaderImage from '../images/Untitled (1).png';

export default function Header (){
    const[isSocialIcons, setIsSocialIcons] = useState(false)
    useEffect(()=>{
        setTimeout(()=> setIsSocialIcons(true) , 4000)
    },[])
    
    return( 
        <div className="header-container">
            <div className="header-left">
                <div className="header-btn"><h5>Front-End Developer</h5></div>
                <h2 className="header-name">Hi There,</h2>
                <h1 className="header-name">I'm Nasikh CL</h1>
                {isSocialIcons && <div className="social-icons">
                    <a href="https://www.linkedin.com/nasikh_cl"><img src="https://img.icons8.com/fluency/48/null/linkedin-2.png" alt="linkedin"/></a>
                    <a href="https://www.linkedin.com/nasikh_cl"><img src="https://img.icons8.com/glyph-neue/48/null/github.png"Alt="github"/></a>
                    <a href="https://www.linkedin.com/nasikh_cl"><img src="https://img.icons8.com/fluency/48/null/twitter.png" alt="twitter"/></a>
                    <a href="https://www.linkedin.com/nasikh_cl"><img src="https://img.icons8.com/fluency/48/null/instagram-new.png" alt="instagram"/></a>
                </div>}
            </div>
            <div className="main-image">
                {/* <img  src="https://developer-portfolio-gules.vercel.app/_next/image?url=%2Fimages%2Fblaiti.png&w=640&q=75" alt="portfoliophoto" /> */}
            </div>
           
        
        </div>
    )
}