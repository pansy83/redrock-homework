import React, { Component } from 'react'
import AddCounter子 from './AddCounter 子'

export class App extends Component {
    constructor(){
        super()
        this.state={
            counter:100
        }
    }
    changeCounter(count){
  
      this.setState({counter:this.state.counter+count})
    }
   
  render() {
    
    const {counter}=this.state
    return (
      <div>
      <h2>当前计数：{counter}</h2>  
      {/* 父组件通过属性=值 的形式来传递给子组件数据 */}
      <AddCounter子 addClick={(count) => this.changeCounter(count)}/>
      </div>
    )
  }
}

export default App