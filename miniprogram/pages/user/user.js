// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user: {
      name: '宇少'
    },
    menu: [{
        iconUrl: '../../images/icon/gps.png',
        text: '收货地址',
        to: 'toUserAddress'
      },
      {
        iconUrl: '../../images/icon/coffee.png',
        text: '咖啡钱包',
        to: 'toCoffeeWallet'
      },
      {
        iconUrl: '../../images/icon/coupon.png',
        text: '优惠卷',
        to: 'toCoupon'
      },
      {
        iconUrl: '../../images/icon/invoice.png',
        text: '发票管理',
        to: 'toInvoice'
      },
      {
        iconUrl: '../../images/icon/service.png',
        text: '客户服务',
        to: 'toService'
      }
    ]
  },
  toUserInfo() {
    wx.navigateTo({
      url: '../userInfo/userInfo'
    })
  },
  toUserAddress() {
    wx.navigateTo({
      url: '../address/address'
    })
  },
  toCoffeeWallet(){
    wx.navigateTo({
      url: '../coffeeWallet/coffeeWallet'
    })
  },
  toCoupon() {
    wx.navigateTo({
      url: '../coupon/coupon'
    })
  },
  toInvoice(){

  },
  toService(){

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})