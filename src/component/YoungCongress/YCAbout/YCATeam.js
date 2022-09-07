import React from 'react';
import { Card } from 'primereact/card';
import { ycateam_data } from '../../../data'
function YCATeam() {
    return (
        <div className='ycateam-container'>
            {/* <Card title="Simple Card" style={{ width: '25rem', marginBottom: '2em' }}> */}
            <h1 className="ycateam-header">Young congress members</h1>
            <div className="ycateam grid">
                {ycateam_data.map((acateam, i) => (
                    <div className="ycateam-profile xl:col-3 md:col-6 sm:col-12">
                        <div className="flex align-items-cetner justify-content-center">
                            <Card className='ycateam-card' style={{ width: '18em' }} key={i}>
                                {/* <p className="cabinetcardquote" style={{ lineHeight: '1.5' }}> {acateam.description}
                        </p> */}
                                <div className="ycateam-flex">
                                    <img src={acateam.image} alt="img" />
                                    <div className="ycateam-flex1">
                                        <p className='ycateam-name'>{acateam.name}</p>
                                        <h5 className='ycateam-title'>{acateam.title}</h5>
                                        <div className="ycateam-socialicons">
                                            <a href={acateam.fblink}>
                                                <i className="pi pi-facebook" style={{ color: '#333' }} />
                                            </a>
                                            <a href={acateam.wtapplink}>
                                                <i className="pi pi-whatsapp" style={{ color: '#333' }} />
                                            </a>
                                            <a href={acateam.linkedinlink}> <i className="pi pi-linkedin" style={{ color: '#333' }} /></a>
                                            {/* <a href={acateam.linkedinlink}> <i className="pi pi-linkedin" style={{ color: '#333' }} /></a> */}
                                            <a href={acateam.weblink}>
                                                <i className="pi pi-link" style={{ color: '#333' }} />
                                            </a>
                                        </div>
                                    </div>

                                </div>
                            </Card>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}
export default YCATeam;

