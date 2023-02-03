import React from "react";


export default function Skills(){
    return(

        <div  id='skills-section'  className="section skills">
            <h2>Skills</h2>
            <div className="skills-img-container">
                <div className="skill-box">
                    <h3>HTML</h3> 
                    <img src="https://img.icons8.com/color/100/null/html-5--v1.png"/>
                </div>
                <div className="skill-box">
                    <h3>CSS</h3>
                    <img src="https://img.icons8.com/color/100/null/css3.png"/> 
                </div>
                <div className="skill-box">
                    <h3>JAVASCRIPT</h3>
                    <img src="https://img.icons8.com/color/100/null/javascript--v1.png"/>
                </div>
                <div className="skill-box">
                    <h3>REACT JS</h3>
                    <img src="https://img.icons8.com/plasticine/100/null/react.png"/>
                </div>
                <div className="skill-box">
                    <h3>NODE JS</h3>
                    <img src="https://img.icons8.com/color/100/null/nodejs.png"/>
                    <img src="https://img.icons8.com/fluency/40/null/node-js.png" style={{display: "block", margin:"-40px auto 0"}}/>
                </div>
                <div className="skill-box">
                    <h3>EXPRESS JS</h3>
                    <img src="https://img.icons8.com/ios/100/null/express-js.png" />
                </div> 
                <div className="skill-box">
                    <h3>MONGO DB</h3>
                    <img src="https://img.icons8.com/color/100/null/mongodb.png"/> 
                </div> 
                <div className="skill-box">
                    <h3>FIREBASE</h3>
                    <img src="https://img.icons8.com/color/100/null/firebase.png"/>
                </div> 
                <div className="skill-box">
                    <h3>GIT</h3>
                    <img src="https://img.icons8.com/color/100/null/git.png"/>
                </div>    
            </div>
            
        </div>
    )
}