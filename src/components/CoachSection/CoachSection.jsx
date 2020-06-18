import React, { useState, useEffect } from 'react';
import { getCoachesData } from '../../api/CoachesAPI';
import CoachCard from '../CoachCard/CoachCard';
import './style.scss';

const CoachSection = () => {

  const [content, setContent] = useState({
    meta: {},
    content: [],
    styles: []
  });

  useEffect(() => {
    getContent()
  }, []);

  const getContent = async () => {
    getCoachesData().then(data => setContent(data))
  }

  return (
    <div className="container">
      <section className="coaches" id="coaches">
        <h2 className="coaches__title">
          {content.meta.title}
        </h2>
        <p className="coaches__description">
          {content.meta.description}
        </p>
        <div className="coaches__slider">
         {
           content.content.map( item => {
             return  <CoachCard
             key = {item._id}
             classNameWrapper = "coaches__card"
             classNameInfo = "coaches__info"
             classNameSubtitle = "coaches__subtitle"
             classNameList = "coaches__list"
             classNamePoint = "coaches__point"
             classNamePointSpan = "coaches__point-alpha"
             name = {item.name}
             direction = {item.direction}
             workExperience = {item.workExperience}
             teachExperience = {item.teachExperience}
             styles = {item.style.join(', ')}
             classNameImage = "coaches__image"
             alt = "Our coaches"
             url = {item.url}
             />
           })
         }
        </div>
      </section>
    </div>
  )

}

export default CoachSection;