import './ServicesCategory.css';
import { Card } from 'primereact/card';
import { services_data as services } from '../../data'
function ServicesCategory() {
    return (
        <div className='sc-container'>
            {/* <svg className='sc-svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#0099ff" fill-opacity="0.64" d="M0,256L80,229.3C160,203,320,149,480,149.3C640,149,800,203,960,229.3C1120,256,1280,256,1360,256L1440,256L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
            </svg> */}
            <div className="sc-header-service-container">
                <div className="sc-text-container">
                    <h2>Our Services</h2>
                    <p>We Provide our services with care  and always priority our client</p>
                </div>
                <div className="sc-img-container">
                    <img src="../../assets/image/Services/help.png" alt="" />
                </div>
            </div>
            <div className="sc-service">
                {services.map((service, i) => (
                    <div className="sc-profile" key={i}>
                        <Card className='sc-card' style={{ width: '18em' }}>
                            <div className="sc-image">
                                <img src={service.image} alt="" />
                            </div>
                            <div className="sc-overlay">
                                <div className="sc-text">
                                    <div className="sc-title"><h3>{service.programName}</h3></div>
                                    <div className="sc-description">
                                        <p>{service.description}</p>
                                    </div>
                                    <div className="sc-phone">
                                        <p><span>Phone : </span>{service.number}</p>
                                    </div>
                                    <div className="sc-email">
                                        <p><span>Email : </span>{service.email}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="sc-doctor-title">
                                <h3>{service.programName}</h3>
                            </div>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ServicesCategory