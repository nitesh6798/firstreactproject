import React, { useState, useEffect } from "react";
import ApiCall from "../context/ApiCall";
import { Card, Container, Row, Col, Button, Modal,Toast } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import View from "./View";
import Update from "./Update";
export default function Post() {
  const [show, setShow] = useState(false);
  const [showToast, setToastShow] = useState(false);
  const [deleteId, setDeleteId] = useState("");

  const handleClose = () => setShow(false);

  const history = useNavigate();
  const { users } = ApiCall();
  const handleview = (id) => {
    console.log(id);
    const filterview = users.posts.find((doc) => doc.id === id);
    console.log(filterview);

    history(`/post/${id}`, { state: filterview });
  };
  const handleDelete = (id) => {
    console.log(id);
    setShow(true);
    setDeleteId(id);
  };
  const handleDeleteUpdate = () => {
    
      //toh filter krega and backend requrest krega to delete

      setShow(false);
      
      const deleteObject = {
        id: deleteId,
      };
      let myHeaders = new Headers();
      myHeaders.append("content-type", "application/json");
      let requestOptions = {
        method: "DELETE",
        body: JSON.stringify(deleteObject),
        headers: myHeaders,
        redirect: "follow",
      };
      console.log(deleteObject);
      fetch("", requestOptions)
        .then((response) => response.text())
        .then((result) => {
          const re = JSON.parse(result);
          //if(re.success===true){

          // }
          // else{

          //  }
        })
      .catch(error=>
        {
          setToastShow(true);
        console.log(showToast)
          console.error(error)

        })
 
    console.log("inside action");
  };
  const handleadd = (id) => {
    const filterview = users.posts.find((doc) => doc.id === id);
    history(`/postupdate/${id}`, { state: filterview });
  };
  return (
    <>
      {Object.keys(users !== undefined ? users : "").length > 0 ? (
        <>
          {users.posts !== undefined ? (
            <>
              <Container>
                <Row>
                  {users.posts.map((vals) => {
                    return (
                      <>
                        <Col xs={12} md={4} sm={4}>
                          <Card className="c" style={{ width: "18rem" }}>
                            <Card.Body>
                              <h1>{vals.id}</h1>
                              <Card.Title>{vals.title}</Card.Title>
                              <Card.Subtitle className="mb-2 text-muted">
                                {vals.body}
                              </Card.Subtitle>
                              <div className="d">
                                <Button
                                  onClick={(id) => handleadd(vals.id)}
                                  variant="primary"
                                >
                                  Add
                                </Button>
                                <Button
                                  variant="danger"
                                  onClick={(id) => handleDelete(vals.id)}
                                >
                                  Delete
                                </Button>
                                <Button
                                  onClick={(id) => handleview(vals.id)}
                                  variant="success"
                                >
                                  view
                                </Button>
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
                    );
                  })}
                </Row>
              </Container>
            </>
          ) : (
            "no data show"
          )}
        </>
      ) : (
        "No data show"
      )}
    </>
  );
}
