// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    // 开始的时间
    startTime: '',
    // 结束的时间
    endTime: '',
    // 默认显示
    defaultState: true,
    // 一秒显示的
    oneSecond: false,
    // 两秒显示的
    twoSecond: false,
    // 三秒显示
    treeSecond: false,
    // 四秒显示
    fourSecond: false,
  },
  touchstart(e) {
    this.startTime = e.timeStamp
  },
  touchend(e) {
    this.endTime = e.timeStamp
    let resTime = this.endTime - this.startTime;
    if(resTime >= 10000 && resTime <= 12000 || resTime == 1000) {
      this.setData({
        // 默认显示
        defaultState: false,
        // 一秒显示的
        oneSecond: true,
        // 两秒显示的
        twoSecond: false,
        // 三秒显示
        treeSecond: false,
        // 四秒显示
        fourSecond: false,
      })
    }else if(resTime >= 2000 && resTime <= 4000) {
      this.setData({
        // 默认显示
        defaultState: false,
        // 一秒显示的
        oneSecond: false,
        // 两秒显示的
        twoSecond: true,
        // 三秒显示
        treeSecond: false,
        // 四秒显示
        fourSecond: false,
      })
    }else if(resTime >= 5000 && resTime <= 6000) {
      this.setData({
        // 默认显示
        defaultState: false,
        // 一秒显示的
        oneSecond: false,
        // 两秒显示的
        twoSecond: false,
        // 三秒显示
        treeSecond: true,
        // 四秒显示
        fourSecond: false,
      })
    }else if(resTime >= 7000 && resTime <= 9000) {
      this.setData({
        // 默认显示
        defaultState: false,
        // 一秒显示的
        oneSecond: false,
        // 两秒显示的
        twoSecond: false,
        // 三秒显示
        treeSecond: false,
        // 四秒显示
        fourSecond: true,
      })
    }else {
      this.setData({
        // 默认显示
        defaultState: true,
        // 一秒显示的
        oneSecond: false,
        // 两秒显示的
        twoSecond: false,
        // 三秒显示
        treeSecond: false,
        // 四秒显示
        fourSecond: false,
      }) 
    }
    console.log(resTime);
  }
})
