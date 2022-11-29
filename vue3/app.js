const app= Vue.createApp({
    // template:"<h2>Hi There</h2>"
    data(){
        return{
            title: "You don't know Js",
            author:"Zwe Htet Aung",
            age: 20,
            showBook:true

        }
    },
    methods:{
        IncreaseAge(){
            // alert(age)

        }
    }
 
});
app.mount("#app")

const cat= Vue.createApp({

    data(){
        return{
            Name: "You don't know Js",
            Writer:"Zwe Htet Aung",
            No: 20,
            showBook:true

        }
    },
    methods:{
       mouseoverHandler(event){
           console.log("Mouse over is working",event.type)
       },
       mouseleaveHandler(event){
        console.log("Mouse leave is working",event.type)
    },
    dblclickHandler(event){
        console.log("DoubleClick is working",event.type)
    },
    }
});
cat.mount("#cat")


