<template>
<div id="demo12">
    <h1>Reference to DOM </h1>
    <h1 ref="title" style="font-size:30;color:red;">Waiting for change by ref</h1>
    <input 
    ref="input1"
    type="text"
    placeholder="this will be focused automatically">

</div>
  
</template>

<script>
export default {
    name:"demo12",
    mounted() {
        this.$refs['title'].textContent =" Change by TOP";
        this.$refs['input1'].focus();
        this.$refs['input1'].value =" Fix value from code"
    },

}
</script>

<style>

</style>