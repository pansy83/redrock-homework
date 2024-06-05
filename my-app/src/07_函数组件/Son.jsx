import React from 'react'

function Son({onGetMsg}) {
    const sonMsg='this is son msg'
    
  return (
    <div>
        
        <button className='btn' onClick={()=>onGetMsg(sonMsg)}>
            send
        </button>
        </div>
  )
}

export default Son