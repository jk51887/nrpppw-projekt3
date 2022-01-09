<template>
  <div class="hello">
    <h1 v-on:click="changeMsg">{{ msg }}</h1>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods:{
    changeMsg:function(){
      this.$emit('changeMsg','This is data from element')
    }
  }
 

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pad{
  margin: 20px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
