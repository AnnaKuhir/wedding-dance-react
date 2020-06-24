import React from 'react';

const Link = ({ url, title, className }) => {
  return (
    <li> <a href={url} className={className}>{title}</a></li>
  )
}

export default Link;
