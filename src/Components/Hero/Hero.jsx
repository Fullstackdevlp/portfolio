import { useEffect, useState } from 'react'
import './Hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { DownloadIcon, GithubIcon, LinkedinIcon, InstagramIcon } from '../../assets/icons'

const roles = ['Full Stack Developer', 'MERN Stack Developer', 'Mobile App Developer']

const Hero = () => {
  const [text, setText] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  // Typewriter effect that cycles through the roles
  useEffect(() => {
    const role = roles[roleIndex]
    let delay = deleting ? 45 : 90
    if (!deleting && text === role) delay = 1800
    if (deleting && text === '') delay = 300

    const timer = setTimeout(() => {
      if (!deleting && text === role) {
        setDeleting(true)
      } else if (deleting && text === '') {
        setDeleting(false)
        setRoleIndex((roleIndex + 1) % roles.length)
      } else {
        setText(role.slice(0, text.length + (deleting ? -1 : 1)))
      }
    }, delay)
    return () => clearTimeout(timer)
  }, [text, deleting, roleIndex])

  return (
    <section id='home' className='hero'>
      <div className='hero-grid' />
      <div className='hero-blob one' />
      <div className='hero-blob two' />

      <div className='hero-inner'>
        <div className='hero-text'>
          <div className='hero-badge fade-up'>
            <span className='dot' /> Available for work · Dubai
          </div>
          <h1 className='fade-up' style={{ '--delay': '0.15s' }}>
            Hi, I&apos;m <span className='gradient-text'>Fathima Hiba Yoosaf</span>
          </h1>
          <h2 className='hero-role fade-up' style={{ '--delay': '0.3s' }}>
            {text}<span className='cursor' />
          </h2>
          <p className='fade-up' style={{ '--delay': '0.45s' }}>
            Full Stack Developer with 4 years of experience shipping production apps in React, Next.js, Vue.js
            and React Native, with Node.js, Express, PostgreSQL and MongoDB on the backend.
          </p>
          <div className='hero-action fade-up' style={{ '--delay': '0.6s' }}>
            <AnchorLink className='btn btn-primary' offset={70} href='#contact'>Connect with me</AnchorLink>
            <a className='btn btn-outline' href='/My%20Resume%20(1).pdf' download='Fathima-Hiba-Yoosaf-Resume.pdf'>
              <DownloadIcon size={18} /> My Resume
            </a>
          </div>
          <div className='hero-socials fade-up' style={{ '--delay': '0.75s' }}>
            <a href='https://github.com/Fullstackdevlp' target='_blank' rel='noreferrer' aria-label='GitHub'><GithubIcon /></a>
            <a href='https://www.linkedin.com/in/hiba-mernstack' target='_blank' rel='noreferrer' aria-label='LinkedIn'><LinkedinIcon /></a>
            <a href='https://www.instagram.com/codewithhiba' target='_blank' rel='noreferrer' aria-label='Instagram'><InstagramIcon /></a>
          </div>
        </div>

        <div className='hero-visual fade-up' style={{ '--delay': '0.3s' }}>
          <div className='hero-photo'>
            <img src='/portfolio.jpeg' alt='Fathima Hiba Yoosaf' />
          </div>
          <div className='hero-chip c1'>⚛️ React</div>
          <div className='hero-chip c2'>🟢 Node.js</div>
          <div className='hero-chip c3'>📱 React Native</div>
        </div>
      </div>

      <AnchorLink href='#about' offset={70} className='hero-scroll' aria-label='Scroll down' />
    </section>
  )
}

export default Hero
