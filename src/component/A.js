import React,{useState,useEffect} from 'react'

export default function A() {
  const [counter,setCounter] = useState(0);
  const[data,setData]= useState({})
  useEffect(()=>{
    async function fetchUsers(){
    var raw = undefined;
    var requestOptions ={
      method:"GET",
      body:raw,
      redirect:"follow"
    }
    const result = await fetch(
      `https://randomuser.me/api`,requestOptions
    )
    let res =await result.json()
    console.log(res)
    
    setData(res.results)
    console.log(data)
    }
    fetchUsers()
    
  },[]);
  return (
    <>
    <div className='l'>
      <h1>Hello world</h1>
      <p>
        {counter}
      </p>
      <button onClick={()=>setCounter(counter+1)}>inc counter</button>
    </div>
{data.map((rom)=>{
  return(
    <h1>{rom.gender}</h1>
  )
})}

</>
  )
}

