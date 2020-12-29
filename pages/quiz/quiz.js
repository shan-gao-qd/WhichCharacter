// pages/quiz/quiz.js
Page({
  data: {
    questions:[]
  },
  onLoad: function (options) {
  },
  onReady: function () {
  },
  onShow: function (options) {
    const questions = new wx.BaaS.TableObject('Questions')
    questions.find().then((results)=>{
      console.log('show page results', results);
      this.setData({
        questions:results.data.objects,
      })
      const questions=results.data.objects;
      let i=0;
      //variable used to contain controlled random number 
      let random='';
      // const spacing="<br>"
      //while all of array elements haven't been cycled thru
      console.log(questions.length);
      while (i<questions.length){
      //generate random num between 0 and arraylength-1
      random=Math.floor(Math.random()*questions.length)
      console.log(random)
      //if element hasn't been marked as "selected"
      if (questions[random]!="selected"){
      console.log(questions[random]);
      // document.write(contents[random]+spacing)
      //mark element as selected
      this.setData({
        question:questions[random],
      })
      questions[random]="selected"
      i++
    };
   
  }

      
    })
    
  },
})