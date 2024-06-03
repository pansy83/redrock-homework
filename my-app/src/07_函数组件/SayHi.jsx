import React from "react";
import { useEffect } from "react";
function SayHi(value) {
    useEffect(()=>{
        console.log(`${value.name}你好`)
    },[])
  return  (
    null
  )
}

export default SayHi