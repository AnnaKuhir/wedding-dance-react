import React from 'react';
import './style.scss';

const ServicesCard = ({ classNameWrapper, url, classNameImage, alt, classNameInfo, classNameSubtitle, title, id }) => {
  const onClick = () => {
    window.location.assign(url)
  }
  const getImageTemplate = () => {
    if (id) {
      const imageName = `${id}.jpg`;

      return (
        <img src={require(`../../assets/images/${imageName}`)} className={classNameImage} alt={alt} />
      )
    }
  }

  return (
    <div className={classNameWrapper} onClick={onClick}>
      {
        getImageTemplate()
      }
      <div className={classNameInfo}>
        <h3 className={classNameSubtitle}>
          {title}
        </h3>
      </div>
    </div>
  )
}

export default ServicesCard;