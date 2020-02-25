const db = wx.cloud.database()

Page({
  data: {
    value: ''
  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '添加分类'
    })
  },
  handleInput: function (e) {
    let value = e.detail.value.trim()
    this.setData({
      value
    })
  },
    // 上传分类名称
  handleSubmit: function() {
    let value = this.data.value
    if(!value || value == '') {
      wx.showToast({
        title: '请输入内容',
        icon: 'none'
      })
      return
    }
    db.collection('classify').add({
      data: { value },
      success: (res) => {
        let value = ''
        this.setData({ value })
        wx.navigateTo({
          url: '/pages/classify/classify',
        })
      },
      fail: err => {
        wx.showToast({
          title: '添加分类失败',
          icon: 'none'
        })
      }
    })
  }
})