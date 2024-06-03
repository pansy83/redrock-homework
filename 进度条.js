//第一部分：获取DOM元素
let music=document.querySelector('.audio');
let seekbar=document.querySelector('.seekbar');
let currentTime=document.querySelector('.current-time');
let duration=document.querySelector('.duration');

//第二部分：事件监听(事件绑定)
//当音乐播放完毕时
music.addEventListener('ended',function(){
    music.currentTime=0
});

music.onloadeddata=function(){
    //设置进度条最大值为音乐总时长
    seekbar.max=music.duration;
    var ds=parseInt(music.duration%60)
    var dm=parseInt((music.duration/60)%60)
    duration.innerHTML=dm+':'+ds;
}
//当音乐当前播放时间更新时
music.ontimeupdate=function(){
   //当进度条的值设为当前播放时间，实现进度条随着音乐播放而动态更新
   const progressPercent = (currentTime /duration) * 100;
    seekbar.value = `${progressPercent}%`
}
//定义函数
handleSeekBar=function(){
    music.currentTime=seekbar.value;
}
//当音乐的播放时间更新时
music.addEventListener('timeupdate',function(){
    var cs=parseInt(music.currentTime%60)
    var cm=parseInt((music.currentTime/60)%60)
    currentTime.innerHTML=cm+':'+cs
},false)
