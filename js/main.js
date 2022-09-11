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
        message: 'Hello Vue.js!'  ,
        // ,区切りで複数のプロパティーが使える
        count: 99,
        // オブジェクトも入れられる
        // オブジェクトはプロパティの集合です。プロパティとは名前（キー）と値（バリュー）が対になったものです。
        user: {
          lastName: 'Nakamura',
          firstName: 'Yuta',
          prefecture: 'Tokyo'
        },
        colors: ['Red', 'Green', 'Blue']
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
