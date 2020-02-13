<template>
  <div id="metEvent">
      <h1>method and Event</h1>
      <button v-on:click ="clickMe">Click Here</button>
      <button v-on:click ="clickMe2('Welcome to Intro By Top')">Click Again</button>
      <button @click ="clickMe2('Short Form Code')">Click Again2</button>
      <!-- call method -->
      <h2>{{getTimeStamp}}</h2>
  </div>
</template>

<script>
export default {
    name: "metEvent",
    methods:{
        clickMe(){
            alert("Click Me")
        },
        clickMe2(msg){
            alert(msg)
        },
        getTimeStamp(){
            return Date()
        }
    }

}
</script>

<style>

</style>