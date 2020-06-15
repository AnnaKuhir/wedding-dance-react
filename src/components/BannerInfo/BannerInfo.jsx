import React from 'react';
import './style.scss';

const BannerInfo = ({classNameWrapper, classNameTitle, classNameDescription, title, location,  description}) => {
  return (
    <div className={classNameWrapper}>
    <h1 className={classNameTitle}>
      {title}
    </h1>
    <span>{location}</span>
    <p className={classNameDescription}>
      {description}
    </p>
    </div>
  )
}

export default BannerInfo;