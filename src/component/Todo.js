import React from 'react'
import ApiCall from "../context/ApiCall";
import { Card,Container,Row,Col,Button } from "react-bootstrap";
import View from "./View"
import {useNavigate} from 'react-router-dom'
export default function Todo() {
  const history = useNavigate()
  const { users } = ApiCall();
  console.log(users)
  const handleview =(id)=>{
    const filterview = users.todos.find(doc=>doc.id===id);
    history(`/todo/${id}`,{state:filterview})
  }
  
  return (
    <>
    {
          Object.keys(users!==undefined?users:{}).length>0
          ?<>
          {
            users.todos!==undefined?
            <>
              <Container >
      <Row>
      {users.todos.map(vals =>{
              return(
                <>
  
        <Col xs={12} md={4} sm={4} >
        <Card style={{ width: '18rem' }}>
      <Card.Body >
        <h1>{vals.id}</h1>
        <Card.Title>{vals.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{vals.body}</Card.Subtitle>
        <div className='d'>
    <Button variant="primary">Add</Button>
    <Button variant="danger">Delete</Button>
    <Button onClick={(id)=>handleview(vals.id)} variant="success">view</Button>
    </div>
      </Card.Body>
    </Card>
        </Col>
      
                </>
              )
            })}
      </Row>
      </Container>
            
            
            </>:"NO Post Data"
          }
          
          </>:"No data to show"
        }
          </>
        
  )
}
