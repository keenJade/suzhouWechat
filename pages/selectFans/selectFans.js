// pages/selectFans/selectFans.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: getApp().globalData.imgUrl,
    dateTime1: '2019-03-30',
    dateTime2: '2019-04-30',
    array: ['全部', '充值', '提现', '退款', '消费'],
    index: 0,
    emptyData: false,//有无数据
    panelShow: false, // 是否打开弹窗
    isSelect: 'false', // 是否选中
 
  },
  // 切换日期
  bindDateChange1: function (e) {
    let arr = e.detail.value.split('-')
    let date = arr[0] + '-' + arr[1] + '-' + arr[2]
    this.setData({
      dateTime1: date,
    })
  },
  bindDateChange2: function (e) {
    let arr = e.detail.value.split('-')
    let date = arr[0] + '-' + arr[1] + '-' + arr[2]
    this.setData({
      dateTime2: date,
    })
  },
  bindPickerChange(e) {
    this.setData({
      index: e.detail.value
    })
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