// miniprogram/template/coupon/coupon.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    couponName: {
      type: String,
      value: '新人免费卷（全场通···'
    },
    couponValidity: {
      type: String,
      value: '2020-12-30'
    },
    couponMsg: {
      type: String,
      value: ''
    },
    discount: {
      type: String,
      value: '9.9',
      observer: function (newVal, oldVal){
        this.setData({
          discountStart:newVal.substring(0,1),
          discountEnd: newVal.substring(1),
        })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    messageFlag: false,
    discountStart:'',
    discountEnd:''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    showHidden(){
      this.setData({
        messageFlag:!this.data.messageFlag
      }) 
    }
  }
})