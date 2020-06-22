import React, { useState, useEffect } from 'react';
import Logo from '../Logotype/Logo';
import { getHeaderData } from '../../api/HeaderAPI';
import Link from '../HeaderLinks/HeaderLinks';
import Button from '../Button/Button';
import './style.scss';
import Modal from '../Modal/Modal';

const Header = () => {

  const [content, setContent] = useState({
    meta: {},
    action: {},
    content: []
  });

  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(true)
  }

  const hideModal = () => {
    setShow(false)
  }

  useEffect(() => {
    getContent()
  }, []);

  const getContent = async () => {
    getHeaderData().then(data => setContent(data))
  }

  // const onClick = () => {
  //   if (content.action.url) {
  //     window.location.assign(content.action.url)
  //   }
  // }

  return (
    <header className="header">
      <div className="container">
        <div className="header__body">
          <Logo
            logo={content.meta.title}
            className="header__logo"
          />
          <div className="header__navigation">
            <nav className="header__menu">
              <ul className="header__list">
                {
                  content.content.map(item => {
                    return <Link
                      key={item._id}
                      className="header__link"
                      url={item.url}
                      title={item.title}
                    />
                  })
                }
              </ul>
            </nav>
            <Button
              className="btn btn-active header__btn"
              onClick={showModal}
              children={content.action.title}
            />
            <Modal
              handleClose={hideModal}
              show={show}
            >
              <h1 className="modal-main_title">Authorization</h1>
              <form action="" className="modal-main_form">
                <div className="modal-main_controlsContainer">
                  <div className="modal-main_control">
                    <label htmlFor="login" className="control-label required">Enter your login</label>
                    <input type="email" id="login" className="form-input" placeholder="somename@gmail.com"></input>
                  </div>

                  <div className="modal-main_control">
                    <label htmlFor="password" className="control-label required">Enter your password</label>
                    <input type="password" id="password" className="form-input" placeholder="At least 8 characters"></input>
                  </div>
                </div>
              </form>
            </Modal>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;