// pages/grzx/grzx.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    yk:"",
    ss:"",
    username: "",
    imgfacepath: {},
    flag: false
   

  },
ss:function(event)
{
  var that=this;
  var aa=event.data.detail;
  that.setData({"ss":aa})


},
  phonecall: function (event) {
    console.log(event.currentTarget.dataset.aa)
    wx.makePhoneCall({
      phoneNumber: event.currentTarget.dataset.aa,
    })




  },
  nameInput: function (event) {
    console.log(event);

    console.log(event.detail.value);

    //文本输入框获取的值
    var name = event.detail.value;

    var that = this;

    //设置数据
    that.setData({ username: name });


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    var name1=options.sname;
    that.setData({"yk":name1})

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