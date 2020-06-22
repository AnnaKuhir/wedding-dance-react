import React, { useState } from 'react';
import { getUser } from '../../api/GetUser';

const AuntificationModal = ({ setShow }) => {

  const emailVal = React.useRef();
  const passVal = React.useRef();


  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })


  const hideModal = () => {
    setShow(false)
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
    console.log(formData);
    setShow(false);
  }

  return (<>
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
  </>
  )
}

export default AuntificationModal;