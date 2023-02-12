import React from 'react';
import './MemberListToShow.css';
import useDataContexts from '../../../../../hooks/useDataContexts';

const MemberListToSHow = () => {
  const { nrbMembers } = useDataContexts();

  return (
    <div className='p-container mb-4 mt-3'>
      <div className='grid'>
        {nrbMembers.map((member) => (
          <div
            key={member.id}
            member={member}
            className='col-6 md:col-4 lg:col-3'
          >
            <div className='nrbMemberCard p-2 md:p-3 m-1'>
              <div className='memberImgHolder'>
                <img src={member.image} alt='membership' />
              </div>
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
                  <span className={`fi ${member.country} text-3xl`}></span>{' '}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemberListToSHow;
