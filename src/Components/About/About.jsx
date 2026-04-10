import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import hiba from '../../assets/hiba.jpeg'
const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
        <img className='hipro' src={hiba} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
              <p>Hi there! I'm Fathima Hiba Yoosaf, a Full Stack Developer with a specialization in the MERN Stack. 
   Holding a Bachelor's degree in Computer Science, I specialize in building dynamic, responsive, and 
   scalable web and mobile applications using MongoDB, Express.js, React.js, Node.js, and React Native.</p>

<p>With 3 years of experience as a Senior Web Developer, I have honed my skills in developing 
   efficient solutions and collaborating in team environments. I have successfully completed more than 10 projects 
   that showcase my ability to design, develop, and deploy applications while delivering high-quality work.</p>

<p>React.js and React Native are my primary tools for crafting interactive and user-friendly interfaces 
   for web and mobile platforms, while Node.js and Express.js power server-side functionalities. 
   I am also experienced with relational databases like MySQL and PostgreSQL, complementing my stack for 
   robust and scalable data management.</p>

<p>For deployment and cloud services, I leverage tools such as Expo for mobile apps and platforms like 
   AWS and Netlify to ensure seamless delivery and performance.</p>

<p>Currently, I am focused on advancing my career in full-stack and mobile development, contributing 
   to innovative projects that solve real-world challenges.</p>
            </div>
            <div className='about-skills'>
              <div className='about-skill'> <p>HTML & CSS</p><hr style={{width:"70%"}} />   </div>
              <div className='about-skill'> <p>React JS</p><hr style={{width:"70%"}} />   </div>
                    <div className='about-skill'> <p>Next.js</p><hr style={{width:"70%"}} />   </div>
                          <div className='about-skill'> <p>Vue.js</p><hr style={{width:"70%"}} />   </div>
                                <div className='about-skill'> <p>Angular</p><hr style={{width:"70%"}} />   </div>
                                      <div className='about-skill'> <p>React Native</p><hr style={{width:"70%"}} />   </div>
              <div className='about-skill'> <p>Javascript</p><hr style={{width:"70%"}} />   </div>
                    <div className='about-skill'> <p>Material UI</p><hr style={{width:"70%"}} />   </div>
              <div className='about-skill'> <p>Bootstarp</p><hr style={{width:"70%"}} />   </div>
              <div className='about-skill'> <p>Tailwind</p><hr style={{width:"70%"}} />   </div>
              <div className='about-skill'> <p>Node.js</p><hr style={{width:"70%"}} />   </div>
              <div className='about-skill'> <p>Express.js</p><hr style={{width:"70%"}} />   </div>
                    <div className='about-skill'> <p>PostgreSQL</p><hr style={{width:"70%"}} />   </div>
                          <div className='about-skill'> <p>SQL</p><hr style={{width:"70%"}} />   </div>
                                <div className='about-skill'> <p>Firebase</p><hr style={{width:"70%"}} />   </div>
              <div className='about-skill'> <p>MongoDB</p><hr style={{width:"70%"}} />   </div>
              <div className='about-skill'> <p>Git & Github</p><hr style={{width:"70%"}} />   </div>
              <div className='about-skill'> <p>Figma</p><hr style={{width:"70%"}} />   </div>
              <div className='about-skill'> <p>Canva</p><hr style={{width:"70%"}} />   </div>
                 
            </div>
        </div>
      </div>
      <div className='about-achievements'>
        <div className='about-achievement'>
          <h1>3</h1>
          <p>Years OF EXPERIENCE</p>
        </div>
        <hr/>
        <div className='about-achievement'>
          <h1>6</h1>
          <p>MONTH INTERNSHIP</p>
        </div>
        <hr />
        <div className='about-achievement'>
          <h1>10+</h1>
          <p>PROJECTS  COMPLETED</p>
        </div>
      
        
      </div>
    </div>
  )
}

export default About
