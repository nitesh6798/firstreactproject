import React,{useState,useEffect} from 'react'

export default function ApiCall() {
  const[users,usersSet] = useState({})
  useEffect(()=>{
    async function fetchUsers(){
    var raw = undefined;
    var requestOptions ={
      method:"GET",
      body:raw,
      redirect:"follow"
    }
    const result = await fetch(
      `https://us-central1-growthfilepractice.cloudfunctions.net/api/dummyPractice`,requestOptions
    )
    let res =await result.json()
    usersSet(res.dummyData)
   
    }
    fetchUsers()
  },[]);
const value = {
  users
}
  
  return (
value
  )
}

  