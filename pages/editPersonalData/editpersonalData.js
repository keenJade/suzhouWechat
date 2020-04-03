// pages/editPersonalData/editpersonalData.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgurl:'/images/goods01.png',
    index: 0,
    timeDate: '1998.10.30',
    region: ['广东省', '广州市', '海珠区'],
    list: [{ sex: "男" },{ sex: "女", checked: 'true' },
    ],
    active1: '',
    active2: '',
    type1: 1,
  },
 
  // 选择时间
  bindDateChange(e) {
    let arr = e.detail.value.split('-')
    let date = arr[0] + '.' + arr[1] + '.' + arr[2]
    this.setData({
      timeDate: date
    })
  },
  // 选择地址
  bindRegionChange(e) {
    this.setData({
      region: e.detail.value
    })
  },
  /**
* 选择服务类型
*/
  onType(e) {

    this.setData({
      type1: e.currentTarget.dataset.index
    })
  },
  // 点击修改头像
  bindChooiceProduct1: function () {
    let that = this;
    let imgurl = that.data.imgurl
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths
        that.setData({
          imgurl: tempFilePaths
        })
      }
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