const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    time: 938483488433489,//倒计时总秒数
    showTime: ['00', '00', '00'],
    isCollect: false,
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    imgBase: app.globalData.imgUrl,
    imgUrls: [
      'goods01.png',
      'goods01.png',
      'goods01.png'
    ],
    guigeModel: false,
    goodsnumber: 1, //购买数量
    goodsColor: ['中国红', '藏青色', '铁锈红', '宝蓝色'],
    goodsitem: '中国红',
    goodsSize: ['S码', 'M码', 'L码', 'XL码'],
    sizeitem: 'S码',
    modelShare: false
  },
  openGG() {
    this.setData({
      guigeModel:　true
    });
  },
  closeGG() {
    console.log(0)
    this.setData({
      guigeModel: false
    });
  },
  //收藏
  collect() {
     this.setData({
       isCollect: !this.data.isCollect
     });
    wx.showToast({
      title: '商品已收藏',
      icon: 'none',
      duration: 2000
    })
  },
  //颜色选择
  changColor(e){
    this.setData({
      goodsitem: e.currentTarget.dataset.classify
    });
  },
  //尺码选择
  changSize(e) {
    this.setData({
      sizeitem: e.currentTarget.dataset.classify
    });
  }, 
  //数量减
  minus(e) {
    let goodsnumber = this.data.goodsnumber
    goodsnumber = goodsnumber <= 1 ? 1 : goodsnumber-1
    this.setData({
      goodsnumber: goodsnumber
    });
  }, 
  //数量加
  add(e) {
    let goodsnumber = this.data.goodsnumber
    goodsnumber+=1
    this.setData({
      goodsnumber: goodsnumber
    });
  }, 
  goindex(){
    wx.switchTab({
      url: '/pages/index/index'
    })
  },
  shopCart(){
    wx.switchTab({
      url: '/pages/cart/cart'
    })
  },
  //加入购物车
  addCart(){
    wx.showToast({
      title: '已加入购物车',
      icon: 'none',
      duration: 2000
    })
  },
  //购买
  pay(){
    wx.navigateTo({
      url: '/pages/cart/cart'
    })
  },
  // 倒计时
  countdown: function () {
    let that = this;
    let total_micro_second = that.data.time;
    let countDownTime;
    if (total_micro_second <= 0) {
      that.setData({
        time: total_micro_second,
        showTime: ['00', '00', '00']
      });
      return
    } else {
      countDownTime = that.dateformat(total_micro_second)//显示的时间
      total_micro_second -= 1000;//剩余的毫秒数
    }
    that.setData({
      time: total_micro_second,
      showTime: countDownTime
    });
    setTimeout(function () {
      that.countdown();
    }, 1000)
  },

  // 时间格式化输出，如11天03小时25分钟19秒  每1s都会调用一次
  dateformat: function (micro_second) {
    // 总秒数
    var second = Math.floor(micro_second / 1000);
    // 天数
    var day = Math.floor(second / 3600 / 24);
    // 小时
    var hr = Math.floor(second / 3600 % 24);
    // 分钟
    var min = Math.floor(second / 60 % 60);
    // 秒
    var sec = Math.floor(second % 60);
    return [(hr < 10 ? '0' + hr : hr), (min < 10 ? '0' + min : min), (sec < 10 ? '0' + sec : sec)];
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.countdown();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
 
})