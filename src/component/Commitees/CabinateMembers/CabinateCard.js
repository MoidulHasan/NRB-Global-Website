import React from 'react';
import { Card } from 'primereact/card';
import { cabinetcared_data } from '../../../data';
import './CabinateCard.css';
import useDataContexts from '../../../hooks/useDataContexts';

function CabinateCard() {
  // const cardImg = (imgName) => {
  //     return <img className='cabinercardimg' alt="Card" src={`../../../assets/image/committess/cabinetmembers/${imgName}`} />

  // }
  const { committeeMembers } = useDataContexts();

  return (
    <div className='cabinet-card-main-container mx-4'>
      {/* <Card title="Simple Card" style={{ width: '25rem', marginBottom: '2em' }}> */}
      {/* <div className='cabinate-org-ceo-div grid'>
        <div className='cabinate-ceo-gird-one col lg:col-2 md:col-0'></div>
        <div className='cabinate-ceo-gird-two grid col lg:col-8 md:col-12'>
          {cabinetcared_data.slice(0, 2).map((card, i) => (
            <div className='cabinate-card-ceo-profile col lg:col-6 md:col-6'>
              <div className='flex align-items-center justify-content-center'>
                <Card className='cabinate-card' key={i}>
                  <div className='cabinate-card-ceo-img'>
                    <img src={card.image} alt='' />
                  </div>
                  <h3 className='cabinate-ceo-name'>{card.name}</h3>
                  <h6 className='cabinate-ceo-title'>{card.title}</h6>
                  <p
                    className='cabinate-card-quote'
                    style={{ lineHeight: '1.5' }}
                  >
                    {' '}
                    {card.description}
                  </p>
                  <div className='cabinate-social-icons'>
                    <a href={card.fblink}>
                      <i
                        className='pi pi-facebook'
                        style={{ color: '#1D354F' }}
                      />
                    </a>
                    <a href={card.wtapplink}>
                      <i
                        className='pi pi-whatsapp'
                        style={{ color: '#1D354F' }}
                      />
                    </a>
                    <a href={card.linkedinlink}>
                      {' '}
                      <i
                        className='pi pi-linkedin'
                        style={{ color: '#1D354F' }}
                      />
                    </a>
                    <a href={card.weblink}>
                      <i className='pi pi-link' style={{ color: '#1D354F' }} />
                    </a>
                  </div>
                </Card>
              </div>
            </div>
          ))}
        </div>
        <div className='cabinate-ceo-gird-three col lg:col-2 md:col-0'></div>
      </div> */}
      {/* new  */}
      <div className='grid cabinateMemberGridForCommittee'>
        {committeeMembers.map((committeeMember) => (
          <div
            className='col-12 md:col-6 my-4'
            id={committeeMember.cabinateId}
            committeeMember={committeeMember}
          >
            <div className='cabinateMemberCardCustom flex'>
              <div className='cabinateMemberCustomImgContainer p-1 md:p-3'>
                <img
                  src={committeeMember?.cabinateImg}
                  alt={committeeMember.name}
                />
              </div>
              <div className='cabinateMemberCustomDataContainer pl-3 md:pl-8 pt-2 md:pt-8 pb-2 md:pb-8 pr-1 md:pr-4'>
                <div className='dataDetailContainerCabinet'>
                  <h2 className='text-4xl md:text-6xl my-3 md:my-4 text-white font-bold pl-0 md:pl-6'>
                    {committeeMember?.name}
                  </h2>
                  <span className=' text-yellow-400 my-3 md:my-3 text-xl md:text-2xl block  pl-0 md:pl-6'>
                    {committeeMember?.designationShort}
                  </span>
                  <div className='cabinate-social-icons mt-4 md:mt-5 pl-0 md:pl-6'>
                    <a href={committeeMember?.fbLink}>
                      <i
                        className='pi pi-facebook'
                        style={{ color: '#EEC137' }}
                      />
                    </a>
                    <a href={committeeMember?.fbLink}>
                      <i
                        className='pi pi-whatsapp'
                        style={{ color: '#EEC137' }}
                      />
                    </a>
                    <a href={committeeMember?.fbLink}>
                      {' '}
                      <i
                        className='pi pi-linkedin'
                        style={{ color: '#EEC137' }}
                      />
                    </a>
                    <a href={committeeMember?.fbLink}>
                      <i className='pi pi-link' style={{ color: '#EEC137' }} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* <div className='col-12 md:col-6'>
          <div className='cabinateMemberCardCustom flex'>
            <div className='cabinateMemberCustomImgContainer p-3'>
              <img src={committeeMembers[1]?.cabinateImg} alt='Tariq Babu' />
            </div>
            <div className='cabinateMemberCustomDataContainer pl-8 pt-8 pb-8 pr-4'>
              <h2 className='text-2xl md:text-6xl my-4 text-white font-bold pl-6'>
                {committeeMembers[1]?.name}
              </h2>
              <span className=' text-yellow-400 my-2 md:my-3 md:text-2xl  md:block pl-6'>
                {committeeMembers[1]?.designationShort}
              </span>
              <div className='cabinate-social-icons mt-5 pl-6'>
                <a href='#'>
                  <i className='pi pi-facebook' style={{ color: '#EEC137' }} />
                </a>
                <a href='#'>
                  <i className='pi pi-whatsapp' style={{ color: '#EEC137' }} />
                </a>
                <a href='#'>
                  {' '}
                  <i className='pi pi-linkedin' style={{ color: '#EEC137' }} />
                </a>
                <a href='#'>
                  <i className='pi pi-link' style={{ color: '#EEC137' }} />
                </a>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      {/* MEMBERS   */}
      <div className='cabinate-org-members-div '>
        <div className='cabinate-ceo-gird-two grid'>
          {cabinetcared_data.slice(2, 5).map((card, i) => (
            <div className='cabinate-card-member-profile col lg:col-4 md:col-6'>
              <div className='flex align-items-center justify-content-center'>
                <Card className='cabinate-card' key={i}>
                  <div className='cabinate-card-ceo-img'>
                    <img src={card.image} alt='' />
                  </div>
                  <h3 className='cabinate-ceo-name'>{card.name}</h3>
                  <h6 className='cabinate-ceo-title'>{card.title}</h6>
                  <p
                    className='cabinate-card-quote'
                    style={{ lineHeight: '1.5' }}
                  >
                    {' '}
                    {card.description}
                  </p>
                  <div className='cabinate-social-icons'>
                    <a href={card.fblink}>
                      <i
                        className='pi pi-facebook'
                        style={{ color: '#1D354F' }}
                      />
                    </a>
                    <a href={card.wtapplink}>
                      <i
                        className='pi pi-whatsapp'
                        style={{ color: '#1D354F' }}
                      />
                    </a>
                    <a href={card.linkedinlink}>
                      {' '}
                      <i
                        className='pi pi-linkedin'
                        style={{ color: '#1D354F' }}
                      />
                    </a>
                    <a href={card.weblink}>
                      <i className='pi pi-link' style={{ color: '#1D354F' }} />
                    </a>
                  </div>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* MEMBERS DIV  */}
    </div>
  );
}
export default CabinateCard;
