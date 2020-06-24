import React from 'react';
import './style.scss';
import Button from '../Button'

const CoachCard = ({ classNameWrapper, classNameInfo, classNameNumber, classNameSubtitle, classNameList, classNamePoint, classNamePointSpan, name, direction, workExperience, teachExperience, styles, classNameImage, alt, url, id }) => {

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
    <div className={classNameWrapper}>
      {
        getImageTemplate()
      }
      <div className={classNameInfo}>
        <h3 className={classNameSubtitle}>{name}</h3>
        <span>{direction}</span>
        <ul className={classNameList}>
          <li className={classNamePoint}><span className={classNamePointSpan}>Work experience</span> {workExperience} years. </li>
          <li className={classNamePoint}><span className={classNamePointSpan}>Teacher for</span> {teachExperience} years. </li>
          <li className={classNamePoint}><span className={classNamePointSpan}>Style</span> {styles} </li>
        </ul>
        <Button
          onClick={onClick}
          className="coaches__button"
        >
          Let’s start
        </Button>
      </div>
    </div>
  )
}

export default CoachCard;