<template>
<div>
  <hr>
  
  <Counter2 msg="Komponenta bez stanja koja koristi properties"></Counter2>
  <br>

  <hr>
  <h3>Komponenta sa stanjem</h3>
  <Counter></Counter>
  <br>
  <br>
  <hr>

 
</div>
</template>


<script>
import Counter from '../components/Counter.vue'
import Counter2 from '../components/Counter2.vue'





export default {
  name: 'Component',
  data()
  {
    return{
    }
  },
  components: {
    Counter,Counter2
  },

}
</script>