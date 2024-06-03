import React, { Component } from 'react'
import MainBanner from './MainBanner'
import MainProductList from './MainProductList'
export class Main extends Component {
  constructor(){
    super()
    this.state={
      banners:["新歌曲","新MV","新歌单"],
      ProductList:["推荐商品","热门商品","流行商品"]
    }
  }
  componentDidMount(){
       
  }   
  render() {
    const {banners,ProductList}=this.state
    return (
      <div className='main'>
        <div>Main</div>
        {{/* 父传子 */}}
        <MainBanner banners={banners} title="轮播图"/>
        <MainProductList ProductList={ProductList}/>
        </div>
    )
  }
}

export default Main