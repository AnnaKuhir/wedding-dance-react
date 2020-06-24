import React, { useState, useEffect } from 'react';
import Logo from '../Logotype';
import { getHeaderData } from '../../api/HeaderAPI';
import Link from '../HeaderLinks';
import Button from '../Button';
import './style.scss';
import Modal from '../Modal';
import AuntificationModal from '../AuntificationModal';
import EditModal from '../EditModal';
import { ChangeData } from '../../api/ChangeData';
import { getUser } from '../../api/GetUser';

const Header = ({ isUserLogined }) => {
  const emailVal = React.useRef();
  const passVal = React.useRef();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [show, setShow] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [content, setContent] = useState({
    meta: {},
    action: {},
    content: []
  });
  const [title, setTitle] = useState('');
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (content) {
      setTitle(content.meta.title)
      setItems(content.content)
    }
  }, [content]);

  useEffect(() => {
    getContent()
  }, []);

  const hideModal = () => {
    setShow(false)
  }

  const submitEdit = async (e) => {
    e.preventDefault();
    const changedData = {
      ...content,
      meta: {
        title,
      },
      items
    };
    ChangeData(await changedData);
    setShowEditModal(false);
  }

  const getContent = async () => {
    getHeaderData().then(data => setContent(data))
  }

  const showModal = () => {
    setShow(true)
  }

  const showModalEditing = () => {
    setShowEditModal(true)
  }

  const handleChange = (event) => {
    setFormData({
      ...formData, [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    emailVal.current.value = "";
    passVal.current.value = "";
    getUser(formData).then(res => {
      localStorage.setItem("access_token", res.data.access_token)
    })
    setShow(false);
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
                emailVal={emailVal}
                passVal={passVal}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                hideModal={hideModal}
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
            content={content}
            hideModal={hideModal}
            submitEdit={submitEdit}
            title={title}
            setTitle={setTitle}
            items={items}
            setItems={setItems}
          />
        </Modal>
      </div>
    </header>
  )
}

export default Header;