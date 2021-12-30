import React from 'react';
import Cookies from 'universal-cookie';
import { Auth } from '../../components/index';
import './homepage.css';


export function HomePage() {


    return (
       <>

            <div className="container-fluid" id='sectionHomeP'>
                <div className='hp-header'>
                    <img className='hp-logo' src={require('../../assets/img/logowhiteSSpot.png')}/>
                    <nav>
                        <ul>
                            <li><a href="#sectionHomeP" id="Home">Home</a></li>
                            <li><a href="#sectionAbout" id="About">About</a></li>
                            <li ><a href="#sectionJoin" id="Join" >Log in</a></li>
                            <li><a href="#sectionContact" id="Contact">Contact</a></li>
                        </ul>
                    </nav>
                </div>

                
                <div className="homepage-bg">
                <div className='intro-cont'>
                    <h1>Welcome to</h1>
                    <h2>StudentSpot</h2>
                    <p>A DYNAMIC STUDENT ENGAGEMENT EXPERIENCE</p>
                </div>
                    
                    <div className="hp-cube"></div>
                    <div className="hp-cube"></div>
                    <div className="hp-cube"></div>
                    <div className="hp-cube"></div>
                    <div className="hp-cube"></div>
                </div>
                
            </div>
            
            <div id="sectionJoin" className='hp-join-cont'>
                <Auth />

            </div>

        </>


        
    )
};


