import React from 'react';
import './style.scss';

const OffersItem = ({url, title, classNameImage, classNameWrapper, alt}) => {
  const onClick = () => {
    window.location.assign(url)
  }

  const getIconTemplate = () => {
    if (title) {
      const imageName = title
        .replace(/[ ,.]/g, '-')
        .toLocaleLowerCase();
      return (
        <img src={require(`../../assets/images/${imageName}.svg`)} className={classNameImage} alt={alt} />
      )
    }
  }

  return (
    <div className={classNameWrapper} onClick={onClick}>
      {
        getIconTemplate()
      }
      <span>{title}</span>
    </div >
  )
}

export default OffersItem;