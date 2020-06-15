import React, { useState, useEffect } from 'react';
import { getBannerData } from '../../api/BannerAPI';
import  BannerInfo from '../BannerInfo/BannerInfo'
import Button from '../Button/Button';
import './style.scss';

const Banner = () => {
  const [content, setContent] = useState({
    meta: {},
    action: {},
  });

  useEffect(() => {
    getContent()
  }, []);

  const getContent = async () => {
    getBannerData().then(data => setContent(data))
  }

  const onClick = () => {
    if (content.action.url) {
      window.location.assign(content.action.url)
    }
  }

  const getImageTemplate = () =>{
    if(content.meta.heroImage){
      return(
        <div className="banner__presentationImage">
        <div className="banner__image">
          <img src={ require(`../../assets/images${content.meta.heroImage}`)} alt="Heroes"/>
        </div>
        </div>
      )
    }
  }

  return (
    <div className="container">
      <section className="banner">
        <div className="banner__presentation">
          <BannerInfo
            classNameWrapper="banner__text"
            classNameTitle="banner__title"
            classNameDescription="banner__info"
            title={content.meta.title}
            location={content.meta.location}
            description={content.meta.description}
          />
          <Button
            className="btn btn-active banner__btn"
            onClick={onClick}
            children={content.action.title}
          />
        </div>
       {
         getImageTemplate()
       }
      </section>
    </div>
  )
}

export default Banner;