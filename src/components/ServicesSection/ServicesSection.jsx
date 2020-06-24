import React, { useState, useEffect } from 'react';
import { getServicesData } from '../../api/ServicesAPI'
import ServicesCard from '../ServicesCard';
import './style.scss';

const ServicesSection = () => {
  const [content, setContent] = useState({
    meta: {},
    content: []
  });

  useEffect(() => {
    getContent()
  }, []);

  const getContent = async () => {
    getServicesData().then(data => setContent(data))
  }

  return (
    <div className="container">
      <section className="services">
        <h2 className="services__title">
          {content.meta.title}
        </h2>
        <p className="services__description">
          {content.meta.description}
        </p>
        <div className="services__slider">
          {
            content.content.map(item => {
              return <ServicesCard
                key={item._id}
                classNameWrapper="services__card"
                classNameImage="services__image"
                classNameInfo="services__info"
                classNameSubtitle="services__subtitle"
                alt="Dance"
                title={item.title}
                url={item.url}
                id={item._id}
              />
            })
          }
        </div>
      </section>
    </div>
  )
}

export default ServicesSection;