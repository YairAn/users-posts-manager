import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import TextField from "@material-ui/core/TextField";



import { useRef, useState, useEffect } from 'react';

const EditCard = ({onUpdate, id, title ,body}) => {
  
  const [newTitle, setTitle] = useState(title);
  const [newBody, setBody] = useState(body);
  const [show, setShow] = useState(false);

  const titleField = useRef(null);
  const bodyField = useRef(null);

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

            <TextField
              className='f4 ma3 pa2 w-100 center'
              multiline
              rows={2}
              maxRows={Infinity}
              autoFocus
              type="text"
              value={newTitle}
              onChange={(e) => setTitle(e.target.value)}
              inputRef={titleField}
              inputProps={{
                onKeyPress: event => {
                  const { key } = event;
                  console.log(key);
                  if (key === "Enter") {
                    bodyField.current.focus();
                  }
              }
            }}
              label="Title"
          />
         <TextField
            className='f4 ma3 pa2 w-100 center'
            autoFocus={false}
            multiline
            rows={4}
            maxRows={Infinity}
            type="text"
            value={newBody}
            onChange={(e) => setBody(e.target.value)}
            inputRef={bodyField}
            inputProps={{
              onKeyPress: event => {
                const { key } = event;
                console.log(key);
                if (key === "Enter") {
                  titleField.current.focus();
                }
              }
            }}
            label="Body"
      />              
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