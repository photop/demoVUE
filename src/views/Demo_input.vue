<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-link to="/">OK</router-link>
    </div>
    <router-view/>
  </div>
</template>
<template>
<div>
  <!-- interpolation-->
  <h1>{{title}}</h1>
<h2> {{count}}</h2>
  <button @click = "onClickAdd">Add</button>
</div>
</template>

<script>
export default {
  name:"app",
  data() {
    return {
      title:"I am TOP test Call Fuction from script",
      count: 0
    }
  },methods:{
    onClickAdd(){
      this.count=  this.count +1
    }
    
  }

}
</script>

<style>

</style>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
