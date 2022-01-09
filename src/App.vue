<template>

  <div class="row">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Hello"/>
      <table class="center">
        <tr>

          <th>
            <div class="nav">
              <router-link to="/event" class="mr-3">Event</router-link>
            </div>
          </th>

          <th>
            <div class="nav">
              <router-link to="/component" class="mr-3">Component</router-link>
            </div>
          </th>

          <th>
            <div class="nav">
              <router-link to="/lifecyclehook" class="mr-3">Lifecycle hook</router-link>
            </div>
          </th> 
          

          <th>
            <div class="nav">
              <router-link to="/twowaybind" class="mr-3">Two-Way Binding</router-link>
            </div>
          </th>

          <th>
            <div class="nav">
              <router-link to="/method" class="mr-3">Method/Computed</router-link>
            </div>
          </th>

        </tr>
      </table>
      <router-view />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
,
  data(){
    return{
      msg :"ime!"
    }
  },
  methods: {
    updateMsg:function(newMsg){
      this.msg = newMsg;

    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.flex-container {
  display: flex;
  background-color: #f1f1f1;
}

.flex-container > div {
  background-color: DodgerBlue;
  color: white;
  width: 100px;
  margin: 10px;
  text-align: center;
  line-height: 75px;
  font-size: 30px;
}

div.nav a.router-link-exact-active {
  background-color:lightblue;
}

.center {
  margin: auto;
  width: 50%;
  border: 2px solid black;
  padding: 10px;
}
</style>
