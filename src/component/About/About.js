import React from 'react';
import './About.css'

const About = () => {
    return (
        
        <div>
            <h2 className="py-3 text-center">About Us</h2>
            <div className="about-container container">
            
            <div>
                <img className="w-100 py-4" src="https://personalexcellence.co/files/ceo.jpg" alt="" />
                <h5 className="text-danger fw-bold">Mr. Kim</h5>
            </div>
            <div>
            <p className="p-5">Mr. Kim is the founder of of this open university.Our vision is to serve the people via online.This is a open university.Age is not a barier here.Anyone can join this online graduation system.We offer the most demandable courses</p>
            </div>
        </div>
        </div>
    );
};

export default About;