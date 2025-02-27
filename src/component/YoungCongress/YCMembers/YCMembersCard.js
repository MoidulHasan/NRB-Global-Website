import { Card } from 'primereact/card';
// import { Button } from 'primereact/button';
// import { ycateam_data } from '../../../data'
// import { ycateam_data } from '../../../data'
// import { useNrbMembers as ycateam_data } from '././../../../hooks/useNrbMembers'
import './YCMembersStyle.css';
import useDataContexts from '../../../hooks/useDataContexts';
// import { Link } from 'react-router-dom';
function YCMembersCard() {
  const { youngCongressMembers } = useDataContexts();

  const url = process.env.REACT_APP_BACKEND_CORE_URL;

  console.log(youngCongressMembers);

  return (
    <div className='ycm-container'>
      {/* <Card title="Simple Card" style={{ width: '25rem', marginBottom: '2em' }}> */}
      <div className='ycm-header-container grid'>
        <div className='ycm-header col-12 md:col-6 px-3'>
          <h2>
            {' '}
            Meet our young congress members. <br /> <br />
            Who is always ready to help you any kinds of issues.
          </h2>
          <p className='ycm-header-para'>
            Members of an Organization means all trustees, members of the Board
            of Directors, Senior Executives, and employees of the organization,
            or their equivalent.{' '}
          </p>
        </div>
        <div className='ycm-header-sticker col-12 md:col-6 px-3'>
          <img src='../../../assets/image/YCAbout/memberpic.png' alt='' />
        </div>
      </div>
      <div className='ycm grid'>
        {youngCongressMembers?.map((acateam, i) => (
          <div className='ycm-profile lg:col-3 md:col-6 py-3'>
            <div className='ycm-profile-flex-container flex align-items-cetner justify-content-center'>
              <Card className='ycm-card' style={{ width: '17em' }} key={i}>
                <div className='ycm-flex'>
                  <img src={acateam.imageUrl} alt='img' />
                  <div className='ycm-flex1'>
                    <p className='ycm-name'>{acateam.name}</p>
                    <h5 className='ycm-title'>{acateam.designation}</h5>
                    <div className='ycm-flexSocialandFlagicons'>
                      <div className='ycm-socialicons'>
                        <a
                          href={acateam?.socialLinks?.facebook}
                          target='_blank'
                          rel='noreferrer'
                        >
                          <i
                            className='pi pi-facebook'
                            style={{ color: '#333' }}
                          />
                        </a>
                        <a
                          href={acateam?.socialLinks?.whatsapp}
                          target='_blank'
                          rel='noreferrer'
                        >
                          <i
                            className='pi pi-whatsapp'
                            style={{ color: '#333' }}
                          />
                        </a>
                        <a
                          href={acateam?.socialLinks?.linkedIn}
                          target='_blank'
                          rel='noreferrer'
                        >
                          <i
                            className='pi pi-linkedin'
                            style={{ color: '#333' }}
                          />
                        </a>
                        {/* <a href={acateam.linkedinlink}> <i className="pi pi-linkedin" style={{ color: '#333' }} /></a> */}
                        <a
                          href={acateam?.socialLinks?.website}
                          target='_blank'
                          rel='noreferrer'
                        >
                          <i className='pi pi-link' style={{ color: '#333' }} />
                        </a>
                      </div>
                      <div className='country flex sm:align-items-end justify-content-end mt-2 sm:mt-0 '>
                        <span
                          className={`fi ${acateam.country} text-3xl`}
                        ></span>{' '}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="ycm-btn">
                <Button className='ycm-join-btn' label="Become a Young Congress" />
                <Link to='/memberList'>
                    <button>See More Members</button>
                </Link>
            </div> */}
    </div>
  );
}
export default YCMembersCard;
