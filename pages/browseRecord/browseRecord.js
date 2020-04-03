// pages/browseRecord/browseRecord.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nodata: true,  //没有数据
    selectAllStatus: true, // 全选状态，默认全选
    totalPrice: 0.00, // 总价，初始为0
    cartlist: [{
      tag: 'ELAN_',
      title: '连帽系腰带鹅绒羽绒服大毛领手工刺连帽系腰带鹅绒羽绒服大毛领手工刺',
      num: 4,
      price: 199,
      selected: true
    }, {
      title: '连帽系腰带鹅绒羽绒服大毛领手工刺连帽系腰带鹅绒羽绒服大毛领手工刺',
      num: 1,
      price: 100,
      selected: true
    }, {
      title: '连帽系腰带鹅绒羽绒服大毛领手工刺连帽系腰带鹅绒羽绒服大毛领手工刺',
      num: 1,
      price: 200,
      selected: true
    }],
    selectAll: false,
    imgUrl: getApp().globalData.imgUrl,
    edit: 1
  },
  onLoad: function (options) {
    let _this = this;
  },

  onEdit(e) {
    this.setData({
      edit: e.target.dataset.index
    })
  },
  
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  //单选事件
  selectList(e) {
    let that = this;
    // 获取选中的radio索引
    let index = e.currentTarget.dataset.index;
    // 获取到商品列表数据
    let list = that.data.cartlist;
    // 默认全选
    that.data.selectAllStatus = true;
    // 循环数组数据，判断----选中/未选中[selected]
    list[index].selected = !list[index].selected;
    // 如果数组数据全部为selected[true],全选
    for (let i = list.length - 1; i >= 0; i--) {
      if (!list[i].selected) {
        that.data.selectAllStatus = false;
        break;
      }
    }
    // 重新渲染数据
    that.setData({
      cartlist: list,
      selectAllStatus: that.data.selectAllStatus,
    })
   
  },
  //全选事件
  selectAll(e) {
    let that = this;
    // 获取选中的radio索引
    let index = e.currentTarget.dataset.index;
    // 获取到商品列表数据
    let list = that.data.cartlist;
    // 默认全选
    that.data.selectAllStatus = !that.data.selectAllStatus;

    // 如果数组数据全部为selected[true],全选
    for (let i = list.length - 1; i >= 0; i--) {
      list[i].selected = that.data.selectAllStatus
    }
    // 重新渲染数据
    that.setData({
      cartlist: list,
      selectAllStatus: that.data.selectAllStatus,
    })
    
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

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  }
})