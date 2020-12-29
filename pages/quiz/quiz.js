// pages/quiz/quiz.js
const app = getApp()
Page({
  data: {
    questions:[],
    question:"",
    questionsc:[],
  },
  onLoad: function (options) {
  },
  onReady: function () {
  },
  onShow: function (options) {
    const questions = new wx.BaaS.TableObject('Questions')
    questions.find().then((results)=>{
      console.log('show page results', results);
      app.globalData.questions=results.data.objects;
      console.log('app.globalData.questions',app.globalData.questions)
      this.setData({
        questions:results.data.objects,
      })
      const questionsc=results.data.objects;
      let i=0;
      //variable used to contain controlled random number 
      let random='';
      // const spacing="<br>"
      //while all of array elements haven't been cycled thru
      console.log(questionsc.length);
      if (i<questionsc.length){
      //generate random num between 0 and arraylength-1
      random=Math.floor(Math.random()*questionsc.length)
      console.log(random)
      //if element hasn't been marked as "selected"
      if (questionsc[random]!="selected"){
      console.log(questionsc[random]);
      // document.write(contents[random]+spacing)
      //mark element as selected
      this.setData({
        question:questionsc[random],
      })
      questionsc[random]="selected"
      i++
    };
   
  }

      
    })
    
  },
})