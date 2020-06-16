import React, { useState, useEffect } from 'react';
import { getHeaderData } from '../../api/HeaderAPI';
import Logo from '../Logotype/Logo';
import './style.scss';

const Footer = () => {
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

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <Logo
            logo={content.meta.title}
            className="footer__logo"
          />
          <div className="footer__copyright">
            <span>Copyright &copy; 2019 </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;