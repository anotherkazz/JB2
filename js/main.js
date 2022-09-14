'use strict'

// ディレクティブとは、
// v-で始まる特別な属性のこと

// directivve（指令）という名前の通り、Vue.jsに
// 何らかの指示を行う仕組みのこと

// v-bind
// v-if
// v-show
// v-for
// v-on
// v-model

{

  // const vue = Vue.createApp({
  //   data: () => {
  //     return {
  //       message: 'Hello Vue.js!'
  //     }
  //   }
  // })
  // vue.mount('#basic-event')

  // 双方向データバインディング

  const vue = Vue.createApp({
    data: () => ({
      message: 'Hello Vue.js'
    }),
    
  })
  vue.mount('#basic-event')

  // アロー関数に()はいるのか？


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
