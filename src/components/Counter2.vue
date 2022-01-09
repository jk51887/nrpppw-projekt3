<template>
  <div>
    <h3>{{msg}}</h3>
    <button class="button" v-on:click="count++">You clicked me {{count}} times.</button>
  </div>
</template>


<script>


export default {
  name: 'Counter2',

  data: function () {
    return {
      count:0
    }
  },
  props: {msg:String}
  
  
}







</script>


<style scoped>

.button {
  background-color: white;
  color: black;
  border: 2px solid black; /* Green */
  padding: 5px 15px;
  margin: 1px 5px;
  border-radius: 12px;
  
}

.button:hover {
  background-color: lightblue;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}


</style>