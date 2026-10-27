import { useEffect, useState } from 'react'
import './Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { MenuIcon, CloseIcon } from '../../assets/icons'

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'work', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

const Navbar = () => {
  const [active, setActive] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      setScrolled(window.scrollY > 30)
      setProgress(maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0)

      // Highlight the section currently on screen
      let current = 'home'
      links.forEach(({ id }) => {
        const section = document.getElementById(id)
        if (section && section.offsetTop - 150 <= window.scrollY) current = id
      })
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-progress" style={{ width: `${progress}%` }} />
      <div className="nav-inner">
        <AnchorLink href='#home' className='nav-logo'>
          Hiba<span className='gradient-text'>.</span>
        </AnchorLink>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <button className='nav-mob-close' onClick={() => setMenuOpen(false)} aria-label='Close menu'>
            <CloseIcon size={28} />
          </button>
          <ul className='nav-menu'>
            {links.map(({ id, label }) => (
              <li key={id}>
                <AnchorLink
                  href={`#${id}`}
                  offset={id === 'home' ? 0 : 70}
                  className={active === id ? 'active' : ''}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </AnchorLink>
              </li>
            ))}
          </ul>
        </div>

        <AnchorLink className='btn btn-primary btn-small nav-connect' offset={70} href='#contact'>
          Let&apos;s Talk
        </AnchorLink>
        <button className='nav-mob-open' onClick={() => setMenuOpen(true)} aria-label='Open menu'>
          <MenuIcon size={28} />
        </button>
      </div>
      {menuOpen && <div className='nav-backdrop' onClick={() => setMenuOpen(false)} />}
    </nav>
  )
}

export default Navbar
