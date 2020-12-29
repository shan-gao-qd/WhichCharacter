Page({
  data: {
    userInfo: {},
  },

onLoad: function (options) {
  
},

ToQuiz: function(){
wx.navigateTo({
  url: '/pages/quiz/quiz?questionId=',
})
}

})