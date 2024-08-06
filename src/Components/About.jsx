import React from 'react'
import "./About.css"
import profile_img from "../assets/pic1.png"

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Me</h1>
      </div>
      <div className="about-section">
        <div className="about-left">
            <img src={profile_img} ></img>
        </div>
        <div className="about-right">
            <div className="about-para">
                <h3>Education</h3>
                <div className='uni'>
                <p>Medicaps University Indore</p>
                <p>Bachelor of Technology(B.Tech) </p>
                <p>8.57 CGPA</p>
                </div>
                <div className='schl'>
                <p>Advanced Academy School Indore</p>
                <p>Science CBSE </p>
                <p>81.41%</p>
                </div>
            </div>
            <div className="about-skills">
                <ul>
                    <li>HTML & CSS</li>
                    <li>Javascript</li>
                    <li>React JS</li>
                    <li>Express</li>
                </ul>
            </div>
        </div>
       
      </div>
      <div className="about-achievements">
                <h3>Certifications</h3>
                <div>
                <p>The Web Developer Bootcamp 2024 - Udemy</p>
                <p>Programming for Everybody (Getting Started with Python) - Coursera</p>
                <p>Crash Course on Python  - Coursera</p>
                <p>JPMorgan Chase & Co. Excel Skills Job Simulation - Forage</p>
                </div>
            </div>
    </div>
  )
}

export default About
