import React, { useState } from 'react';
import './Dropdown.css';
import { Link } from 'react-router-dom';

const Dropdown = ({ field, closeMobileMenu }) => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const onClickFuncs = () => {
    setClick(false);
    if (window.innerWidth < 960) {
      closeMobileMenu();
    }
  };

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {field.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={onClickFuncs}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Dropdown;