import React, { useState, useEffect } from 'react';
import Logo from '../Logotype/Logo';
import { getHeaderData } from '../../api/HeaderAPI';
import Link from '../HeaderLinks/HeaderLinks';
import Button from '../Button/Button';
import './style.scss';
import Modal from '../Modal/Modal';
import { getUser } from '../../api/GetUser';


const Header = () => {

  const emailVal = React.useRef();
  const passVal = React.useRef();

  const [content, setContent] = useState({
    meta: {},
    action: {},
    content: []
  });

  const [show, setShow] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

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

  const handleChange = (event) => {
    setFormData({
      ...formData, [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    // debugger;
    event.preventDefault();
    emailVal.current.value = "";
    passVal.current.value = "";
    getUser(formData).then(res => {
     localStorage.setItem("access_token",  res.data.access_token)
    })
    console.log(formData);
    setShow(false);
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
              show={show}
            >
              <h1 className="modal-main_title">Authorization</h1>
              <form action="" className="modal-main_form">
                <div className="modal-main_controlsContainer">
                  <div className="modal-main_control">
                    <label htmlFor="login" className="control-label required">Enter your login</label>
                    <input type="email" id="login" name="email" className="form-input" placeholder="somename@gmail.com" onChange={handleChange} ref={emailVal}></input>
                  </div>

                  <div className="modal-main_control">
                    <label htmlFor="password" className="control-label required">Enter your password</label>
                    <input type="password" id="password" name="password" className="form-input" placeholder="At least 8 characters" onChange={handleChange} ref={passVal}></input>
                  </div>
                </div>
                <div className="modal_btnContainer">
                  <button className="btn modal_btn btn-submit" type="button" onClick={handleSubmit}>Submit</button>
                  <button className="btn modal_btn btn-cancel" type="button" onClick={hideModal}>Close</button>
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