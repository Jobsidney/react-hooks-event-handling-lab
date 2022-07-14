// Code Keypad Component Here
import React,{useState} from 'react'



function onAlt(event){
    event.preventDefault();
    // console.log(event.target.value);
    console.log('Entering password...');
}

export default function Keypad() {
  return (
    <div>
      <input type="password" placeholder='password' onChange={onAlt}/>
    </div>
  )
}
