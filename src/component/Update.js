import React, { useRef } from "react";
import { useLocation } from "react-router-dom";
import ApiCall from "../context/ApiCall";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
export default function Update() {
  const { state } = useLocation();
  const id = useRef();
  const title = useRef();
  const body = useRef();
  const handleupdate = (e) => {
    console.log(id.current.value);
    const details = {
      id: id.current.value,
      title: title.current.value,
      body: body.current.value,
    };

    if (id.current.value !== "") {
      let myHeaders = new Headers();
      myHeaders.append("content-type", "application/json");
      let requestOptions = {
        method: "PUT",
        body: JSON.stringify(details),
        headers: myHeaders,
        redirect: "follow",
      };
      // fetch("", requestOptions)
      //   .then((response) => response.text())
      //   .then((result) => {
      //     const re = JSON.parse(result);
               //if(re.success===true){

         //}
         //else{

        // }
      //   });
             //.catch(error=>console.error(error));
    } else {
      //no action show error message
    }
  };
  return (
    <>
      {state !== undefined ? (
        <>
          <Container className="e">
            <Row>
              <Col className="f">
                <Card style={{ width: "18rem" }} className="g">
                  <Card.Body >
                    <input className="h" type="text" placeholder="text" ref={id} />

                    <Card.Title >
                      <input className="h" type="text" placeholder="text" ref={title} />
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      <input className="h" type="text" placeholder="text" ref={body} />
                    </Card.Subtitle>
                    <Button onClick={handleupdate} variant="primary">
                      Update
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </>
      ) : (
        "no data show"
      )}
    </>
  );
}
