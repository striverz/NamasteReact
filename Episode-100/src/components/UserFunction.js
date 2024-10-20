import React, { useState } from 'react'

const UserFunction = (props) => {
  const [count1,setCount1]=useState(0);
  const [count2]=useState(1);
  return (
    <div>
        
        <h1> Name: {props.name}</h1>
        <h2>count1 = {count1}</h2>
        <button onClick={()=>{
          setCount1(count1+1);
        }}>Increase</button>
        <h2>count1 = {count2}</h2>
        <h2>Location</h2>
        <h4>Contact</h4>
    </div>
  )
}

export default UserFunction