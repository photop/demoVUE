<template>
<div id="demo11">
    <h1> setInterval time for Do something </h1>
    <div>{{count}} </div>
    {{Math.random()}}

    <h1> https://youtu.be/ay0ho2PiieA</h1>
</div>
  
</template>

<script>
export default {
    name: "demo11",
    mounted() {
        setInterval(()=>{
            this.count++
        },1000);
    },
    data(){
        return{
            count :0 //local state
        }
    }

}
</script>

<style>

</style>