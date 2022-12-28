import React from "react";


export default function Skills(){
    return(

        <div  id='skills-section'  className="section skills">
            <h1>Skills</h1>
            <div className="skills-img-container">
                <div className="skill-box">
                    <h4>HTML</h4>
                    <img src="https://img.icons8.com/color/100/null/html-5--v1.png"/>
                </div>
                <div className="skill-box">
                    <h4>CSS</h4>
                    <img src="https://img.icons8.com/color/100/null/css3.png"/> 
                </div>
                <div className="skill-box">
                    <h4>JAVASCRIPT</h4>
                    <img src="https://img.icons8.com/color/100/null/javascript--v1.png"/>
                </div>
                <div className="skill-box">
                    <h4>REACT JS</h4>
                    <img src="https://img.icons8.com/plasticine/100/null/react.png"/>
                </div>
                <div className="skill-box">
                    <h4>NODE JS</h4>
                    <img src="https://img.icons8.com/color/100/null/nodejs.png"/>
                    <img src="https://img.icons8.com/fluency/40/null/node-js.png" style={{display: "block", margin:"-40px auto 0"}}/>
                </div>
                <div className="skill-box">
                    <h4>EXPRESS JS</h4>
                    <img src="https://img.icons8.com/ios/100/null/express-js.png" />
                </div> 
                <div className="skill-box">
                    <h4>MONGO DB</h4>
                    <img src="https://img.icons8.com/color/100/null/mongodb.png"/> 
                </div> 
                <div className="skill-box">
                    <h4>FIREBASE</h4>
                    <img src="https://img.icons8.com/color/100/null/firebase.png"/>
                </div> 
                <div className="skill-box">
                    <h4>GIT</h4>
                    <img src="https://img.icons8.com/color/100/null/git.png"/>
                </div>    
            </div>
            
        </div>
    )
}