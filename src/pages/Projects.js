import React, { useState } from "react";
import '../styles/Project.css';
import Credimax from '../assets/projects/Credimax.png';
import FlightReservations from '../assets/projects/FlightReservation.jpeg';
import bikeTheft from '../assets/projects/bikeTheft.png';
import Game from '../assets/projects/Game.png';
import ClickMe from '../assets/projects/click.png';
import Skills from './Skills'; // Import the Skills component

function Project(){
    const [selectedProject, setSelectedProject] = useState(null);
    const projectLinks = {
        Credimax: 'https://github.com/beyuneek/CrediMax-COMP214-Final-Project.git', //
        FlightReservation: 'https://github.com/beyuneek/COMP303-Assignments/tree/main',
        Game: 'https://github.com/beyuneek/Tic--tac--toe-Game-.git',
        bikeTheft:'https://github.com/beyuneek/Comp-309-Final-Project.git',
    };

    return(
        <div className="project-background">
            <div className="title">
                <h1>
                    <span>Projects  </span>
                </h1>
                    
            </div>
            <div className="content">
                <Skills /> {/* Display the Skills component */}
                <div className="project-list">
                    <ul className='accordion'>
                    
                        <li>
                            <label for="second">CrediMax - Advanced Credit Score Analysis System<img src={ClickMe} alt="Click Me" /></label>
                            <input type="radio" name="list" id='second'  onChange={() => setSelectedProject('Credimax')}/>
                            <div className="content">
                                <ul className="feature">
                                    <li>CrediMax offers a comprehensive solution for credit score analysis by utilizing advanced database concepts with SQL and PL/SQL. Designed to serve a credit score company, our system manages and analyzes credit data efficiently through a structured database system.</li>
                                    
                                </ul>
                            </div>
                        </li>
                        <li>
                            <label for="third">Flight Reservation <img src={ClickMe} alt="Click Me" /></label>
                            <input type="radio" name="list" id='third' onChange={() => setSelectedProject('FlightReservation')}/>
                            <div className="content">
                                <ul className="feature">
                                    <li>Efficiently executed CRUD operations for login, registration, payment processing, and profile 
                                        updates, achieving comprehensive data management. Enhanced data integrity and accuracy of user
                                         inputs through rigorous form validations and error handling, implemented across both frontend 
                                         (using Thymeleaf) and backend (via entity class annotations). Additionally, designed a well-organized 
                                         MySQL database with optimized schema for login and 
                                        registration tables, establishing primary and foreign keys to facilitate efficient data storage and retrieval.</li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <label for="fourth">Bicycle Theft Prediction Using Machine Learning <img src={ClickMe} alt="Click Me" /></label>
                            <input type="radio" name="list" id='fourth' onChange={() => setSelectedProject('bikeTheft')}/>
                            <div className="content">
                                <ul className="feature">
                                    <li>This project focuses on predicting the likelihood of bicycle thefts and the potential of
                                         recovery, leveraging the Toronto Police Department's dataset.
                                         We aim to improve community safety by applying logistic regression and decision tree models.</li>
                                        </ul>
                            </div>
                        </li>
                        <li>
                            <label for="fifth">Tic-Tac-Toe Game<img src={ClickMe} alt="Click Me" /></label>
                            <input type="radio" name="list" id='fifth' onChange={() => setSelectedProject('Game')}/>
                            <div className="content">
                                <ul className="feature">
                                    <li> A classic TicTacToe game that supports multiplayer gameplay as well as playing 
                                        against a computer AI. Players take turns placing their marks
                                         (crosses and circles) on a 3x3 grid, aiming to align three of their marks vertically, horizontally, or diagonally. </li>
                                    
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>                       
                <div className="project-preview">
                    {selectedProject === 'Credimax' && <img src={Credimax} alt="Credimax" />}
                    {selectedProject === 'FlightReservation' && <img src={FlightReservations} alt=" FlightReservation" />}
                    {selectedProject === 'bikeTheft' && <img src={bikeTheft} alt="bikeTheft" />}
                    {selectedProject === 'Game' && <img src={Game} alt="Game" />}
                    {selectedProject && (
                        <p>
                            <a href={projectLinks[selectedProject]} target="_blank" rel="noopener noreferrer">
                                Github Link to Project
                            </a>
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Project;
