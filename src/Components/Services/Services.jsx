import './Services.css'
import service_data from '../../assets/service_data'

const Services = () => {
  return (
    <section id='services' className='section services'>
      <div className='section-title reveal'>
        <span>What I do</span>
        <h2>My <span className='gradient-text'>Services</span></h2>
      </div>

      <div className='services-container'>
        {service_data.map((service, index) => {
          const ServiceIcon = service.s_icon
          return (
            <div key={service.s_no} className='reveal' style={{ '--delay': `${index * 0.12}s` }}>
              <div className='services-card'>
                <span className='services-no'>{service.s_no}</span>
                <div className='services-icon'><ServiceIcon size={26} /></div>
                <h3>{service.s_name}</h3>
                <p>{service.s_desc}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Services
