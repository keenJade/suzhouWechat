Component({
  data: {
    selected: 0,
    color: "#666666",
    selectedColor: "#313131",
    list: [{
      pagePath: "pages/index/index",
      iconPath: "/images/tabbar_icon01.png",
      selectedIconPath: "/images/tabbar_icon01_hl.png",
      text: "首页"
    }, {
      pagePath: "pages/classify/classify",
      iconPath: "/images/tabbar_icon02.png",
        selectedIconPath: "/images/tabbar_icon01_hl.png",
      text: "分类"
    }]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({ url })
      this.setData({
        selected: data.index
      })
    }
  }
})