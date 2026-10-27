import { useEffect, useRef, useState } from 'react'
import './About.css'
import hiba from '../../assets/hiba.jpeg'

const skillGroups = [
  { title: 'Frontend', skills: ['HTML & CSS', 'JavaScript', 'React JS', 'Next.js', 'Vue.js', 'Angular', 'Tailwind', 'Material UI', 'Bootstrap'] },
  { title: 'Backend', skills: ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'SQL', 'Firebase'] },
  { title: 'Mobile', skills: ['React Native', 'Expo'] },
  { title: 'Tools & Cloud', skills: ['Git & GitHub', 'AWS', 'Netlify', 'Figma', 'Canva'] },
]

const stats = [
  { value: 4, suffix: '', label: 'Years of experience' },
  { value: 20, suffix: '+', label: 'Projects completed' },
]

// Counts up from 0 once the number scrolls into view
/* eslint-disable-next-line react/prop-types */
const CountUp = ({ value, suffix }) => {
  const [count, setCount] = useState(0)
  const ref = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      observer.disconnect()
      const start = performance.now()
      const step = (now) => {
        const progress = Math.min((now - start) / 1500, 1)
        setCount(Math.round(value * (1 - Math.pow(1 - progress, 3))))
        if (progress < 1) requestAnimationFrame(step)
      }
      requestAnimationFrame(step)
    }, { threshold: 0.5 })
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value])

  return <h3 ref={ref} className='gradient-text'>{count}{suffix}</h3>
}

const About = () => {
  return (
    <section id='about' className='section about'>
      <div className='section-title reveal'>
        <span>Get to know me</span>
        <h2>About <span className='gradient-text'>me</span></h2>
      </div>

      <div className='about-grid'>
        <div className='about-photo reveal reveal-left'>
          <img src={hiba} alt='Fathima Hiba Yoosaf' />
        </div>

        <div className='about-text reveal reveal-right'>
          <p>
            Hi there! I&apos;m <strong>Fathima Hiba Yoosaf</strong>, a Full Stack Developer specializing in the
            MERN stack, with a Bachelor&apos;s degree in Computer Science. I build dynamic, responsive and scalable
            web and mobile applications with MongoDB, Express.js, React.js, Node.js and React Native.
          </p>
          <p>
            With <strong>4 years of experience as a Full Stack Developer</strong> and more than 20 completed projects,
            I design, develop and deploy applications end to end. I also work with MySQL and PostgreSQL, and ship
            to AWS, Netlify and Expo.
          </p>
          <p>
            I&apos;m currently focused on full-stack and mobile development, contributing to innovative projects
            that solve real-world problems.
          </p>

          <div className='skill-groups'>
            {skillGroups.map((group) => (
              <div key={group.title} className='skill-group'>
                <h4>{group.title}</h4>
                <div className='skill-tags'>
                  {group.skills.map((skill) => <span key={skill} className='tag'>{skill}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='about-stats'>
        {stats.map((stat, index) => (
          <div key={stat.label} className='reveal' style={{ '--delay': `${index * 0.15}s` }}>
            <div className='about-stat'>
              <CountUp value={stat.value} suffix={stat.suffix} />
              <p>{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default About
