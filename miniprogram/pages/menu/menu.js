// pages/menu/menu.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    titleSeledt:'renqi',
    coffee:[{
      title:'人气top',
      id:'renqi',
      subTitle:'人气排行最高的',
      commodity:[{
        imgUrl:'../../images/coffee/HazelnutLatte.jpg',
        name:'榛果拿铁',
        EnglishName:'Hazelnut Latte',
        specifications:'大/单糖/热',
        price:'27'
      },
      {
        imgUrl: '../../images/coffee/HazelnutLatte.jpg',
        name: '榛果拿铁',
        EnglishName: 'Hazelnut Latte',
        specifications: '大/单糖/热',
        price: '27'
      }]
    },
      {
        title: '人气top',
        id:'qiren',
        subTitle: 'aa',
        commodity: [{
          imgUrl: '../../images/coffee/HazelnutLatte.jpg',
          name: '榛果拿铁',
          EnglishName: 'Hazelnut Latte',
          specifications: '大/单糖/热',
          price: '27'
        },
        {
          imgUrl: '../../images/coffee/HazelnutLatte.jpg',
          name: '榛果拿铁',
          EnglishName: 'Hazelnut Latte',
          specifications: '大/单糖/热',
          price: '27'
        }]
      },
      {
        title: '人气top',
        id:'qisini',
        subTitle: 'aa',
        commodity: [{
          imgUrl: '../../images/coffee/HazelnutLatte.jpg',
          name: '榛果拿铁',
          EnglishName: 'Hazelnut Latte',
          specifications: '大/单糖/热',
          price: '27'
        },
        {
          imgUrl: '../../images/coffee/HazelnutLatte.jpg',
          name: '榛果拿铁',
          EnglishName: 'Hazelnut Latte',
          specifications: '大/单糖/热',
          price: '27'
        }]
      }
      ,
      {
        title: '人气top',
        id: 'qisinia',
        subTitle: 'aa',
        commodity: [{
          imgUrl: '../../images/coffee/HazelnutLatte.jpg',
          name: '榛果拿铁',
          EnglishName: 'Hazelnut Latte',
          specifications: '大/单糖/热',
          price: '27'
        },
        {
          imgUrl: '../../images/coffee/HazelnutLatte.jpg',
          name: '榛果拿铁',
          EnglishName: 'Hazelnut Latte',
          specifications: '大/单糖/热',
          price: '27'
        }]
      }],
    
  },
  toTabBar(e){
    let titleSeledt = e.currentTarget.dataset.title;
    this.setData({
      titleSeledt: titleSeledt
    })
    console.log(e);
  },
  scroll(e){
    const query = wx.createSelectorQuery();
    console.log(e);
    query.select('.goods').scrollOffset().exec(res=>{
      console.log(res)
    });
   
  },
  rolling_bottom: function () {

    var that = this
    var tab_con = wx.createSelectorQuery().select('#tab-con')
    tab_con.boundingClientRect(function (res) {
      let view_height = res.height
      wx.getSystemInfo({
        success: function (res) {
          let scroll_view_height = (res.windowHeight * 0.93).toFixed(0)
          if (view_height >= scroll_view_height) {
            let height = view_height - scroll_view_height
            that.setData({
              top: height
            });
          }
        }
      })

    }).exec(
    )
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