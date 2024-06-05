import React, { useState } from 'react'
import './style2.css'
const list=[
    {id:1,
    text:"加油，未来属于你们！"},
    {id:2,
    text:"高考必胜，梦想起航！"},
    {id:3,
    text:"拼搏今朝，笑傲六月！"},
    {id:4,
    text:"一战成名，金榜题名。"},
    {id:5,
    text:"坚持就是胜利，加油！"},
    {id:6,
    text:"为梦冲刺，高考加油！"},
    {id:7,
    text:"笔下生花，前程似锦。"},
    {id:8,
    text:"梦想在望，全力以赴。"},
    {id:9,
    text:"高考路上，你最闪亮！"},
    {
    id:10,
    text:"一切都是最好的安排"
    },
]
function Comment() {
    const [commentList,setCommentList]=useState(list)
    const handleDelete=()=>{
        setCommentList([])
    }
    const handleClick=(event)=>{
        console.log("clientX:",event.clientX)
        console.log("clientY:",event.clientY)
        setCommentList(commentList.filter(item=>
            item.id !==2
        ))
    }
  return (
    <div>
        <div className='reply-list'>
        {commentList.map(item=>(
            <li className='il' key={item.id}>{item.text}</li>
        ))}
   </div>
   <button className='btn' onClick={handleDelete}>删除</button>
    {<button className='btn2' onClick={handleClick}>
        btn2
        </button>}
        <div className='tabs'>
        <span>最新</span>
        <span>最热</span>
        </div>
       </div>
    
  )
}

export default Comment