const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgBase: app.globalData.imgUrl,
    times: [
      {
        id: "1",
        type: 1,
        text: "全部",
        curr: true
      },
      {
        id: "2",
        type: 2,
        text: "儿童益智",
        curr: false
      },
      {
        id: "3",
        type: 3,
        text: "美妆个护",
        curr: false
      },
      {
        id: "4",
        type: 3,
        text: "潮流服饰",
        curr: false
      },
      {
        id: "5",
        type: 3,
        text: "生活电器",
        curr: false
      }
    ]
  },
  changeTime: function (e) {
    let that = this;
    let id = e.currentTarget.dataset.id;
    let type = e.currentTarget.dataset.type;
    let times = this.data.times;
    for (let i = 0; i < times.length; i++) {
      if (times[i].id == id) {
        times[i].curr = true
      } else {
        times[i].curr = false
      }
    }
    that.setData({
      type: type,
      times: times
    });
  },
 
  goSearch() {
    wx.navigateTo({
      url: '/pages/search/search',
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