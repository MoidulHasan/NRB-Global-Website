import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown/Dropdown';

const MenuList = ({ menu, closeMobileMenu }) => {
  //   const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  //   const handleClick = () => setClick(!click);
  //   const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    // if (window.innerWidth < 960) {
    //   setDropdown(false);
    // } else {
    //   setDropdown(true);
    // }
    setDropdown(true);
  };

  const onMouseLeave = () => {
    // if (window.innerWidth < 960) {
    //   setDropdown(false);
    // } else {
    //   setDropdown(false);
    // }
    setDropdown(false);
  };

  const menuClickMobile = () => {
    setDropdown(!dropdown);
  };

  return (
    <li
      className='nav-item'
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={menuClickMobile}
    >
      {menu?.path === '/gallery' ? (
        <Link to={menu.path} className='nav-links'>
          {menu.title} <i className='fas fa-caret-down' />
        </Link>
      ) : (
        <span className='nav-links'>
          {menu.title} <i className='fas fa-caret-down' />
        </span>
      )}
      {dropdown && (
        <Dropdown field={menu.subMenu} closeMobileMenu={closeMobileMenu} />
      )}
    </li>
  );
};

export default MenuList;
