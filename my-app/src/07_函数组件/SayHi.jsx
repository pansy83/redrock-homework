import React from "react";
import { useEffect } from "react";
function SayHi(uname) {
    useEffect(()=>{
        console.log(`${uname}你好`)
    },[])
  return  (
    null
  )
}

export default SayHi