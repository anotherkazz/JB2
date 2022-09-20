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

  // 双方向データバインディング

  const vue = Vue.createApp({
    data: () => ({
      newItem: '',
      todos: []
    }),
    // ボダンが押されたときのイベントハンドラ　メソッド
    methods: {
      addItem: function(event) {
      // console.log('Clicked!')
      if(this.newItem === '') return
      // 入力が空文字だったらそこで、処理を中断する
      let todo = {
        item: this.newItem,
        isDone: false
      
      }
      this.todos.push(todo)
      this.newItem = ''
      // ボタンを押した後、テキストをクリアさせる。
    }
  }
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
