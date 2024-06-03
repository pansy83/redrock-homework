import React, { Component } from 'react'
import propTypes from "prop-types"
export class MainBanner extends Component {
  constructor(props){
  
         super(props)
  }
  render() {
    console.log(this.props)
    const{banners,title}=this.props
    return (
      <div>
        <h2>封装一个轮播图:{title}</h2>
        <ul>
         {
          banners.map(item=>{
            return <li key={item}>{item}</li>
          })
         }
        </ul>
        </div>
    )
  }
}
//MainBanner传入的props类型进行验证
MainBanner.propTypes={
  banners:propTypes.array.isRequired,
  title:propTypes.string
}
//MainBanner传入的props的默认值
MainBanner.defaultProps={
  banners:[],
  title:"默认标题"
}
export default MainBanner