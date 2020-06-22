import React from 'react';
import './style.scss'

const Modal = ({ handleClose, show, children, handleSubmit }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return ( 
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <div className="modal_btnContainer">
        <button className="btn modal_btn btn-submit" type="submit" onClick={handleSubmit}>Submit</button>
        <button className="btn modal_btn btn-cancel" type="button" onClick={handleClose}>Close</button>
        </div>
      </section>
    </div>
  );
}

export default Modal;