import React,{useState,useEffect} from 'react'
import ApiCall from '../context/ApiCall'
import { Card,Container,Row,Col, Button,Modal } from "react-bootstrap";
import { useNavigate } from 'react-router-dom'
import View from './View';
import Update from "./Update";
export default function Album() {
  const history= useNavigate();
  const {users} = ApiCall();
  const handleviews =(id)=>{
    console.log(id)
    const filterview =  users.albums.find(doc=>doc.id===id);
    console.log(filterview)
    
    history(`/album/${id}`,{state:filterview})
    
  }
  const handleadd = (id) => {
    const filterview = users.albums.find((doc) => doc.id === id);
    history(`/postupdate/${id}`, { state: filterview });
  };
  const [show, setShow] = useState(false);
  const [deleteId, setDeleteId] = useState("");

  const handleClose = () => setShow(false);
  const handleDelete = (id) => {
    console.log(id)
   
    setShow(true);
    setDeleteId(id);
  }
  const handleDeleteUpdate = () => {
    if (deleteId !== "") {
      //toh filter krega and backend requrest krega to delete

      const deleteObject = {
        id:deleteId
      }
      let myHeaders = new Headers();
      myHeaders.append("content-type", "application/json");
      let requestOptions = {
        method: "DELETE",
        body: JSON.stringify(deleteObject),
        headers: myHeaders,
        redirect: "follow",
      };
      console.log(deleteObject)
    
    fetch("", requestOptions)
       .then((response) => response.text())
       .then((result) => {
         const re = JSON.parse(result);
         //if(re.success===true){

         //}
         //else{

        // }
       })
       //.catch(error=>console.error(error));
      }
    else{
     //"for not sending request because deleteId is empty"
    }
    
  }


  return (
    <>
  {
    Object.keys(users!==undefined?users:"").length>0
    ?<>
    {
      users.albums!==undefined?
      <>
      <Container>
  <Row>
    {users.albums.map((val)=>{
      return(
        <>
            <Col xs={12} md={4} sm={4} >
    <Card className='c' style={{ width: '18rem' }}>
  <Card.Body>
    <h1>{val.id}</h1>
    <Card.Title>{val.title}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">{val.body}</Card.Subtitle>
    <div className='d'>
    <Button onClick={(id) => handleadd(val.id)} variant="primary">Add</Button>
    <Button onClick={(id) => handleDelete(val.id)} variant="danger">Delete</Button>
    <Button onClick={(id)=>handleviews(val.id)} variant="success">view</Button>
    </div>
  </Card.Body>
</Card>
    </Col>
    <Modal show={show} onHide={handleClose}>
                          <Modal.Header closeButton>
                            <Modal.Title>Delete this id</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            Woohoo, you're deleting something
                          </Modal.Body>
                          <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                              Close
                            </Button>
                            <Button
                              variant="danger"
                              onClick={handleDeleteUpdate}
                            >
                              Delete
                            </Button>
                          </Modal.Footer>
                        </Modal>

        </>
      )
    })}

  </Row>
</Container>
      
      </>:"no data show"
    }
    
    </>:"No data show"
  }
  </>
  )
}

