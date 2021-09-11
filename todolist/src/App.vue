<template>
  <div id="app">
    <input type="text" v-model="message" @keyup.enter="add">
    {{message}}
    <ul>
      <li v-for="(item,index) in list" :key="item.id" :item="item" :index="index">
         {{index}}---{{item}} 
         <button @click="remove(index)">X</button>
      </li>
    </ul>
    <hr>
    <ul>
      <todo-item  v-for="(item,index) in list" :key="item.id" :item="item" :index="index" @delete="remove">
      </todo-item>
    </ul>
  </div>
</template>

<script>
import Todoitem from './components/Todoitem.vue';

export default {
  components: { 
      'todo-item' : Todoitem
   },
  name: 'App',
  data:function(){
    return {
      message:'',
      list:['aa','bb']
    }
  },
  methods:{
    add(){
      this.list.push(this.message);
      this.message=[];
    },
    remove(index){
      this.list.splice(index,1);
    }
  }
}
</script>

<style>

</style>
