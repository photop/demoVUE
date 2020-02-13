<template>
  <div id="demo10">
    <hr1>For Loop and Add/Remove with v-model</hr1>
    <ul>
      <!-- code for dynamic -->
      <li v-for="(item,index) in ['AAA','BBB','CCC','DDD']" :key="index">{{item}}</li>
    </ul>
    <ul>
      <!-- code for fix -->
      <li>OSX</li>
      <li>WINDOWS</li>
    </ul>
    <ul>
      <!-- show Array -->
      <li v-for="(item,index) in mArray" :key="index">{{item}}</li>
    </ul>
    <ul>
      <!-- show Array Object -->
      <li v-for="(item,index) in mArrayObj" :key="index">{{item.name}},{{item.sex}}</li>
    </ul>
    <ul>
      <!-- show Add /remove Dynamic-->
      <input type="text" placeholder="title" v-model="course.title" />
      <br />
      <input type="number" placeholder="price" v-model="course.price " />
      <br />
      <button @click="onAdd">Add</button>
      <!-- Display when Click Add and Remove with index-->
      <li v-for="(course,index) in myCourseDynamic" :key="index">{{course.title}},{{course.price}}
          <button  @click="removeCourse(index)">Delete</button>
      </li>
      
    </ul>
  </div>
</template>

<script>
export default {
  name: "demo10",
  methods: {
    onAdd() {
        // push data into array
        this.myCourseDynamic.push(this.course);
        this.course= {title:'',price:0}
    },
    removeCourse(index){
        //remove data with index 
        this.myCourseDynamic.splice(index,1)
    }
  },
  data() {
    return {
      course: { title: "", price: 0 },
      myCourseDynamic: [],
      mArray: ["OS1", "OS2", "OS3", "OS4"],
      mArrayObj: [
        {
          name: "top1",
          sex: "M"
        },
        {
          name: "top2",
          sex: "F"
        },
        {
          name: "top3",
          sex: "M"
        },
        {
          name: "top4",
          sex: "F"
        }
      ]
    };
  }
};
</script>

<style>
</style>