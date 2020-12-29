//app.js
  App({
    onLaunch: function() {
      wx.BaaS = requirePlugin('sdkPlugin')
      wx.BaaS.wxExtend(wx.login,
       wx.getUserInfo,
       wx.requestPayment)
      let clientID = '3cf86e5de040902096c7'  
      wx.BaaS.init(clientID)
    }
  })