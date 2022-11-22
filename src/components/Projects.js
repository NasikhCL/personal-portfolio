import React from "react";
import PortfolioSS from '../images/WhatsApp Image 2022-11-22 at 11.18.46 PM.jpeg';
import MealSS from '../images/WhatsApp Image 2022-11-22 at 11.26.09 PM.jpeg';
import MovieSS from '../images/WhatsApp Image 2022-11-22 at 11.27.46 PM.jpeg';
import ContactSS from '../images/WhatsApp Image 2022-11-22 at 11.28.52 PM.jpeg';
import DigiPiSS from '../images/WhatsApp Image 2022-11-22 at 11.30.19 PM.jpeg';
import HabititSS from '../images/WhatsApp Image 2022-11-22 at 11.32.33 PM.jpeg'

export default function Projects(){
    return(
        <div className="section">
            <h1>Projects</h1>
            <div className="projects">

                <div className="project-card">
                    <div className="project-card-img">
                        <img src={PortfolioSS} />
                        <div className="project-live-github" >
                            <a href="https://nasikhcl.github.io/movie-list/"><p>View Live</p></a>
                            <a href="https://github.com/NasikhCL/movie-list"><p>Gitub Repo</p></a>
                        </div>
                    </div> 
                    <div className="project-card-details">
                        <h3>Personal Portfolio</h3>
                        <p>a personal portfolio website build using reactJS. </p>
                    </div> 
                </div>
                <div className="project-card">
                    <div className="project-card-img">
                        <img src={MealSS} />
                        <div className="project-live-github" >
                            <a href="https://nasikhcl.github.io/movie-list/"><p>View Live</p></a>
                            <a href="https://github.com/NasikhCL/movie-list"><p>Gitub Repo</p></a>
                        </div>
                    </div> 
                    <div className="project-card-details">
                        <h3>Meal Recipies</h3>
                        <p>It's an application were users can search for variours meals and get the discription of how to prepare the meal, also a youtube video link provided for each meal inside the details page of each meal</p>
                    </div>
                </div>
                <div className="project-card">
                    <div className="project-card-img">
                        <img src={MovieSS} />
                        <div className="project-live-github" >
                            <a href="https://nasikhcl.github.io/movie-list/"><p>View Live</p></a>
                            <a href="https://github.com/NasikhCL/movie-list"><p>Gitub Repo</p></a>
                        </div>
                    </div> 
                    <div className="project-card-details">
                        <h3>Movies House</h3>
                        <p>a personal portfolio website build using reactJS. </p>
                    </div>
                </div>
                <div className="project-card">
                    <div className="project-card-img">
                        <img src={ContactSS} />
                        <div className="project-live-github" >
                            <a href="https://nasikhcl.github.io/movie-list/"><p>View Live</p></a>
                            <a href="https://github.com/NasikhCL/movie-list"><p>Gitub Repo</p></a>
                        </div>
                    </div> 
                    <div className="project-card-details">
                        <h3>Contact Manager</h3>
                        <p>a personal portfolio website build using reactJS. </p>
                    </div> 
                </div>
                <div className="project-card">
                    <div className="project-card-img">
                        <img src={DigiPiSS} />
                        <div className="project-live-github" >
                            <a href="https://nasikhcl.github.io/movie-list/"><p>View Live</p></a>
                            <a href="https://github.com/NasikhCL/movie-list"><p>Gitub Repo</p></a>
                        </div>
                    </div> 
                    <div className="project-card-details">
                        <h3>Admin Page </h3>
                        <p>It's a Static Admin Side Page build using ReactJS</p>
                    </div>
                </div>
                <div className="project-card">
                    <div className="project-card-img">
                        <img src={HabititSS} />
                        <div className="project-live-github" >
                            <a href="https://nasikhcl.github.io/movie-list/"><p>View Live</p></a>
                            <a href="https://github.com/NasikhCL/movie-list"><p>Gitub Repo</p></a>
                        </div>
                    </div> 
                    <div className="project-card-details">
                        <h3>Habit Tracker</h3>
                        <p>its a habit tracker application where users can add new habits and track each habits, view the status of the habit. build using  reactJS. </p>
                    </div>
                </div>
               

            </div>
            {/* <div className="coming-soon">
                
                </div> */}

            {/* <h1 className="under-construction">Site Is Under Construction</h1>
            <img src="https://img.icons8.com/emoji/100/null/construction-emoji.png"/>  */}
        </div>
    )
}