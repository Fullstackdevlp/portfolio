import { useState } from 'react'
import './Contact.css'
import { MailIcon, PhoneIcon, MapPinIcon, LinkedinIcon, SendIcon } from '../../assets/icons'

const details = [
  { icon: MailIcon, label: 'Email', value: 'hibatechstack@gmail.com', href: 'mailto:hibatechstack@gmail.com' },
  { icon: PhoneIcon, label: 'Phone', value: '+971 56 127 3417', href: 'tel:+971561273417' },
  { icon: MapPinIcon, label: 'Location', value: 'Dubai, UAE' },
  { icon: LinkedinIcon, label: 'LinkedIn', value: 'hiba-mernstack', href: 'https://www.linkedin.com/in/hiba-mernstack' },
]

const Contact = () => {
  const [status, setStatus] = useState('idle')

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus('sending');
    const form = event.target;
    const formData = new FormData(form);

    formData.append("access_key", "9017b328-5601-4694-8023-97887c133a9f");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

      if (res.success) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id='contact' className='section contact'>
      <div className='section-title reveal'>
        <span>Get in touch</span>
        <h2>Let&apos;s work <span className='gradient-text'>together</span></h2>
      </div>

      <div className='contact-section'>
        <div className='contact-left reveal reveal-left'>
          <h3>Let&apos;s talk</h3>
          <p>
            Thank you for visiting my portfolio! I&apos;m always eager to collaborate on innovative projects
            or discuss exciting job opportunities. Send me a message or connect with me on LinkedIn.
          </p>
          <div className='contact-details'>
            {details.map(({ icon: DetailIcon, label, value, href }) => {
              const content = (
                <>
                  <div className='contact-icon'><DetailIcon size={20} /></div>
                  <div>
                    <span>{label}</span>
                    <p>{value}</p>
                  </div>
                </>
              )
              return href
                ? <a key={label} className='contact-detail' href={href} target={href.startsWith('http') ? '_blank' : undefined} rel='noreferrer'>{content}</a>
                : <div key={label} className='contact-detail'>{content}</div>
            })}
          </div>
        </div>

        <form onSubmit={onSubmit} className='contact-right reveal reveal-right'>
          <div className='contact-row'>
            <div className='contact-field'>
              <label htmlFor='name'>Your Name</label>
              <input id='name' type='text' placeholder='Enter your name' name='name' required />
            </div>
            <div className='contact-field'>
              <label htmlFor='email'>Your Email</label>
              <input id='email' type='email' placeholder='Enter your email' name='email' required />
            </div>
          </div>
          <div className='contact-field'>
            <label htmlFor='message'>Your Message</label>
            <textarea id='message' name='message' rows='7' placeholder='Tell me about your project' required></textarea>
          </div>
          <button type='submit' className='btn btn-primary contact-submit' disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : <>Send Message <SendIcon size={18} /></>}
          </button>
          {status === 'success' && <p className='contact-status success'>Thanks! Your message was sent. I&apos;ll get back to you soon.</p>}
          {status === 'error' && <p className='contact-status error'>Something went wrong. Please try again or email me directly.</p>}
        </form>
      </div>
    </section>
  )
}

export default Contact
