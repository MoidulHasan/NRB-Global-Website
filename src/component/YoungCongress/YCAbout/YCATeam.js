import React from 'react';
import { Card } from 'primereact/card';
// import { ycateam_data } from '../../../data'
import { Link } from 'react-router-dom';
import useDataContexts from '../../../hooks/useDataContexts';
function YCATeam() {
  const { nrbMembers } = useDataContexts();
  return (
    <div className='ycateam-container'>
      {/* <Card title="Simple Card" style={{ width: '25rem', marginBottom: '2em' }}> */}
      <h1 className='ycateam-header'>Young congress members</h1>
      <div className='ycm grid'>
        {nrbMembers.slice(0, 8).map((acateam, i) => (
          <div className='ycm-profile lg:col-3 md:col-6 py-3'>
            <div className='ycm-profile-flex-container flex align-items-cetner justify-content-center'>
              <Card className='ycm-card' style={{ width: '17em' }} key={i}>
                {/* <p className="cabinetcardquote" style={{ lineHeight: '1.5' }}> {acateam.description}
                        </p> */}
                <div className='ycm-flex'>
                  <img src={acateam.image} alt='img' />
                  <div className='ycm-flex1'>
                    <p className='ycm-name'>{acateam.name}</p>
                    <h5 className='ycm-title'>{acateam.designation}</h5>
                    <div className='ycm-flexSocialandFlagicons'>
                      <div className='ycm-socialicons'>
                        <a href={acateam.fblink}>
                          <i
                            className='pi pi-facebook'
                            style={{ color: '#333' }}
                          />
                        </a>
                        <a href={acateam.wtapplink}>
                          <i
                            className='pi pi-whatsapp'
                            style={{ color: '#333' }}
                          />
                        </a>
                        <a href={acateam.linkedinlink}>
                          {' '}
                          <i
                            className='pi pi-linkedin'
                            style={{ color: '#333' }}
                          />
                        </a>
                        {/* <a href={acateam.linkedinlink}> <i className="pi pi-linkedin" style={{ color: '#333' }} /></a> */}
                        <a href={acateam.weblink}>
                          <i className='pi pi-link' style={{ color: '#333' }} />
                        </a>
                      </div>
                      <div className='country flex sm:align-items-end justify-content-end mt-2 sm:mt-0 '>
                        <span class={`fi ${acateam.country} text-3xl`}></span>{' '}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        ))}
      </div>
      <div className='ycateam-btn'>
        {/* <Button className='ycmteam-join-btn' label="Become a Young Congress" /> */}
        <Link to='/YoungCongressMembers'>
          <button>See More Members</button>
        </Link>
      </div>
    </div>
  );
}
export default YCATeam;
