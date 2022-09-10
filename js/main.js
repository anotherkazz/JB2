'use strict'



{

  const vue = Vue.createApp({
    data: () => {
      return {
        counter: false,
        isActive: true,
        items: [{ message: 'Foo' ,isShow: true}, { message: 'Bar' , isShow: true}],
        // オブジェクト　２つ　properties　２つ
        message: ''
      }
    }
  })
  vue.mount('#basic-event')

// thisは利用できない

  // Vue.createApp({
  //   data() {
  //     return {
  //       counter: 0
  //     }
  //   }
  // }).mount('#basic-event')
////
}

