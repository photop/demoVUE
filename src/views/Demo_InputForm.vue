<template>
  <div id="demo6">
    <form  v-on:submit="submit">
      <div>
        <label for="first_name">Firstname</label>
        <!-- input use v-model is Id for connect to label --->
        <input type="text" name="first_name" v-model="applicant.first_name" />
      </div>
      <div>
        <label for="last_name">Firstname</label>
        <!-- input use v-model is Id for connect to label --->
        <input type="text" name="last_name" v-model="applicant.last_name" />
      </div>
      <div>
        <label for="sex">Male</label>
        <input type="radio" name="sex" value="male" v-model="applicant.sex" />

        <label for="sex">Female</label>
        <input type="radio" name="sex" value="female" v-model="applicant.sex" />
      </div>
      <div>
        <select name="courses" v-model="applicant.courses">
          <option value="react">React</option>
          <option value="angula">Angula</option>
          <option value="vuejs">VueJs</option>
        </select>
      </div>
      <div>
          <button type="button" @click="clear">Clear</button>
        <button type="submit"> Submit</button>
      </div>

      <div style="margin-top:16px;color:red;">Degub {{JSON.stringify(applicant)}}</div>
    </form>
  </div>
</template>

<script>
export default {
  name: "demo6",
  data() {
    return {
      applicant: {
        first_name: "",
        last_name: "",
        sex: "male",
        courses: "react"
      }
    };
  },
  methods: {
    submit(event){
        event.preventDefault();
        alert(JSON.stringify(this.applicant))
    },
    clear() {
      this.applicant = {
        first_name: "",
        last_name: "",
        sex: "male",
        courses: "react"
      };
    }
  }
};
</script>

<style>
</style>