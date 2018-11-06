// pages/denglu/denglu.js
const app=getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    yhk:"",
    mmk:"",
    yzk:"",
    sjs:"",
    result:"",
    shuchu:""

  },
yhk:function(event)
{
  var that=this;
  var aa=event.detail.value;
  console.log(aa)
  that.setData({yhk:aa})
},
mmk:function(event)
{
   var that=this;
   var bb=event.detail.value;
   console.log(bb)
   that.setData({mmk:bb})
},
  yzk: function (event) {
    var that = this;
    var cc = event.detail.value;
    console.log(cc)
    that.setData({ yzk:cc })
  },
  yzm:function(event)
  {
    var that=this;
    wx.request({
      url: app.globalData.url +'/resjs',
      header: { "content-type": "application/json" },
      success: function (res) {
        var s = res.data.sjs;
        that.setData({ sjs: s })
      }
    })


  },
  dl:function(event)
  {
    var that=this;
    var inputCode=that.data.yzk;
    var codeValue=that.data.sjs;
    
    if (inputCode == codeValue) {
      console.log("提交登录验证");

      wx.request({
        url: app.globalData.url + '/login',
        data: {
          "username": that.data.yhk,
          "userpwd": that.data.mmk
        },
        header: { "content-type": "application/json" },

        success: function (resp) {

          console.log(resp.data);

          var result = resp.data.yhh
          if (result == "None") {

            that.setData({ shuchu: "没有这个学生"});


          }
          else if (result == "3") {
            that.setData({ shuchu: "您的状态不正常" });
          }
           else {

            wx.navigateTo({
              url: '../grzx/grzx?sname=' + that.data.yhk ,
            })

          }

        }

      })
    }
    else {
      that.setData({ shuchu: "验证码输入不正确，请检查" });
    }

  },
  zc:function(event)
  {
    wx.navigateTo({
      url: '../zc/zc',
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    wx.request({
      url:app.globalData.url+'/sjs',
      header:{"content-type":"application/json"},
      success:function(res)
      {
            var s=res.data.sjs;
            that.setData({sjs:s})
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