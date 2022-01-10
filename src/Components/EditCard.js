import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import { useState } from 'react';

const EditCard = ({onUpdate, id, title ,body}) => {
  
  const [newTitle, setTitle] = useState(title);
  const [newBody, setBody] = useState(body);
  const [show, setShow] = useState(false);


  
  const handleClose = () => {
      setShow(false);
      setTitle(title);
      setBody(body);
  }

  const handleShow = () => {
    setTitle(title);
    setBody(body);
    setShow(true);       
  }

  const handleUpdate = () => {
     onUpdate(id, newTitle, newBody);
     handleClose();
  }

  return (
        <>
          <Button className='tc fl' variant="primary" onClick={handleShow}>
            Edit
          </Button>
    
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header>
              <Modal.Title>Edit post</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <input
                className='f4 ma3 pa2 w-100 center'
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={newTitle}
                placeholder='Title'/>
                
              <textarea
               className='f4 pa2 w-100 center'
               onChange={(e) => setBody(e.target.value)}
               placeholder='Write something...'>{newBody}</textarea>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="primary" onClick={handleUpdate}>Update</Button>
            </Modal.Footer>
          </Modal>
        </>
  );
}


export default EditCard;