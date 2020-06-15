import React, { useState, useEffect } from 'react';
import Logo from '../Logotype/Logo';
import { getHeaderData } from '../../api/HeaderAPI';
import Link from '../HeaderLinks/HeaderLinks';
import Button from '../Button/Button';
import './style.scss';

const Header = () => {

  const [content, setContent] = useState({
    meta: {},
    action: {},
    content: []
  });

  useEffect(() => {
    getContent()
  }, []);

  const getContent = async () => {
    getHeaderData().then(data => setContent(data))
  }

  const onClick = () => {
    if(content.action.url){
      window.location.assign(content.action.url)
    }
  }

  return (
    <header className="header">
      <div className="container">
      <div className="header__body">
        <Logo logo={content.meta.title} />
        <div className="header__navigation">
        <nav className="header__menu">
        <ul className="header__list">
          {
            content.content.map(item => {
              return <Link
                key={item._id}
                className = "header__link"
                url={item.url}
                title={item.title}
              />
            })
          }
        </ul>
        </nav>
        <Button 
        className="btn btn-active header__btn" 
        onClick={onClick} 
        children={content.action.title}
        />
        </div>
        </div>
      </div>
    </header>
  )
}

export default Header;