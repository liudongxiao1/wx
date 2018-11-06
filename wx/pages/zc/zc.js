// pages/zc/zc.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgpath: "",
    yhk: "",
    mmk: "",
    yzk: "",
    sjs: "",
    phnoenum:"",
    sexs:""


  },
  sc: function (event) {
    var that = this;
    wx.chooseImage({
      count: 1,
      sizeType: ("compressed"),
      sourceType: ["album", "camera"],
      success: function (res) {
        that.setData({ imgpath: res.tempFilePaths[0] })
        shangchuan(res.tempFilePaths[0])

      },
    })
    function shangchuan(path) {
      wx.showToast({
        icon: 'loading',
        title: '正在上传'
      })
      wx.uploadFile({
        url: app.globalData.url + '/lj',
        filePath: path,
        name: 'tpmz',
        header: { "content-type": "multipart/form-data" },
        success: function (res) {

          console.log(res.data)
        }
      })
    }
  },
  yhk: function (event) {
    var that = this;
    var aa = event.detail.value;
    console.log(aa)
    that.setData({ yhk: aa })
  },
  mmk: function (event) {
    var that = this;
    var bb = event.detail.value;
    console.log(bb)
    that.setData({ mmk: bb })
  },
  yzk: function (event) {
    var that = this;
    var cc = event.detail.value;
    console.log(cc)
    that.setData({ yzk: cc })
  },
  yzm: function (event) {
    var that = this;
    wx.request({
      url: app.globalData.url + '/resjs',
      header: { "content-type": "application/json" },
      success: function (res) {
        var s = res.data.sjs;
        that.setData({ sjs: s })
      }
    })


  },
  phone: function (event) {
    var that = this;
    var dd = event.detail.value;
    console.log(dd)
    that.setData({ phnoenum: dd })
  },
  sex: function (event) {
    var that = this;
    var ff = event.detail.value;
    console.log(ff)
    that.setData({ sexs: ff})
  },

  zc:function()
  {
     var that=this;
     wx.request({
       url: app.globalData.url+'/zc',
       data: { "yh": that.data.yhk, "sex": that.data.sexs, "phone": that.data.phnoenum, "pswd": that.data.mmk,},
       header:{"content-type":"application/json"},
       success:function(res)
       {
         wx.navigateTo({
           url: '../denglu/denglu',
         })
       }
     })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: app.globalData.url + '/sjs',
      header: { "content-type": "application/json" },
      success: function (res) {
        var s = res.data.sjs;
        that.setData({ sjs: s })
      }
    })

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