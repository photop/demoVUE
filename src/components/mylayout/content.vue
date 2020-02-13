<template>
  <div id="topContent" class="content-wrapper">
    <!--Check route view -->
    <router-view></router-view>
    
  </div>
</template>

<script>
export default {
  name: "topContent"
};
</script>

<style scoped>
.content-wrapper{
    margin: 24;
    padding: 24;
    border-width: 1px;
    border-color: red;
    border-style: dashed;
}
</style>
