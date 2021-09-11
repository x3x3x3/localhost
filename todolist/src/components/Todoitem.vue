<template>
  <li>
    {{index}}---{{item}}
    <button @click="remove(index)">X</button>
  </li>
</template>

<script>
export default {
 props:['item','index'],
 methods:{
   remove(index){
     this.$emit('delete',this.index);
   }
 }
}
</script>

<style scoped>

</style>
