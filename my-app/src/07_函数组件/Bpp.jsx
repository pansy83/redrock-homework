//useState实现一个计数器按钮
import React from 'react'
import {useState}from 'react'
function Bpp() {
  //1.调用useState添加一个状态变量
  //count状态变量
  //setCount修改状态变量的方法
  //2.点击事件回调
  const [count,setCount]=useState(0)
  const handleClick=()=>{
    setCount(count+1)
  }
  //作用：1.用传入的新值修改count
  //2.重新使用新的count渲染UI
  return (
    <div>
      index
      <button onClick={handleClick}>{count}</button>
      </div>
  )
}

export default Bpp