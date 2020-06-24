import React, { useState, useEffect } from 'react';
import { ChangeData } from '../../api/ChangeData';

const EditModal = ({ setShow, content }) => {

  // debugger;

  const [title, setTitle] = useState('');
  const [items, setItems] = useState([]);
  // const [isDataSaved, changeDataStatus] = useState(false);

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
      // content: [{ item }]
    };

    ChangeData(await changedData);
    setShow(false)
    // changeDataStatus(true);
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
          ></input>

          {
            items.map(item => {
              return <input className="edit-control"
                type="text" key={item._id}
                value={item.title}
                onChange={
                  (e) => {
                    setItems(e.target.value)
                  }
                }
              ></input>
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