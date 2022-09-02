import React from 'react';
import { Card } from 'primereact/card';
import { executiveprofile_data } from '../../../data'
import './ExecutiveAmbassadorProfile.css';
function ExecutiveAbassadorProfile() {
    const executiveImg = (imgName) => {
        return <img className='executiveprofileimg' alt="profile" src={`../../../assets/image/committess/executiveambassador/${imgName}`} />
    }
    const executiveName = (executiveName) => {
        return <p className='executivename' alt='name'>{executiveName}</p>
    }
    const executiveTitle = (executiveTitle) => {
        return <p className='executivetitle' alt='name'>{executiveTitle}</p>
    }
    return (
        <div>
            {/* <Card title="Simple Card" style={{ width: '25rem', marginBottom: '2em' }}> */}
            <div className="executiveambassador">
                {executiveprofile_data.map((executive, i) => (
                    <Card className='executiveprofile' title={executiveName(executive.name)} subTitle={executiveTitle(executive.title)} style={{ width: '12em' }} header={executiveImg(executive.image)} key={i}>
                        {/* <p className="cabinetcardquote" style={{ lineHeight: '1.5' }}> {executive.description}
                        </p> */}
                        <div className="executivesocialicons">
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
                ))}
            </div>
        </div>
    )
}
export default ExecutiveAbassadorProfile;

