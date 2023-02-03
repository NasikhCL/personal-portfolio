import React, {  useState } from "react";



export default function Navbar({showResumeBtn}){
  
    const [isToggled, setIsToggled] = useState(false)

    function toggle(){
        setIsToggled(prevState=> !prevState);

    }


    return(
        <div className="navbar-container">
            <div className="logo">
                <h1>Nasikh CL</h1>
            </div>
                {/* <h2 style={{display:"inline-block"}}>Resume</h2> */}
                { showResumeBtn && <a href="https://www.notion.so/Nasikh-CL-s-Resume-480a645688934ac6b1e8623a169a826b">             
                    <button className="nav-resume-btn">View Resume</button>
                </a>}
            <ul>
                <a href="#home-section"><li>Home</li></a>
                <a href="#about-section"><li>About</li></a>
                <a href="#skills-section"><li>Skills</li></a>
                <a href="#projects-section"><li>Projects</li></a>
                <a href="#blogs-section"><li>Blogs</li></a>
                <a href="#contact-section"><li>Contact</li></a>
                {/* <a href="#service-section"><li>Services</li></a> */}
               
                {/* <li>Portfolio</li> */}
            </ul>
            
            <div className="hamberger" onClick={toggle}><i className="fa-solid fa-bars"></i></div>
            {isToggled && <div className="hamberger-items-contaner">
                <i className="fa-solid fa-xmark" onClick={toggle}></i>
                <ul  onClick={toggle}>
                    <a href="#home-section"><li>Home</li></a>
                    <a href="#about-section"><li>About</li></a>
                    <a href="#skills-section"><li>Skills</li></a>
                    <a href="#projects-section"><li>Projects</li></a>
                    <a href="#blogs-section"><li>Blogs</li></a>
                    <a href="#contact-section"><li>Contact</li></a>

                    {/* <li>Portfolio</li> */}
                </ul>
            </div>}
        </div>
    )
}