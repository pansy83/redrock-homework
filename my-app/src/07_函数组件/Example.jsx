import React, { useState } from 'react'
import './style2.css'
import { useRef } from 'react';
import orderBy from 'lodash/orderBy';
const list1=[{
    id:1,
    like:99,
    uname:'Pansy',
    ctime:11
},
{
   id:2,
   like:10,
   uname:'Sara',
   ctime:12
},
{
   id:3,
   like:100,
   uname:'Hello',
   ctime:13
},
{
   id:4,
   like:29,
   uname:'World',
   ctime:14
}]
function Example() {
    const age=10
    const [type,setType]=useState('hot')
    const [uname,setUname]=useState('Pansy')
    const [commentList,setCommentList]=useState(list1)
    const [value,setValue]=useState('')
    
    const tabs=[
        {type:'hot',text:'最热'},
        {type:'time',text:'最新'}
    ]
    const list=[
        {id:1,uname:'Pansy'},
        {id:2,uname:'Jack'},
        {id:3,uname:'John'}
    ]
    const handleClick=(event)=>{
        console.log('Button clicked',event)
    }
    const handleKeyPress=(event)=>{
        
        console.log("clientX:",event.clientX);
        console.log("clientY:",event.clientY)
    }
    const handleClick2=(uname)=>{
        console.log(uname)
    }
    const handleClick3=(age,e)=>{
        console.log(`${age}你好啊`);
        console.log("clientX:",e.clientX)
    }
    const handleTabChange=(type)=>{
          console.log(type)
          setType(type)
          if(type==='hot'){
            //根据点赞数量排序
            //lodash
           setCommentList(orderBy(commentList,'like','desc'))
          }
          else{
            //根据创建时间排序
            setCommentList(orderBy(commentList,'ctime','desc'))
          }

    }
    const handleClick4=(e)=>{
        console.log(`${e}你好`)
        setUname(e)
    }
    
  return (
    <div>
        <button onClick={handleClick}>Click me</button>
        <input type="text" onClick={handleKeyPress} placeholder='Press Enter'/>
        <button  className='btn'onClick={()=>handleClick2('jack')}>btn2</button>
         <button className='btn' onClick={(e)=>handleClick3(90,e)}>btn3</button>
         <span className='span1'>
           {tabs.map(item=>
            <p
            className={`${type===item.type && 'active'}`}
             key={item.type}
            onClick={()=>handleTabChange(item.type)}
            >
                {item.text}
                </p>
           )}
         </span>
         <span className='span2'>
            {list.map(item=>
                (
                    <h3 
                    className={`${uname===item.uname && 'h3'}`}
                    key={item.id} onClick={()=>handleClick4(item.uname)}>
                        {item.uname}
                        </h3>
                )
            )}
         </span>
         <span>
            {commentList.map(item=>
                <li key={item.id}>{item.uname}</li>
            )}
         </span>
         {{/* 受控绑定表单 */}}
         <input type="text" 
         value={value} 
         onChange={(e)=>setValue(e.target.value)}/>
        
        </div>
  )
}

export default Example