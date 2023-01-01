import React from "react";
import PortfolioSS from '../images/WhatsApp Image 2022-11-22 at 11.18.46 PM.jpeg';
import MealSS from '../images/WhatsApp Image 2022-11-22 at 11.26.09 PM.jpeg';
import MovieSS from '../images/WhatsApp Image 2022-11-22 at 11.27.46 PM.jpeg';
import ContactSS from '../images/WhatsApp Image 2022-11-22 at 11.28.52 PM.jpeg';
import DigiPiSS from '../images/WhatsApp Image 2022-11-22 at 11.30.19 PM.jpeg';
import HabititSS from '../images/WhatsApp Image 2022-11-22 at 11.32.33 PM.jpeg'
import AdminUI from '../images/WhatsApp Image 2022-12-29 at 11.26.44 AM.jpeg'
export default function Projects(){
    return(
        <div id="projects-section" className="section">
            <h1>Projects</h1>
            <div className="projects">
            <div className="project-card">
                    <div className="project-card-img">
                        <img src={AdminUI} />
                    </div> 
                    <div className="project-card-details">
                        <h3>Admin UI</h3>
                        <p>It's an application were Admin can view users list, edit and delete users from the list. there is a search bar where admin can filter users on any property. pagination is also implimented </p>
                    </div>
                    <div className="project-live-github-container" >
                            <a href="https://geektrust-admin-ui-c.netlify.app/"><p>View Live</p></a>
                            <a href="https://github.com/NasikhCL/admin-ui-challenge-geektrust"><p>Gitub Repo</p></a>
                    </div>
                </div>
                <div className="project-card">
                    <div className="project-card-img">
                        <img src={PortfolioSS} />
                    </div> 
                    <div className="project-card-details">
                        <h3>Personal Portfolio</h3>
                        <p>It's my personal portfolio website build using reactJS.</p>
                    </div> 
                    <div className="project-live-github-container" >
                        <a href="https://nasikhcl.netlify.app/"><p>View Live</p></a>
                        <a href="https://github.com/NasikhCL/personal-portfolio"><p>Gitub Repo</p></a>
                    </div>
                </div>
                <div className="project-card">
                    <div className="project-card-img">
                        <img src={MealSS} />
                    </div> 
                    <div className="project-card-details">
                        <h3>Meal Recipies</h3>
                        <p>It's an application were users can search for variours meals and get the discription of how to prepare the meal, users can add meals to favouries. a youtube video link provided for each meal inside the details page of each meals.</p>
                    </div>
                    <div className="project-live-github-container" >
                        <a href="https://nasikhcl.github.io/meal-api/"><p>View Live</p></a>
                        <a href="https://github.com/NasikhCL/meal-api"><p>Gitub Repo</p></a>
                    </div>
                </div>
                <div className="project-card">
                    <div className="project-card-img">
                        <img src={MovieSS} />
                    </div> 
                    <div className="project-card-details">
                        <h3>Movies House</h3>
                        <p>It's a movie list application, Where users can get details like rating, language, writter, actors etc... about movie and users can also add movies to their favourites</p>
                    </div>
                    <div className="project-live-github-container" >
                        <a href="https://nasikhcl.github.io/movie-list/"><p>View Live</p></a>
                        <a href="https://github.com/NasikhCL/movie-list"><p>Gitub Repo</p></a>
                    </div>
                </div>
                <div className="project-card">
                    <div className="project-card-img">
                        <img src={ContactSS} />
                    </div> 
                    <div className="project-card-details">
                        <h3>Contact Manager</h3>
                        <p>It's Contacts Manager Application build using reactJS, Where users can add new contacts , delete contacts and update contacts </p>
                    </div> 
                    <div className="project-live-github-container" >
                        <a href="https://test-contacts-manager.netlify.app/"><p>View Live</p></a>
                        <a href="https://github.com/NasikhCL/test_contact"><p>Gitub Repo</p></a>
                    </div>
                </div>
                <div className="project-card">
                    <div className="project-card-img">
                        <img src={DigiPiSS} />
                    </div> 
                    <div className="project-card-details">
                        <h3>Admin Page </h3>
                        <p>It's a Static Admin Side web app build using ReactJS. Home Page, My Jobs page and Payments Page</p>
                    </div>
                    <div className="project-live-github-container" >
                        <a href="https://new-digipplus.netlify.app/"><p>View Live</p></a>
                        <a href="https://github.com/NasikhCL/digipplus"><p>Gitub Repo</p></a>
                    </div>
                </div>
                <div className="project-card">
                    <div className="project-card-img">
                        <img src={HabititSS} />
                    </div> 
                    <div className="project-card-details">
                        <h3>Habit Tracker</h3>
                        <p>its a habit tracker application where users can add new habits and track each habits, view the status of the habit in the Weekly Calander build using ReactJS and Redux. </p>
                    </div>
                    <div className="project-live-github-container" >
                        <a href="https://nasikhcl.github.io/movie-list/"><p>View Live</p></a>
                        <a href="https://github.com/NasikhCL/movie-list"><p>Gitub Repo</p></a>
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