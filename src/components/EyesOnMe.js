// Code EyesOnMe Component Here
import React from 'react'

function fire(){
    console.log('Good!');
}
function blur(){
    console.log('Hey! Eyes on me!');
}
export default function EyesOnMe() {
 
  return (
    <div>
      <button onFocus={fire} onBlur={blur}>Eyes on me</button>
    </div>
  )
}
