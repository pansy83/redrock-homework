import React, { Component } from 'react'
import TabControl from './TabControl/TabControl'


export class App extends Component {
    constructor() {
        super()
        this.state={
            titles:["流行","新款","精选"],
            content:["在这个瞬息万变的时代，流行如同一股不息的风潮，席卷着生活的每一个角落。它不仅仅是衣橱里新添的那件潮流单品，或是社交平台上疯传的热门话题，更是一种文化现象，映射出大众审美与社会心态的微妙变迁。流行，是时代的脉搏，每一次跳动都携带着创新与复古的交融，让昨日的经典与明日的幻想交织成今日的风景线。",
            " 我们的新款，是艺术与科技的巧妙碰撞，每一个线条，每一块色彩，都在诉说着对美好生活的无限向往。它们超越了季节的更迭，不仅仅追随潮流，而是旨在塑造潮流。无论是剪裁独特的服饰，还是匠心独运的配饰，每一款新品都是对个性的尊重与赞美，鼓励每一位穿戴者展现真我风采。探索我们的新款系列，就像打开一扇通往未知世界的大门，每一次尝试都是自我风格的全新诠释。在这里，每一款设计都是对“不同凡响”的深刻理解，让每一次出场都成为令人难忘的时尚宣言。选择新款，就是选择拥抱变化，选择让自己在日常的每一刻都能闪耀非凡光彩。",
            "精选之道，是对品质的无上追求，每一次精心挑拣，都是对完美的致敬。在浩瀚的选择中，我们为您层层把关，只呈现那百分之一的卓越。每一件精品，背后是匠心独具的工艺与时间的淬炼，它们不仅仅是商品，更是艺术与生活的美妙交响。从原料的精细筛选到成品的璀璨亮相，我们相信，真正的价值，在于那份不可复制的独特与恒久魅力。走进我们的精选世界，让每一次拥有，都成为生活中的一抹亮色，一场值得回味的优雅邂逅。"],
            tabIndex:0
        }
    }
    tabClick(index){
        this.setState(
            {tabIndex:index}
        )
    }
  render() {
    const {titles,tabIndex,content} =this.state
    return (
      <div className='app'>
      <TabControl titles={titles} tabClick={i=>{this.tabClick(i)}}/>
      <h1>{content[tabIndex]}</h1>
        </div>
    )
  }
}

export default App