import React, { useEffect, useState } from 'react';
import './MemberListToShow.css';
import useDataContexts from '../../../../../hooks/useDataContexts';
import { Paginator } from 'primereact/paginator';

const MemberListToSHow = () => {
  const { nrbMembers, generalMembers } = useDataContexts();
  const [page, setPage] = useState(1);

  const url = process.env.REACT_APP_BACKEND_CORE_URL;

  const [basicFirst, setBasicFirst] = useState(0);
  const [basicRows, setBasicRows] = useState(10);

  const onPageChange = (event) => {
    setPage(event.page + 1);
    setBasicFirst(event.first);
    setBasicRows(event.rows);
  };

  return (
    <div className='p-container mb-4 mt-3'>
      <div className='grid'>
        {generalMembers?.map((member) => (
          <div
            key={member.id}
            member={member}
            className='col-6 md:col-4 lg:col-3'
          >
            <div className='nrbMemberCard p-2 md:p-3 m-1'>
              <div className='memberImgHolder'>
                <img src={`${url}${member.imageUrl}`} alt='membership' />
              </div>
              <div className>
                <div className='nrbMemberDetail sm:flex justify-content-between'>
                  <div className='nrbPersonalInfo'>
                    <h2 className='text-base text text-bold text text-blue-900 mb-2'>
                      {member.name}
                    </h2>
                    <span>{member.designation}</span>
                  </div>
                  <div className='country flex sm:align-items-end justify-content-end mt-2 sm:mt-0 '>
                    {/* {`fi ${} text-3xl`} */}
                    {/* 'fi fi-gr text-3xl' */}
                    <span
                      className={`fi ${member.presentAddress.country} text-3xl`}
                    ></span>{' '}
                  </div>
                </div>
                <div className='ycm-socialicons mt-3'>
                  <a
                    href={member?.socialLinks?.facebook}
                    target='_blank'
                    rel='noreferrer'
                  >
                    <i className='pi pi-facebook' style={{ color: '#333' }} />
                  </a>
                  <a
                    href={member?.socialLinks?.whatsapp}
                    target='_blank'
                    rel='noreferrer'
                  >
                    <i className='pi pi-whatsapp' style={{ color: '#333' }} />
                  </a>
                  <a
                    href={member?.socialLinks?.linkedIn}
                    target='_blank'
                    rel='noreferrer'
                  >
                    <i className='pi pi-linkedin' style={{ color: '#333' }} />
                  </a>
                  {/* <a href={member.linkedinlink}> <i className="pi pi-linkedin" style={{ color: '#333' }} /></a> */}
                  <a
                    href={member?.socialLinks?.website}
                    target='_blank'
                    rel='noreferrer'
                  >
                    <i className='pi pi-link' style={{ color: '#333' }} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Paginator
        totalRecords={nrbMembers?.totalResults}
        onPageChange={onPageChange}
        first={basicFirst}
        rows={basicRows}
        rowsPerPageOptions={nrbMembers?.limit}
      />
    </div>
  );
};

export default MemberListToSHow;
