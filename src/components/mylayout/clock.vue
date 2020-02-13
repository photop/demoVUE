<template>
  <div id="myclock">
    <slot>Now :</slot>
    {{mytime}}


  </div>
 
</template>

<script>
import moment from "moment";
export default {
  name: "myclock",
  data() {
    return {
      mytime: ""
    };
  },
  mounted() {
    setInterval(() => {
      this.mytime = moment(Date()).format("MM/DD/YYYY hh:mm:ss");
      //alert(this.mytime);
      //this.time = Date();
    }, 100);
  }
};
</script>

<style>
</style>