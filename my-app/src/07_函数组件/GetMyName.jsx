import React, { useState } from 'react'
import SayHi from './SayHi'

function GetMyName() {
    const [myName,setmyName]=useState("赵雯佳")
   
    const [count,setCount]=useState(0)
    const [counter,setCounter]=useState(0)
    function handleClick1(){
        setCount(count+1);
        setCounter(counter+1)
    }
    function handleClick2(){
        setCount(count+1)
        setCounter(counter-1)
    }
      return (
    <div>
        <h2>当前计数：{counter}</h2>
        <p>You clicked {count} times</p>
        <button className='btn' onClick={handleClick1} >
          +1
        </button>
        <button className='btn' onClick={handleClick2}>
            -1
        </button>
     <SayHi 
     name={'Pansy'}
     age={18}
     isTrue={false}
     list={['vue','react']}
     obj={{uname:'jack'}}
     cb={()=>{
      console.log(123)
     }}
     myname={myName}
     child={<span>
      this is span 
     </span>
     }
     />
    </div>
  )
}

export default GetMyName