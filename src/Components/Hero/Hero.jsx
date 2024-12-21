import React from 'react'
import './Hero.css'
import profile from '../../assets/profile.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
  return (
    <div id='home' className='hero'> 
      <img className='profile' src={profile} alt="" />
      <h1><span>I'm Fathima Hiba Yoosaf,</span> MERN Stack developer.</h1>
      <p>Passionate MERN Stack Developer with expertise in building high-performance web applications.Skilled in MongoDB, Express.js, React, and Node.js, with a focus on creating seamless user experiences and efficient front end and backend solutions. </p>
    <div className='hero-action'>
        <div className='hero-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className='hero-resume'>
        <a href="/Hiba_Resume.docx" download="My Resume.docx">My Resume</a>
        </div>

    </div>
    </div>
  )
}

export default Hero
