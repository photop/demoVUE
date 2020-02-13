<template>
  <div id="demo7">
    <form v-on:submit.prevent="submit">
      <div>
        <label for="first_name">Firstname</label>
        <!-- input use v-model is Id for connect to label --->
        <input type="text" name="first_name" v-model.number="applicant.first_name" />
      </div>
      <div>
        <label for="last_name">Firstname</label>
        <!-- input use v-model is Id for connect to label --->
        <input type="text" name="last_name" v-model.lazy="applicant.last_name" />
      </div>
      <div>
        <label for="sex">Male</label>
        <input type="radio" name="sex" value="male" v-model="applicant.sex" />

        <label for="sex">Female</label>
        <input type="radio" name="sex" value="female" v-model="applicant.sex" />
      </div>
      <div>
        <label for="age">AGE</label>
        <input type="number" name="age" v-model.number="applicant.age" />
      </div>
      <div>
        <select name="courses" v-model="applicant.courses">
          <option value="react">React</option>
          <option value="angula">Angula</option>
          <option value="vuejs">VueJs</option>
        </select>
      </div>
      <div>
          <!-- เพิ่ม option key -->
        <button type="button" @click.exact="clear" @click.alt="useDefault">Clear</button>
        <button type="submit">Submit</button>
      </div>

      <div style="margin-top:16px;color:red;">Degub {{JSON.stringify(applicant)}}</div>
    </form>
  </div>
</template>

<script>
export default {
  name: "demo7",
  data() {
    return {
      applicant: {
        first_name: "",
        last_name: "",
        sex: "male",
        courses: "react",
        age: 0
      }
    };
  },
  methods: {
    submit() {
      // Call prevent form submit
      //event.preventDefault();
      alert(JSON.stringify(this.applicant));
    },
    clear() {
      this.applicant = {
        first_name: "",
        last_name: "",
        sex: "male",
        courses: "react",
        age: 0
      };
    },
    useDefault() {
      // Set Default value
      this.applicant = {
        first_name: "UNKNOWN",
        last_name: "UNKNOWN",
        sex: "male",
        courses: "react",
        age: 0
      };
    }
  }
};
</script>

<style>
</style>