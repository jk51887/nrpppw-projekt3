<template>
  <div>
    <hr>
    <h2>Method</h2>
    <div id="example">
      <button class="button" v-on:click="greet">Method example!</button>
  </div>
  <hr>
    <h2>Computed</h2>
    <p>a = {{a}}</p>
    <p>b = {{b}}</p>
    <p>c = 50</p>
    <p>a + c = {{addToA}}</p>
    <p>b + c = {{addToB}}</p>
    

    <button class="button" v-on:click="a++">a+1</button>
    <button class="button" v-on:click="b++">b+1</button>
    <p>Poziva se samo ona funkcija kod koje se mijenja varijabla. **Pogledati ispis u console**</p>

  </div>
</template>


<script>
export default {

  methods: {
    greet: function () {
     
      alert('Hello !')

    }
  }
  ,data(){
    return{
      a: 21,
      b: 10
    }
  },

  computed: {
    addToA: function () {
        console.log("A has changed");
        return this.a + 50 ; 
        
    },
    addToB: function () {
      console.log("B has changed");
        return this.b +50 ; 
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