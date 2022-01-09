<template>
  <div>
    <hr>
    <h2>Lifecycle hook</h2>

  </div>
</template>


<script>
export default {
  name: 'LifecycleHook',
  data()
  {
    return{
    }
  },

  beforeCreate(){
    alert("Before create hook");
  }
 

}
</script>