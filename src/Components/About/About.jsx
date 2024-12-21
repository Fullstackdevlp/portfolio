import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import hipro from '../../assets/hipro.jpg'
const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
        <img className='hipro' src={hipro} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>Hi there! I'm Fathima Hiba yoosaf, a Full Stack Developer with a specialization in the MERN Stack. 
                  Holding a Bachelor's degree in Computer Science, I Specialize in building dynamic, responsive, and 
                  scalabel web applications using the MongoDB, Express.js, React.js, and Node.js.
                   </p>
                <p>With 6 months of experience as a Junior web developer and a 3-month internship, I have honed my skills in developing
                  efficient solutions and working in collaborative environments. I have successfully completed 6 projects
                  that showcase my ability to design, develop, and deploy my commitment to delivering high-quality work. </p>
                <p>React.js is primary tool for crafting interactive and user-friendly interfaces, while Node.js and Express.js power
                  the server-side functionalities. MongoDB complements my stack with its flexibility and scalability, making it ideal
                  for modern web applications.
                </p>
                <p>Currently, I am focused on advancing my career in MERN stack development and contributing to innovative projects that solve real-world challenges.</p>
            </div>
            <div className='about-skills'>
              <div className='about-skill'> <p>HTML & CSS</p><hr style={{width:"70%"}} />   </div>
              <div className='about-skill'> <p>React JS</p><hr style={{width:"70%"}} />   </div>
              <div className='about-skill'> <p>Javascript</p><hr style={{width:"80%"}} />   </div>
              <div className='about-skill'> <p>Bootstarp</p><hr style={{width:"60%"}} />   </div>
              <div className='about-skill'> <p>Tailwind</p><hr style={{width:"50%"}} />   </div>
              <div className='about-skill'> <p>Node.js</p><hr style={{width:"70%"}} />   </div>
              <div className='about-skill'> <p>Express.js</p><hr style={{width:"50%"}} />   </div>
              <div className='about-skill'> <p>MongoDB</p><hr style={{width:"70%"}} />   </div>
              <div className='about-skill'> <p>Git & Github</p><hr style={{width:"50%"}} />   </div>
              <div className='about-skill'> <p>Figma</p><hr style={{width:"50%"}} />   </div>
              <div className='about-skill'> <p>Canva</p><hr style={{width:"50%"}} />   </div>
                 
            </div>
        </div>
      </div>
      <div className='about-achievements'>
        <div className='about-achievement'>
          <h1>6</h1>
          <p>MONTHS OF EXPERIENCE</p>
        </div>
        <hr/>
        <div className='about-achievement'>
          <h1>3</h1>
          <p>MONTH INTERNSHIP</p>
        </div>
        <hr />
        <div className='about-achievement'>
          <h1>6</h1>
          <p>PROJECTS  COMPLETED</p>
        </div>
      
        
      </div>
    </div>
  )
}

export default About
