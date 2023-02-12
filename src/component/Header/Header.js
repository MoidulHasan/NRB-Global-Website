import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import Dropdown from './MenuList/Dropdown/Dropdown';
import MenuList from './MenuList/MenuList';
import nrbLogo from '../../assets/image/mainNrbLogo.png';

const Header = () => {
  const [click, setClick] = useState(false);

  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = (a) => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  const menuList = [
    {
      title: 'Committee',
      path: '/',
      cName: 'nav-links',
      subMenu: [
        {
          title: 'Cabinet Members',
          path: '/cabinetMembers',
          cName: 'dropdown-link',
        },
        {
          title: 'Executive Ambassador',
          path: '/executiveAmbassador',
          cName: 'dropdown-link',
        },
        {
          title: 'Advisory Council',
          path: '/advisoryCouncil',
          cName: 'dropdown-link',
        },
      ],
    },
    {
      title: 'Young Congress',
      path: '/',
      cName: 'nav-links',
      subMenu: [
        {
          title: 'About Young Congress',
          path: '/YoungCongressAbout',
          cName: 'dropdown-link',
        },
        {
          title: 'Be a Young Congress',
          path: '/YoungCongressRegistration',
          cName: 'dropdown-link',
        },
        {
          title: 'Programs',
          path: '/YoungCongressPrograms',
          cName: 'dropdown-link',
        },
        {
          title: 'Activities',
          path: '/YoungCongressActivities',
          cName: 'dropdown-link',
        },
        {
          title: 'Members',
          path: '/YoungCongressMembers',
          cName: 'dropdown-link',
        },
        {
          title: 'Photo Contest',
          path: '/YoungCongressPhotoContest',
          cName: 'dropdown-link',
        },
      ],
    },
    {
      title: 'Membership',
      path: '/',
      cName: 'nav-links',
      subMenu: [
        {
          title: 'Membership Process',
          path: '/membershipProcess',
          cName: 'dropdown-link',
        },
        {
          title: 'General Member Registration',
          path: '/gmRegistration',
          cName: 'dropdown-link',
        },
        {
          title: 'Executive Member (Individual) Registration',
          path: '/emIndividualRegistration',
          cName: 'dropdown-link',
        },
        {
          title: 'Executing Member (Organization) Registration',
          path: '/emOrganizationRegistration',
          cName: 'dropdown-link',
        },
        {
          title: 'Member Services',
          path: '/memberservices',
          cName: 'dropdown-link',
        },
        {
          title: 'General Members',
          path: '/generalMembers',
          cName: 'dropdown-link',
        },
        {
          title: 'Member List',
          path: '/memberList',
          cName: 'dropdown-link',
        },
      ],
    },
    {
      title: 'Services',
      path: '/',
      cName: 'nav-links',
      subMenu: [
        {
          title: 'All Services',
          path: '/allservices',
          cName: 'dropdown-link',
        },
        {
          title: 'Consultant Service',
          path: '/allservices/1002',
          cName: 'dropdown-link',
        },
        {
          title: 'Job Support',
          path: '/allservices/1008',
          cName: 'dropdown-link',
        },
        {
          title: 'Business Support',
          path: '/allservices/1001',
          cName: 'dropdown-link',
        },
        {
          title: 'E-Doctor Support',
          path: '/allservices/1007',
          cName: 'dropdown-link',
        },
        {
          title: 'Dead Body Support',
          path: '/allservices/1009',
          cName: 'dropdown-link',
        },
        {
          title: 'Law Support',
          path: '/allservices/1003',
          cName: 'dropdown-link',
        },
        {
          title: 'Relief Support',
          path: '/allservices/1000',
          cName: 'dropdown-link',
        },
      ],
    },
    {
      title: 'Gallery',
      path: '/gallery',
      cName: 'nav-links',
      subMenu: [
        {
          title: 'Photo Gallery',
          path: '/gallery/photoGallery',
          cName: 'dropdown-link',
        },
        {
          title: 'Video Gallery',
          path: '/gallery/videoGallery',
          cName: 'dropdown-link',
        },
      ],
    },
  ];

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          {/* NRB GLobal
          <i className='fab fa-firstdraft' /> */}
          <img
            src={nrbLogo}
            alt='logo of NRB'
            height='55px'
            width='200px'
            className='logoNRB'
          />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
              About
            </Link>
          </li>
          {menuList.map((menu) => (
            <MenuList
              key={menu.title}
              menu={menu}
              closeMobileMenu={closeMobileMenu}
            />
          ))}
          <li className='nav-item'>
            <Link to='/events' className='nav-links' onClick={closeMobileMenu}>
              Events
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/blogs' className='nav-links' onClick={closeMobileMenu}>
              Blogs
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
