import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'
export default function Home() {
    const history= useNavigate();
     const handlepost =(e)=>{
         history('/post')
     }
     const handlealbum =(e)=>{
        history('/album')
    }
    const handletodo =(e)=>{
        history('/todo')
    }
  return (
      <>
    <div className='a'>
        <h1>Dummy App</h1>
    </div>
    <div className='b'>
    <Button onClick={handlepost}  variant="primary">post</Button>
      <Button onClick={handlealbum}  variant="primary">album</Button>
      <Button onClick={handletodo}  variant="primary">todo</Button>

    </div>
    </>
  )
}
