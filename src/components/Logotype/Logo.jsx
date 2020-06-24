import React from 'react';
import './style.scss';

const Logo = ({ logo, className }) => {
  return (
    <a href='/' className={className}>{logo}</a>
  )
}
export default Logo;