import React from 'react';
import './style.scss';

const OffersItem = ({ url, title, classNameImage, classNameWrapper, alt, id }) => {
  const onClick = () => {
    window.location.assign(url)
  }

  const getIconTemplate = () => {
    if (id) {
      const imageName = `${id}.svg`;
      return (
        <img src={require(`../../assets/images/${imageName}`)} alt={alt} />
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