import React from 'react'
import './Footer.css'
import user_icon from '../../assets/user_icon.svg'
import email from '../../assets/email.png'
import github from '../../assets/github.png'
import linkedin2 from '../../assets/linkedin2.png'
import instagram from '../../assets/instagram.png'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
              
               
            </div>
            <div className="footer-top-right">
              <div className="footer-email-input">
                <img src={user_icon} alt="" />
                <input type="email" placeholder='Enter your email' />
              </div>
              <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
      <hr />
      <div className="footer-bottom">
        
        <p className="footer-bottom-left">
            <a href="mailto:fathimayoosaf336@gnail.com"> <img src={email}/></a>
          </p>
        <div className="footer-bottom-right">
            <p><a href="https://github.com/Fullstackdevlp">
          <img src={github}/>
          </a></p>
            <p><a href="https://www.linkedin.com/in/hiba-mernstack">
          <img src={linkedin2}/>
          </a></p>
            <p><a href="https://www.instagram.com/codewithhiba">
          <img src={instagram}/>
          </a></p>
        </div>
      </div>
    </div>
  )
}

export default Footer
