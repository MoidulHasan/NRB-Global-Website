import React, { useEffect, useState } from 'react';
import './MemberListToShow.css';
import useDataContexts from '../../../../../hooks/useDataContexts';
import { Button } from 'primereact/button';

const MemberListToSHow = () => {
  const {
    nrbMembers,
    setNrbMember,
    generalMembers,
    loadMoreNrbMember,
    totalNrbpage,
    nrbMemberPage,
  } = useDataContexts();

  console.log(generalMembers, 'geenral');

  // const [basicFirst, setBasicFirst] = useState(0);
  // const [basicRows, setBasicRows] = useState(10);

  // const onPageChange = (event) => {
  //   setPage(event.page + 1);
  //   setBasicFirst(event.first);
  //   setBasicRows(event.rows);
  // };

  // const [currentItem, setCurrentItem] = useState([]);
  // const [page, setPage] = useState(1);
  // const [totalpage, setTotalPage] = useState();
  // const imgData = () => {
  //     if (totalpage === page) return;
  //     fetch(`${url}/gallery?type=Photo&limit=20&page=${page}`)
  //         .then((res) => res.json())
  //         .then((data) => {
  //             setCurrentItem([...currentItem, ...data?.data?.results]);
  //             setTotalPage(data?.data?.totalPages);
  //         });
  // };
  // const loadMore = () => {
  //     setPage(page + 1);
  // };
  // useEffect(() => {
  //     imgData();
  // }, [page]);

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
                <img src={member.imageUrl} alt='membership' />
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

      <div className='flex align-items-center justify-content-center my-4'>
        {totalNrbpage >= nrbMemberPage && (
          <Button
            onClick={() => loadMoreNrbMember()}
            label='See More Members'
            className='p-button-rounded p-button-help p-button-outlined'
            icon='pi pi-angle-right'
            iconPos='right'
          />
        )}
      </div>
    </div>
  );
};

export default MemberListToSHow;
