<template>
  <div id="header">
    <ul>
      <li><router-link to="/">HOME</router-link></li>
      <li><router-link to="/demointro">demointro</router-link></li>
      <li><router-link to="/demoinput">Demo Input</router-link></li>
      <li><router-link to="/metEvent">Method and Event</router-link></li>
      <li><router-link to="/demo3">Demo Data</router-link></li>
      <li><router-link to="/demo4">Demo Computed</router-link></li>
      <li><router-link to="/demo5">Demo Binding</router-link></li>
      <li><router-link to="/demo6">Demo Input</router-link></li>
       <li><router-link to="/demo7">Demo Trim Lazy</router-link></li>
      <li><router-link to="/demo8">Demo Time</router-link></li>
       <li><router-link to="/myclock">Clock</router-link></li>
       <li><router-link to="/demo9">Condition</router-link></li>
      <li><router-link to="/about">About</router-link></li>
    </ul>

    <ul>
      <li><router-link to="/demo10">Loop</router-link></li>
      <li><router-link to="/demo11">Interval</router-link></li>
      <li><router-link to="/demo12">DOM</router-link></li>
      <li><router-link to="/demo13">Filter Format</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
    /** Component Name */
  name: "topHeader"
};
</script>

<style scoped>

 ul{
   margin: 0;
   padding: 0;
 }
li{
   display: inline;
    margin-right: 8px;
}
</style>>
