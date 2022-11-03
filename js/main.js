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
      ]
     
    }),
    // ボダンが押されたときのイベントハンドラ　メソッド
    methods: {
      
      
      
    
 

 }  
  })
 
  vue.mount('#basic-event')

}S 
