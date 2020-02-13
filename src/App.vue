<template>

  <div id="app">
    <!-- call topHeder page -->
  <topHeader/>

  <!-- call content page -->
  <topContent/>



  <!-- call ul /li -->
  <!--
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
      <li><router-link to="/about">About</router-link></li>

    </ul>
    -->
    

    <!-- call footer page -->
    <div><topFooter  @onClock="onClock" title="This is my Title By TOP  #send data from index page"/></div>
    <span>{{time}}</span>  
  </div>

</template>

<script>
/** Load component */
/** import header from "@/components/layout/header.vue" */
import topHeader from "@/components/mylayout/header.vue"
import topFooter from "@/components/mylayout/footer.vue"
import topContent from "@/components/mylayout/content.vue"
import moment from "moment"

export default {
  name: "app",
  methods:{
    onClock(timenow){
      //this.time = timenowi
      this.time = moment(timenow).format('YYYY/MM/DD hh:mm:ss')

    }
  },
  components:{
    topHeader,
    topFooter,
    topContent
  },
  data(){
    return{
      time:""
    }
  }


};
</script>

<style>

</style>
