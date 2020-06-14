import React from 'react';
import './style.scss'

const Button = ({className, onClick, children}) => {
  return (
  <button type="button" className={className} onClick={onClick}>{children}</button>
  )
}

export default Button;