import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import Dropdown from './MenuList/Dropdown/Dropdown';
import MenuList from './MenuList/MenuList';

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
          title: 'Cabinate Members',
          path: '/cabinateMembers',
          cName: 'dropdown-link',
        },
        {
          title: 'Executive Ambassador',
          path: '/exAmbassador',
          cName: 'dropdown-link',
        },
        {
          title: 'Advisory Council',
          path: '/adCouncil',
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
          path: '/YCAbout',
          cName: 'dropdown-link',
        },
        {
          title: 'Programs',
          path: '/YCPrograms',
          cName: 'dropdown-link',
        },
        {
          title: 'Activities',
          path: '/YCActivities',
          cName: 'dropdown-link',
        },
        {
          title: 'Members',
          path: '/YCMembers',
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
          title: 'Member List',
          path: '/memberList',
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
          title: 'Membership Process',
          path: '/membershipProcess',
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
          path: '/consultant',
          cName: 'dropdown-link',
        },
        {
          title: 'Job Support',
          path: '/jobsupport',
          cName: 'dropdown-link',
        },
        {
          title: 'Business Support',
          path: '/bussinessSupport',
          cName: 'dropdown-link',
        },
        {
          title: 'E-Doctor Support',
          path: '/eedoctor',
          cName: 'dropdown-link',
        },
        {
          title: 'Dead Body Support',
          path: '/deadbodySupport',
          cName: 'dropdown-link',
        },
        {
          title: 'Law Support',
          path: '/lawsupport',
          cName: 'dropdown-link',
        },
        {
          title: 'Relief Support',
          path: '/relief',
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
          NRB GLobal
          <i class='fab fa-firstdraft' />
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
            <Link
              to='/products'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Events
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/blogs' className='nav-links' onClick={closeMobileMenu}>
              Blogs
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/blogs' className='nav-links' onClick={closeMobileMenu}>
              Contact Info
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
