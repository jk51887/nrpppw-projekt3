<template>
 <button class="button" v-on:click="increment">You clicked me {{count}} times.</button>

</template>


<script>
import store from '../store';

export default {
  name: 'Counter',
  store:store,

  data: function () {
    return {
   
    }
  },
  methods: {
    increment() {
      this.$store.commit('increment')
      console.log(this.$store.state.count)
  } 
},
  computed:{
    count(){
      return store.state.count
    }
  }
  
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