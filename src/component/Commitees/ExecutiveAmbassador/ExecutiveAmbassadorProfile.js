import React from 'react';
import { Card } from 'primereact/card';
import { executiveprofile_data } from '../../../data';
import './ExecutiveAmbassadorProfile.css';
function ExecutiveAbassadorProfile() {
  return (
    <div className='executive-ambassador-container'>
      <div className='executive-ambassador grid'>
        {executiveprofile_data.map((excutive, i) => (
          <div className='executive-ambassador-profile col lg:col-3 md:col-6 py-3'>
            <div className='flex align-items-cetner justify-content-center'>
              <Card
                className='executive-ambassador-card '
                style={{ width: '17em' }}
                key={i}
              >
                {/* <p className="cabinetcardquote" style={{ lineHeight: '1.5' }}> {excutive.description}
                        </p> */}
                <div className='executive-ambassador-flex'>
                  <img src={excutive.image} alt='img' />
                  <div className='executive-ambassador-flex1'>
                    <p className='executive-ambassador-name'>{excutive.name}</p>
                    <h5 className='executive-ambassador-title'>
                      {excutive.title}
                    </h5>
                    <div className='executive-ambassador-socialicons'>
                      <a href={excutive.fblink}>
                        <i
                          className='pi pi-facebook'
                          style={{ color: '#333D79FF' }}
                        />
                      </a>
                      <a href={excutive.wtapplink}>
                        <i
                          className='pi pi-whatsapp'
                          style={{ color: '#333D79FF' }}
                        />
                      </a>
                      <a href={excutive.linkedinlink}>
                        {' '}
                        <i
                          className='pi pi-linkedin'
                          style={{ color: '#333D79FF' }}
                        />
                      </a>
                      {/* <a href={excutive.linkedinlink}> <i className="pi pi-linkedin" style={{ color: '#333' }} /></a> */}
                      <a href={excutive.weblink}>
                        <i
                          className='pi pi-link'
                          style={{ color: '#333D79FF' }}
                        />
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
  );
}
export default ExecutiveAbassadorProfile;
