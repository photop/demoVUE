<template>
  <div>
    <h1>v-model</h1>
    <!-- MVVM -->
    <input v-model="message" type="tex" placeholder="Enter you message" />
    <div>{{ message }}</div>
    <button @click="message = ''">Test</button>

    <!-- create link with router-link -->
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
      <li><router-link to="/about">About</router-link></li>
    </ul>
    <!--Check route view -->
    <router-view></router-view>
  </div>
</template>
<script>
/** Load component */
/** import header from "@/components/layout/header.vue" */



export default {
  name: "app",

  data() {
    return {
      message: ""
    };
  },
  methods: {
    onClick() {
      this.message = this.message = "";
    }
  }
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
</style>
