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
        name: '圣诞姜饼人拿铁',
        EnglishName: 'Christmas Gingerbread Latte',
        specifications: '大/默认奶油/热',
        price: '27'
      }]
    },
      {
        title: '大师咖啡',
        id:'dashi',
        subTitle: 'WBC (世界咖啡师大赛) 冠军团队拼配',
        commodity: [{
          imgUrl: '../../images/coffee/HazelnutLatte.jpg',
          name: '拿铁',
          EnglishName: 'Latte',
          specifications: '大/单糖/热',
          price: '24'
        },
        {
          imgUrl: '../../images/coffee/HazelnutLatte.jpg',
          name: '香草拿铁',
          EnglishName: 'Vanilla Latte',
          specifications: '大/单糖/热',
          price: '27'
        }]
      },
      {
        title: '零度拿铁',
        id:'zero',
        subTitle: '不含咖啡的拿铁',
        commodity: [{
          imgUrl: '../../images/coffee/HazelnutLatte.jpg',
          name: '抹茶拿铁',
          EnglishName: 'Match Latte',
          specifications: '大/热',
          price: '27'
        }
        ]
      }
      ,
      {
        title: '瑞纳冰',
        id: 'nabing',
        subTitle: '瑞纳冰',
        commodity: [{
          imgUrl: '../../images/coffee/HazelnutLatte.jpg',
          name: '小雪荔枝瑞纳冰',
          EnglishName: 'Lychee Exfreezo',
          specifications: '大',
          price: '27'
        },
        {
          imgUrl: '../../images/coffee/HazelnutLatte.jpg',
          name: '卡布奇诺瑞纳冰',
          EnglishName: 'Cappuccino Exfreezo',
          specifications: '大/默认奶油',
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