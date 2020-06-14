import React from 'react';
import './style.scss';

const Link = ({ url, title, className}) =>{
return(
  <li> <a href={url} className={className}>{title}</a></li> 
)
}

export default Link;
