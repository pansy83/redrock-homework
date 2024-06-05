import React, { useState } from 'react'
import "./style.css"
const isLogin=false
//定义文章类型
const articleType=1 // 0 1 3
//定义核心函数
//(根据文章类型返回不同的JSX模版)
function getArticleTem(){
    if(articleType===0){
        return <div>我是无图模式</div>
    }
   else if(articleType===1){
      return <div>我是单图模式</div>
   }
   else{
    return <div>我是三图模式</div>
   }
}
function App() {
    const [count,setCount]=useState(0)
    const [form,setForm]=useState({
        uname:'jack',
        age:19
    })
    function handleClick5(){
        setCount(count+1)
    }
    // const clickHandler=(e)=>{
    //     console.log('button按钮点击了',e)
    // }
    function handleClick4(){
        console.log("hello ")
    }
    function handleClick6(){
        setForm({
            ...form,
            uname:'Pansy'
        })
    }
   
    //传递自定义参数
    const clickHandler2=(uname)=>{
        console.log('button按钮点击了',uname)
    }
    //事件参数e
    const handleClick=(event)=>{
        console.log("clientX",event.clientX)
        console.log("clientY:",event.clientY)
    }
    const handleClick3=(uname,e)=>{
        console.log('button',uname,e)
    }

  return (
    <div>
        App
        <h2>{count}</h2>
        <h1>{form.uname}</h1>
        {/* 逻辑与 && */}
        {isLogin && <span>this is span</span>}
        {/* 三元运算符 */}
        {isLogin ?<span>jack</span>:<span>loading</span>}
        {getArticleTem()}
        <button className='btn' onClick={()=>clickHandler2('jack')}>btn1</button>
         <button className='btn'onClick={handleClick}>btn2</button>
         <button className='btn' onClick={(e)=>handleClick3('jack',e)}>btn3</button>
        <button className='btn' onClick={handleClick4}>btn4</button>
        <button className='btn' onClick={handleClick5}>btn5</button>
        <button className='btn' onClick={handleClick6}>修改uname</button>
        </div>
  )
}

export default App