import React, { Component } from 'react'

export class MainProductList extends Component {
  constructor(props){
      super(props)
      this.state={
        
      }
  }
  render() {
    const {ProductList}=this.props
    return (
      <div>
       <h2>商品列表</h2>
       <ul>
       {
        ProductList.map(item=>{
         return  <li key={item}>{item}</li>
        })
       }
       </ul>
        </div>
    )
  }
}

export default MainProductList