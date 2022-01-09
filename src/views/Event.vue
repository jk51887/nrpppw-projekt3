<template>
<div>
  <h1>{{event}}</h1>
    <HelloWorld  v-bind:msg="msg" v-on:changeMsg="updateMsg($event)"/>

</div>
</template>


<script>



import HelloWorld from '../components/HelloWorld.vue';



export default {
  name: 'Event',
  data(){
    return{
      msg :"Press me to get data from child element!",
      event:""
    }
  },
  components:{
    HelloWorld
  },
  methods: {
    updateMsg:function(newMsg){
      this.msg = newMsg;
      this.event = 'I got:'
    }
  }

}
</script>