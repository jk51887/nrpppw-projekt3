<template>
  <div>
    <hr>
    <label name="user">Insert name</label>
    <input class="padding" name="user" type="text" v-model="user">

    <h2>{{"Welcome "+user}}</h2>
  </div>
</template>


<script>
export default {
  name: 'Two-WayBind',
  data()
  {
    return{
      user:"anonymous"
    }
  },
}
</script>


<style>
.padding{
  margin:20px
}
</style>