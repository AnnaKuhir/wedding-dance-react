import React from 'react';
import './style.scss';

const AuntificationModal = ({ handleChange, emailVal, passVal, handleSubmit, hideModal }) => {
  return (
    <>
      <h1 className="modal-main_title">Authorization</h1>
      <form action="" className="modal-main_form">
        <div className="modal-main_controlsContainer">
          <div className="modal-main_control">
            <label htmlFor="login" className="control-label required">Enter your login</label>
            <input type="email" id="login" name="email" className="form-input" placeholder="somename@gmail.com" onChange={handleChange} ref={emailVal} />
          </div>
          <div className="modal-main_control">
            <label htmlFor="password" className="control-label required">Enter your password</label>
            <input type="password" id="password" name="password" className="form-input" placeholder="At least 8 characters" onChange={handleChange} ref={passVal} />
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