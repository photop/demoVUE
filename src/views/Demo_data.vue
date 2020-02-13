<template>
<div>
    <h1>DATA Must be Fuction /Get Data Array using For loop </h1>
    <button @click="count++;islog=true"> SCount++</button>
    <span>{{count}}</span>
    <div>{{msg}}</div>
    <div>{{islog}}</div>
    <input type="text" placeholder="Input your message" v-model="msg">
    <h2 v-if="islog==true">Hello islog True</h2>
    <div>{{Account}}</div> <span class="title">Show structure </span>
    <div>{{Account.username}}  {{Account.password}}</div><span>select and show </span>
    <h1 class="title"> show array </h1>
    <div>{{myClass[0]}}</div>
    <ul>
        <!-- show index and data -->
       <li v-for="(item, index) in myClass" :key="index">{{index}} -->  {{item}}</li>
    </ul>
   

</div>
  
</template>

<script>
export default {
    name:"demo3",
    data(){
        return{
            count:0,
            msg:"This is Defualt Message",
            islog: false,
            /* create Structure Data  */
            Account:{
                username: "admin",
                password: "12345"
            },
            /* crate Array */
            myClass:[
                "class A" ,
                "class B" ,
                "class C" ,
                "class D"
            ]
        }
    }

}
</script>
<style scoped>
li{
    color : red

}
/** create class for style */ 
.title{
    font-size: 30px;
    color: green;

}
</style>