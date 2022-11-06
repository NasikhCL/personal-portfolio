import React, {  useState } from "react";



export default function Navbar(){
  
    const [isToggled, setIsToggled] = useState(false)

    function toggle(){
        setIsToggled(prevState=> !prevState);

    }

    return(
        <div className="navbar-container">
            <div className="logo">
                <h2>Nasikh CL</h2>
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Portfolio</li>
            </ul>
            
            <div className="hamberger" onClick={toggle}><img src="https://img.icons8.com/external-febrian-hidayat-gradient-febrian-hidayat/45/000000/external-hamburger-ui-essential-febrian-hidayat-gradient-febrian-hidayat.png"/></div>
            {isToggled && <div className="hamberger-items-contaner">
            <img onClick={toggle} src="https://img.icons8.com/ios-glyphs/48/737373/delete-sign.png"/>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Portfolio</li>
                </ul>
            </div>}
        </div>
    )
}