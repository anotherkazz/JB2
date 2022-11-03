'use strict'


{

 

  const vue = Vue.createApp({
    data: () => ({
      statusItems: ['未着手', '着手', '完了'], 
      filterItems: ['すべて表示', '未着手','着手', '完了'], 
      sortItems: ['昇順', '降順'] ,
      todos: [
        {
          title: 'test',
          status: '未着手',
          id: 1
        },
        {
          title: 'test2',
          status: '着手',
          id: 2
        },
        {
          title: 'test3',
          status: '完了',
          id: 3
        }
      ],
      newTodo: {
        title: '',
        status: '未着手',
        id: 4
      }
      
     
    }),
    // ボダンが押されたときのイベントハンドラ　メソッド
    methods: {
      addTodo() {
        if (this.newTodo.title) {
          this.todos.push({ ...this.newTodo })
          this.newTodo.title = ''
          this.newTodo.status = '未着手'
          this.newTodo.id++
        }
      }
      

    }  
  })
 
  vue.mount('#basic-event')

}
