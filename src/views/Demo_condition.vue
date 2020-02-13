<template>
<div id="demo9">
    <h1> Condition </h1>
    <div v-if="type === 'A'"> I am A </div>
    <div v-else-if="type === 'B'"> I am B </div>
    <div v-else-if="type === 'C'"> I am C </div>
    <div v-else>  I an not A/B/C </div>
    <div v-if="isShowBlink"> Blink 1</div>
    <div v-else> Blink 2</div> 
    <!-- v-show check for condition is true -->
    <div v-show="isShowBlink"> Blink Show when Condition is true</div>

</div>
  
</template>

<script>
export default {
    name: "demo9",
    mounted(){
        setInterval(() => {
           this.isShowBlink = !this.isShowBlink
        }, 1000);
    },
    data(){
        return{
             type: "A",
             isShowBlink: true
        }
    }

}
</script>

<style>

</style>