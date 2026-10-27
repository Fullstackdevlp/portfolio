import './MyWork.css'
import myworks_data from '../../assets/myworks_data'
import { ExternalIcon, GithubIcon } from '../../assets/icons'

const MyWork = () => {
  return (
    <section id='work' className='section mywork'>
      <div className='section-title reveal'>
        <span>Portfolio</span>
        <h2>My latest <span className='gradient-text'>projects</span></h2>
      </div>

      <div className='mywork-container'>
        {myworks_data.map((work, index) => (
          <div key={work.w_no} className='reveal' style={{ '--delay': `${(index % 2) * 0.15}s` }}>
            <article className='mywork-card'>
              <div className='mywork-image'>
                <img src={work.w_img} alt={`${work.w_name} screenshot`} loading='lazy' />
                <span className='mywork-no'>{work.w_no}</span>
              </div>
              <div className='mywork-body'>
                <h3>{work.w_name}</h3>
                <p>{work.w_desc}</p>
                <div className='mywork-tags'>
                  {work.w_tech.map((tech) => <span key={tech} className='tag'>{tech}</span>)}
                </div>
                <div className='mywork-links'>
                  {work.w_link && (
                    <a className='btn btn-primary btn-small' href={work.w_link} target='_blank' rel='noreferrer'>
                      <ExternalIcon size={16} /> Live Demo
                    </a>
                  )}
                  <a className='btn btn-outline btn-small' href={work.w_github} target='_blank' rel='noreferrer'>
                    <GithubIcon size={16} /> Code
                  </a>
                </div>
              </div>
            </article>
          </div>
        ))}
      </div>

      <div className='mywork-more reveal'>
        <a className='btn btn-outline' href='https://github.com/Fullstackdevlp' target='_blank' rel='noreferrer'>
          <GithubIcon size={18} /> See more on GitHub
        </a>
      </div>
    </section>
  )
}

export default MyWork
