import React from 'react';
import './style.scss';
import Button from '../Button'

const CoachCard = ({ classNameWrapper, classNameInfo, classNameNumber, classNameSubtitle, classNameList, classNamePoint, classNamePointSpan, name, direction, workExperience, teachExperience, styles, classNameImage, alt, url }) => {

  const onClick = () => {
    window.location.assign(url)
  }

  const getImageTemplate = () => {
    if (name) {
      const imageName = name
        .replace(/[ ,.]/g, '-')
        .toLocaleLowerCase();
      return (
        <img src={require(`../../assets/images/${imageName}.jpg`)} className={classNameImage} alt={alt} />
      )
    }
  }

  return (
    <div className={classNameWrapper}>
      {
        getImageTemplate()
      }

      <div className={classNameInfo}>
        {/* <span className={classNameNumber}>{itemIndex}</span> */}
        <h3 className={classNameSubtitle}> {name} </h3>
        <span>{direction}</span>
        <ul className={classNameList}>
          <li className={classNamePoint}><span className={classNamePointSpan}>Work experience</span> {workExperience} years
      </li>
          <li className={classNamePoint}><span className={classNamePointSpan}>Teacher for</span> {teachExperience} years
      </li>
          <li className={classNamePoint}><span className={classNamePointSpan}>Style</span> {styles} </li>
        </ul>
        <Button
          onClick={onClick}
          className="coaches__button"
          children="Let’s start"
        />
      </div>
    </div>
  )
}

export default CoachCard;