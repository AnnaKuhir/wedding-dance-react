import React, { useState, useEffect } from 'react';
import { ChangeData } from '../../api/ChangeData';
import './style.scss'

const EditModal = ({ setShow, content }) => {

  const [title, setTitle] = useState('');
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (content) {
      setTitle(content.meta.title)
      setItems(content.content)
    }
  }, [content]);

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
    setShow(false);
  }

  return (
    <div className="edit-container">
      <h1 className="edit-title">Editing</h1>
      <form action="" className="edit-form">
        <div className="input-container">
          <input className="edit-control"
            type="text"
            name="logo"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {
            items.map((item, index) => {
              return <input className="edit-control"
                type="text" key={item._id}
                value={item.title} data-id={index}
                onChange={
                  (e) => {
                    const index = +e.target.dataset.id;
                    if (index !== -1) {
                      let newItemsArr = [...items];
                      newItemsArr[index].title = e.target.value;
                      setItems(newItemsArr);
                    }
                    return;
                  }
                }
              />
            })
          }
        </div>
        <div className="btns-container">
          <button className="btn btn-submit" type="button" onClick={(e) => submitEdit(e)}>Save</button>
          <button className="btn btn-cancel" type="button" onClick={hideModal}>Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default EditModal