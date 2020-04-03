// pages/payment/payment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgBase: getApp().globalData.imgUrl,
    goodsnumber:1,
    wordnum:0
  },
  //数量减
  minus(e) {
    let goodsnumber = this.data.goodsnumber
    goodsnumber = goodsnumber <= 1 ? 1 : goodsnumber - 1
    this.setData({
      goodsnumber: goodsnumber
    });
  },
  //数量加
  add(e) {
    let goodsnumber = this.data.goodsnumber
    goodsnumber += 1
    this.setData({
      goodsnumber: goodsnumber
    });
  }, 
  getWord(e){
    this.setData({
      wordnum: e.detail.cursor
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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