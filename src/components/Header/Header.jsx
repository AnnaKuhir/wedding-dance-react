import React, { useState, useEffect } from 'react';
import Logo from '../Logotype/Logo';
import { getHeaderData } from '../../api/HeaderAPI';
import Link from '../HeaderLinks/HeaderLinks';
import Button from '../Button/Button';
import './style.scss';
import Modal from '../Modal/Modal';
import AuntificationModal from '../AuntificationModal/AuntificationModal';
import EditModal from '../EditModal/Modal';



const Header = ({ isUserLogined }) => {
  const [show, setShow] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

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

  const showModal = () => {
    setShow(true)
  }

  const showModalEditing = () => {
    setShowEditModal(true)
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
            >
              {content.action.title}
            </Button>
            <Modal
              show={show}
            >
              <AuntificationModal
                setShow={setShow}
              />
            </Modal>
          </div>
        </div>
        {isUserLogined && (
          <Button
            className="btn edit-btn"
            onClick={showModalEditing}
          >Edit</Button>
        )}
        <Modal
          show={showEditModal}
        >
          <EditModal
            setShow={setShowEditModal}
            content={content}
          />

        </Modal>
      </div>
    </header>
  )
}

export default Header;