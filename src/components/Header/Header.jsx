import React, { useState, useEffect } from 'react';
import Logo from '../Logotype/Logo';
import { getHeaderData } from '../../api/HeaderAPI';
import Link from '../HeaderLinks/HeaderLinks';
import Button from '../Button/Button';
import './style.scss';
import Modal from '../Modal/Modal';
import { isTokenExist } from '../../api/GetUser';
import AuntificationModal from '../AuntificationModal/AuntificationModal';



const Header = () => {
  const [show, setShow] = useState(false);

  const [content, setContent] = useState({
    meta: {},
    action: {},
    content: []
  });

  const [userLogined, setUserLogined] = useState(false);

  useEffect(() => {
    getContent()
  }, []);

  const getContent = async () => {
    getHeaderData().then(data => setContent(data))
  }

  const showModal = () => {
    setShow(true)
  }

  const editBtnRender = () => {
    if (isTokenExist()) {
      setUserLogined(true);
    }
  }


  const onEditBtnClick = () => {
    return
  }

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
            {/* {setUserLogined } */}
            <Modal
              show={show}
            >
              <AuntificationModal
                setShow={setShow}
              />
            </Modal>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;