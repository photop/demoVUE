<template>
<!-- Component Data sharing -->
<div id="topFooter">
    <span> {{title}}</span>
</div>
</template>

<script>
export default {
    name:"topFooter",
    mounted(){
        setInterval(() => {
           this.$emit("onClock",Date()) 
        }, 100);

    },
    props:[
        "title"
    ] 
}
</script>

<style scoped>
.footer{
    font-size: 50px;
    color: brown;
}

</style>