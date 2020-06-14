import React from 'react';
import './style.scss';

const Logo = ({ logo }) => {
    return (
      <a href='/' className="header__logo">{logo}</a>
    )
}
export default Logo;