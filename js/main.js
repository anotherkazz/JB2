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
      },
      isShowEditForm: false     
      
     
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
      },
      deleteTodo(index) {
        this.todos.splice(index, 1)
      },
      editTodo(id) {
        this.editedTodo = { ...this.todos.find((todo) => todo.id === id) }
        this.isShowEditForm = true
        
      },
      // 問題3. 編集フォームを非表示するように実装しよう
      updateTodo() {
        this.isShowEditForm = false
      }            
      

    }  
  })
 
  vue.mount('#basic-event')

}
