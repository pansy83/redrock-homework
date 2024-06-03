import React from 'react'
import './Button.css'
function Button() {
  return (
    <div >
        <button  className='btn' onClick={()=>{console.log("hello")}}>
          你好
        </button>
        </div>
  )
}

export default Button