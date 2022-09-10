'use strict'



{

  // const vue = Vue.createApp({
  //   data: () => {
  //     return {
  //       message: 'Hello Vue.js!'
  //     }
  //   }
  // })
  // vue.mount('#basic-event')

  const vue = Vue.createApp({
    data: function() {
      return {
        message: 'Hello Vue.js!'
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
  // メソッドチェーン　こういう書き方もある。関数式であるかどうかは関係ない
////
}

// リアクティブとは、すべての要素に対して反応的に作成すること
