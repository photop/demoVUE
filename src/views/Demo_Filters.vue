<template>
<div id="demo13">
    <h1>Filter</h1>
    <h2>{{ 1234 | currency("TB")}}</h2>
    <h2>{{ 20000000000 | bytes }}</h2>
    <h2>{{ "helo world small"| capitalize({onlyFirstLetter:true}) }}</h2>
    <h2>{{ [1,2,3,4] | reverseArray }}</h2>
</div>
  
</template>

<script>

export default {
    name:"demo13",
    /** lacal create filter */
    filters:{
        reverseArray(value){
            return value.slice().reverse();
        }
    }

}
</script>

<style>

</style>