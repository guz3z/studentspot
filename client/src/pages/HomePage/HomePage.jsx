import React from 'react';
import './homepage.css'


export function HomePage() {
    return (
       

        <div className="container-fluid">
            <div className='hp-header'>
                <img className='hp-logo' src={require('../../assets/img/logowhiteSSpot.png')}/>
                <nav>
                    <ul>
                        <li><a href="#" id="Home">Home</a></li>
                        <li><a href="#" id="About">About</a></li>
                        <li><a href="#" id="Join">Join</a></li>
                        <li><a href="#" id="Contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
            
            <div className="homepage-bg">
                <div className="hp-cube"></div>
                <div className="hp-cube"></div>
                <div className="hp-cube"></div>
                <div className="hp-cube"></div>
                <div className="hp-cube"></div>
            </div>
        </div>
        
    )
};


