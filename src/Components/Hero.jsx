import React from 'react'
import "./Hero.css"
import profile_img from "../assets/pic1.png"
import resume from "../assets/Resume.pdf"
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img}></img>
        <h1>Hello I'm <span>Aryan Verma</span>, Aspiring MERN developer with a passion for building dynamic user-friendly web applications</h1>
        <div className="hero-actions">
            <div className="hero-connect">
            <AnchorLink  offset={50} href='#contact' className='anchor-link'><p onClick={()=>setMenu("contact")}>Connect With Me</p></AnchorLink>
            </div>
            <div className="hero-resume">
                <a href={resume} download="resume">My Resume</a>
            </div>
        </div>
      
    </div>
  )
}

export default Hero
