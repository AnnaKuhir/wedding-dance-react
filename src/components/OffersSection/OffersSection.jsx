import React, { useState, useEffect } from 'react';
import { getOffersData } from '../../api/OffersAPI';
import OffersItem from '../OffersItem';
import './style.scss';

const OffersSection = () => {
  const [content, setContent] = useState({
    meta: {},
    content: []
  });

  useEffect(() => {
    getContent()
  }, []);

  const getContent = async () => {
    getOffersData().then(data => setContent(data))
  }

  return (
    <div className="container">
      <section className="offers">
        <h2 className="offers__title">
          {content.meta.title}
        </h2>

        <p className="offers__description">
          {content.meta.description}
        </p>
        <div className="offers__main">
          {
            content.content.map(item =>{
              return <OffersItem
              key = {item._id}
              url = {item.url}
              title = {item.title}
              classNameImage = "offers__ico"
              classNameWrapper = "offers__item"
              alt = "Our offers"
              />
            })
          }

        </div>
      </section>
    </div >
  )
}

export default OffersSection;