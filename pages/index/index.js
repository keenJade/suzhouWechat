

const app = getApp()

Page({
  data: {
    imgBase: app.globalData.imgUrl,
    time:10000,//倒计时总秒数
    showTime:['00','00','00'],
    imgUrls: [
      'swiperimg01.png',
      'swiperimg01.png',
      'swiperimg01.png'
    ],
    p3: [
      '[小天使]于6秒前购买了一件商品1',
      '[小天使]于6秒前购买了一件商品2',
      '[小天使]于6秒前购买了一件商品3'
    ],
    current: 0, //轮播图计数器
    autoplay: true,
    interval: 5000,
    duration: 1000,
    currentTab: 0, //默认tab
  },
  swiperChange: function (e) {
    var that = this;
    if (e.detail.source == 'touch') {
      that.setData({
        current: e.detail.current
      })
    }
  }, 
  goSearch() {
    wx.navigateTo({
      url: '/pages/search/search',
    })
  },
  changeIndicatorDots(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange(e) {
    this.setData({
      duration: e.detail.value
    })
  },
  //点击切换
  clickTab: function (e) {
    this.setData({
      currentTab: e.currentTarget.id,
      emptyData: true
    })
   
  },
 
  /**
 * 生命周期函数--监听页面加载
 */
  onLoad: function (options) {
    this.setData({
      current: this.data.current
    })
  },
})
