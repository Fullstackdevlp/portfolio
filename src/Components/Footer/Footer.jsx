import './Footer.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { GithubIcon, LinkedinIcon, InstagramIcon, MailIcon, ArrowUpIcon } from '../../assets/icons'

const socials = [
  { icon: MailIcon, label: 'Email', href: 'mailto:hibatechstack@gmail.com' },
  { icon: GithubIcon, label: 'GitHub', href: 'https://github.com/Fullstackdevlp' },
  { icon: LinkedinIcon, label: 'LinkedIn', href: 'https://www.linkedin.com/in/hiba-mernstack' },
  { icon: InstagramIcon, label: 'Instagram', href: 'https://www.instagram.com/codewithhiba' },
]

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-inner'>
        <div className='footer-top'>
          <div className='footer-brand'>
            <h3>Hiba<span className='gradient-text'>.</span></h3>
            <p>Full Stack &amp; Mobile App Developer building fast, modern web and mobile experiences.</p>
          </div>
          <div className='footer-socials'>
            {socials.map(({ icon: SocialIcon, label, href }) => (
              <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel='noreferrer' aria-label={label}>
                <SocialIcon size={20} />
              </a>
            ))}
          </div>
        </div>
        <div className='footer-bottom'>
          <p>© {new Date().getFullYear()} Fathima Hiba Yoosaf. All rights reserved.</p>
          <AnchorLink href='#home' className='footer-top-btn' aria-label='Back to top'>
            <ArrowUpIcon size={20} />
          </AnchorLink>
        </div>
      </div>
    </footer>
  )
}

export default Footer
