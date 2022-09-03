import React from 'react';
import { Card } from 'primereact/card';
import { executiveprofile_data } from '../../../data'
import './ExecutiveAmbassadorProfile.css';
function ExecutiveAbassadorProfile() {
    const executiveImg = (imgName) => {
        return <img className='executive-profile-img' alt="profile" src={`../../../assets/image/committess/executiveambassador/${imgName}`} />
    }
    const executiveName = (executiveName) => {
        return <p className='executive-name' alt='name'>{executiveName}</p>
    }
    const executiveTitle = (executiveTitle) => {
        return <p className='executive-title' alt='name'>{executiveTitle}</p>
    }
    return (
        <div>
            {/* <Card title="Simple Card" style={{ width: '25rem', marginBottom: '2em' }}> */}
            <div className="executive-ambassador">
                {executiveprofile_data.map((executive, i) => (
                    <div className="executive-ambassador-profile">
                        <Card className='executive-card' title={executiveName(executive.name)} subTitle={executiveTitle(executive.title)} style={{ width: '16em' }} header={executiveImg(executive.image)} key={i}>
                            {/* <p className="cabinetcardquote" style={{ lineHeight: '1.5' }}> {executive.description}
                        </p> */}

                            <div className="executive-social-icons">
                                <a href={executive.fblink}>
                                    <i className="pi pi-facebook" style={{ color: '#4267B2' }} />
                                </a>
                                <a href={executive.wtapplink}>
                                    <i className="pi pi-whatsapp" style={{ color: '#34B7F1' }} />
                                </a>
                                <a href={executive.linkedinlink}> <i className="pi pi-linkedin" style={{ color: '#0072b1' }} /></a>
                                {/* <a href={executive.linkedinlink}> <i className="pi pi-linkedin" style={{ color: '#4267B2' }} /></a> */}
                                <a href={executive.weblink}>
                                    <i className="pi pi-link" style={{ color: 'blue' }} />
                                </a>
                            </div>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default ExecutiveAbassadorProfile;

