// pages/buyVIP/buyVIP.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src1: "/images/up-img01.png",
    src2:"/images/up-img02.png",

  },
 
  gotoApply: function (e) {

  },
  // 传图

  bindChooiceProduct1: function () {
    let that = this;
    let src=that.data.src
    wx.chooseImage({
      sizeType: ['750', '500'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths
        console.log(tempFilePaths)
        that.setData({
          src1: tempFilePaths
        })
      },
      file(res) {
        console.log('上传失败')
      }
      
    })
  
  },
  bindChooiceProduct2: function () {
    let that = this;
    wx.chooseImage({
      sizeType: ['750', '500'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths
        that.setData({
          src2: tempFilePaths
        })
      },
      file(res) {
        console.log('上传失败')
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.gotoApply()

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