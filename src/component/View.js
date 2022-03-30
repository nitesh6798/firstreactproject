import React from 'react'
import ApiCall from '../context/ApiCall';
import {Container,Row,Col,Card} from "react-bootstrap"
import{useLocation} from "react-router-dom"
export default function View() {
    const {state}= useLocation();
    console.log(state)
  return (
    <>
  {state!== undefined ?(
<>
<Container className='e'>
  <Row>
    <Col className='f' >
    <Card style={{ width: '18rem' }}>
  <Card.Body>
    <h1>{state.id}</h1>
    <Card.Title>{state.title}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">{state.body}</Card.Subtitle>

  </Card.Body>
</Card>   
    </Col>
  </Row>
</Container>
</>

  ):"no data show"}
    </>
  )
}
