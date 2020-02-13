<template>
  <div id="demo5">
      <img v-bind:src='imgUrl' v-bind:height="height">
      <br/>
    
      <a v-bind:href="link">My Webiste</a>
      <br/>
      <a :href="link">My Webiste    (short-Link)</a>

      <br>
      <!-- binding class -->
   <div :class="errorClass">Show Error content</div>
   <div :class="[errorClass,inportantClass]">Show Error content All </div>
   <div :class="[false ? errorClass: '' ,importantClass]">Check and Show Error content</div>
   <div :style="{color:color,fontSize:fontSize}">test Style Color</div>
      

</div>
</template>

<script>
export default {
name:"demo5",
data(){
    return{
        imgUrl: "http://www.bridewholesale.com/wp-content/uploads/2020/02/line_2159680973923780364876.jpg",
        height: 150,
        link: "http://www.bridewholesale.com",
        errorClass: "errorDisplay",
        importantClass: "ImportantDisplay",
        color: "Green",
        fontSize: "30px"

    }
}
}
</script>

<style>

.errorDisplay{
    background-color: red;
    color: black;
}
.inportantDisplay{
    font-weight: 300;
}
</style>