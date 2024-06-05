import React from "react";
import { useEffect } from "react";
function SayHi(props) {
 useEffect(()=>{
  console.log(props.name+"hi react")
  console.log(props.age+"可以")
  console.log(`${props.myname}成功啦`)
 },[])
  return  (
    <div>
    <span>
      {
        `this is ${props.myname}`
      }
    </span>
    {
    `this is front-end?
    ${props.obj.uname}`
  }
    </div>
   
  )
}

export default SayHi
