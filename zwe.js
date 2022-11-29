

//JavaScript

// alert("Hello World");
// console.log("Hi");


// let name = "Zwe Htet Aung";
// console.log(name);

//String
// let name = "Williiam";

//Number
// let age = 12;

//Boolean
// let isMarried = false;

//null
// let emptyCup = null;


//undefined
// let unknownNumber;

/*
//falsy

1. 0
2. false
3. undefined
4. null
5. "" or ''


if(false){
    console.log("True");
}else{
    console.log("false")
}
*/


//&& And Gate

// let age =20;
// if(age >18 && age< 30){
//     console.log("True")
// }else {
//     console.log("False")
// }

// Or gate

// let age =20;
// if(age >18 || age < 10){
//     console.log("True")
// }else {
//     console.log("False")
// }

//Function

// function getName(){
//     console.log('Zwe Htet Aung')
// }
// getName()


// function getName(){
// return "Zwe Htet Aung";
// }
// console.log(getName());
 
//Expression Function

// let Name =function(){
//     console.log('Zwe Htet Aung')
// }
// Name();


// let getName =function(name){
//     console.log(name)
// }
// getName("Zwehtet")


// let getName =name=>{
//     return name
// }
// getName("William" )

// let getName = name =>name;

// let Name =(name,age)=>{
//     console.log(name,age)

// }
// Name("William" , 20)


// let Nmae=function(){
//     return "Zwe Htet Aung";
//     }
//     console.log(Name());
     


//Array


//         let names=[
//             "aungaung",
//             "kyawkyaw",
            
//         ]

//         names[0], 'aungaung'

//  //foreach
//         names.forEach((name) => {
//                 console.log("name")
//             });

// //filter
//             let filterName=names.filter((name)=>{
//                 return name==="kyawkyaw"

//             })


// // map 

//             let mappedName= names.map((name)=>{
//                 return "mrs "+ name

//             })
//             console.log(mappedName);



// let soccers = ["Ronaldo","Halland","Messi","Mabbpe","Neymar","Benzima"];

// // foreach 
// soccers.forEach((soccer)=>{
//     console.log( "This is " + soccer);
// });

// // filter
// let filteredSoccer = soccers.filter((soccer)=>{
//     return soccer == "Neymar";
// });
// console.log(filteredSoccer);

// //map
// let mappedSoccer = soccers.map((soccer)=>{
//     return "Mr " + soccer;
// });
// console.log(mappedSoccer);

// Sync Javascript => if not waiting data , step my step coding
// Async Javascript => Even if waiting data , after skip waiting data & continue another coding 
// console.log("One");
// console.log("Two");
// setTimeout(()=>{
//     console.log("I am async code");
// },2000);
// console.log("Three");
// console.log("Four");

//  //object
 
//   let bio={
//       name:"Zwe Htet Aung",
//       age: 20, 
//       isMarried:false,
//       hairColor:"brown", 
//       dateOfBirth:2002,
//       passYear(){
//           return 2020-20 //2000
//           //return 2020-this.age//2000
//         //   console.log(this)
//       }
//     }

// bio.age //20
// bio.passYear()


//Object Constructor

// function Student(id,name){
//    this.id = id;
//    this.name = name;
// }

// let studentOne = new Student("1","Mg Mg");

//  function Person(name,age){
//     this.name=name;
//     this.age=age;

// }

// let Person1=new Person('zha',20);
// console.log(Person1)

// // Fetch Api 
// fetch("https://jsonplaceholder.typicode.com/todos").then((response)=>{
//     console.log("resolved",response);
// }).catch((err)=>{
//     console.log(err);
// });

// fetch("https://jsonplaceholder.typicode.com/todos").then((response)=>response.json()).then((data)=>{
//     console.log(data);
// }).catch((error)=>{console.log(error)});

// fetch("https://jsonplaceholder.typicode.com/todos")
// .then((response)=>{
//     return response.json();
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch((error)=>{
//     console.log(error);
// });

// fetch("https://jsonplaceholder.typicode.com/todo")
// .then((response)=>{
//     return response.json();
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch((error)=>{
//     console.log(error);
// })


// // Async Await Api
// let data = async ()=>{
//     let response = await fetch("https://jsonplaceholder.typicode.com/todos",{
//          method : "GET",
//          headers : {
//             'Content-type' : "application/json",
//          },
//     })
//     let responseApi = await response.json();
//     console.log(responseApi);
// }
// data();

// let Api = async ()=>{
//     let response = await fetch("https://jsonplaceholder.typicode.com/todos",{
//         method :  "GET",
//         headers : {
//             'Content-type' : "application/json",
//         }
//     })
//     let result = await response.json();
// }

// Api();

// let getApi = async ()=>{
//     let response = await fetch("https://jsonplaceholder.typicode.com/todos",{
//         method : "GET",
//         headers : {
//             "Content-type"  : "application/json",
//         }
//     })
//     let responseApi = await response.json();
//     console.log(responseApi);
// }

// getApi();

// let getApiTwo = async ()=>{
//     let response = await fetch("https://jsonplaceholder.typicode.com/todos",{
//         method  : "GET",
//         headers : {
//             "Content-type" : "application/json"
//         }
//     })
//     let responseApi = await response.json();
//     console.log(response);
// }

// getApiTwo();

// let getApiThree = async ()=>{
//     let response = await fetch("https://jsonplaceholder.typicode.com/todo",{
//         method : "GET",
//         headers : {
//             "Content-type" : "application/json"
//         }
//     })
//     let responseApi = await response.json();
//     console.log(responseApi);
// }

// getApiThree();

// HTTP Request Api

// let request = new XMLHttpRequest();
// request.open("GET","https://jsonplaceholder.typicode.com/todos");
// request.send();

// let request = new XMLHttpRequest();
// request.addEventListener("readystatechange",()=>{
//     if(request.readyState == 4 && request.status == 200){
//         console.log(request.responseText);
//     }else {
//         console.log("URL is not found");
//     }
// });
// request.open("GET","https://jsonplaceholder.typicode.com/todo");
// request.send();

// let requestOne = new XMLHttpRequest();
// requestOne.addEventListener("readystatechange",()=>{
//     if(request.readyState == 4 && request.status == 200){
//         console.log(request.responseText);
//     }else{
//         console.log("URL is not found");
//     }
// })
// requestOne.open("GET","https://jsonplaceholder.typicode.com/todo");
// requestOne.send();

// let request = new XMLHttpRequest();
// request.addEventListener("readystatechange",()=>{
//     if(request.readyState====4){
//         // console.log(request);
//         console.log(request.responseText);
//     }
// });
// request.open("GET","https://jsonplaceholder.typicode.com/todos/1");
// request.send();

// let requestLink = new XMLHttpRequest();
// requestLink.open("GET","https://jsonplaceholder.typicode.com/todos/1");
// requestLink.send();

// let requestLinkOne  = new XMLHttpRequest();
// requestLinkOne.addEventListener("click",()=>{
//     if(requestLinkOne.readyState === 4 && requestLinkOne.status === 200 ){
//         console.log(requestLinkOne.responseText);
//     }else if(requestLinkOne.status === 404){
//         console.log("Error");
//     }
// })
// requestLinkOne.open("GET","https://jsonplaceholder.typicode.com/todos/1");
// requestLinkOne.send();


// let request = new XMLHttpRequest();
// request.addEventListener("readystatechange",()=>{
//     if(request.readyState====4 && request.status===200){
//         console.log(request.responseText);
//     }else if(request.status===404) {
//       console.log('Url Link is not available');
//     }
// })
// request.open("GET","https://jsonplaceholder.typicode.com/todos/1");
// request.send();


// let getTodos=(callback)=>{
//     let request = new XMLHttpRequest();
// request.addEventListener("readystatechange",()=>{
//     if(request.readyState===4 && request.status===200){
//     callback(request.responseText, undefined);    
//   }else if(request.status===404) {
//     callback(undefined, "something's going now.")   
//  }

// })
// request.open("GET","https://jsonplaceholder.typicode.com/todosjdvfbn");//url wrong
// request.send();
// }

// getTodos((data,err)=>{
//       console.log(data, err);
// });


// getTodos((data,err)=>{
//     if (data){
//     console.log(data);
//     }else {
//         console.log(err);
//     }
// });



// let getTodos=(resourse,callback)=>{
//     let request = new XMLHttpRequest();
// request.addEventListener("readystatechange",()=>{
//     if(request.readyState===4 && request.status===200){
//     let datas=JSON.parse(request.responseText);//change json to object
//         callback(datas,undefined);  

//   }else if(request.status===404) {
//     callback(undefined, "something's going now.")    }
// })
// request.open("GET",resourse);
// request.send();
// }

// getTodos("https://jsonplaceholder.typicode.com/todos/1",(data,err)=>{
//     if (data){
//     console.log(data);
//     }else {
//         console.log(err);
//     }
// });


//  Json Javascript Object Notation
//   1. First JSON file (.json)
//    eg: {
//        "name": "Zwe Htet Aung",
//        " age": 20
//        }



     // Promise
     
     
// let getTodos=(resourse,callback)=>{
//     return new Promise((resolve,reject)=>{

//     })
//     let request = new XMLHttpRequest();
// request.addEventListener("readystatechange",()=>{
//     if(request.readyState===4 && request.status===200){
//     let datas=JSON.parse(request.responseText);//change json to object
//         resolve(datats); 

//   }else if(request.status===404) {
//     reject("something's going now.")   
//  }

// })
// request.open("GET",resourse);
// request.send();
// }
       
// getTodos("zwe.json")
// .then((data)=>{
//     console.log(data);
//     getTodos("htet.json")
//     .then(()=>{
//      console.log(data);
//     })
//     .catch(()=>{
//         console.log(err)
//     })
// })
// .catch((err)=>{
//     console.log(err);
// })



// getTodos("zwe.json")
// .then((data)=>{
//     console.log(data);
//     return getTodos("htet.json");
    
// })
// .then(()=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log(err);
// })

// let getJsonData = (resource,callback) =>{
//     return new Promise((resolve,reject)=>{
//         let requestTwo = new XMLHttpRequest();
//         requestTwo.addEventListener("readystatechange",()=>{
//         if(requestTwo.readyState == 4 && requestTwo.status == 200){
//             resolve(requestTwo.responseText);
//         }else {
//             reject("Something is wrong");
//         }
//     })
//         requestTwo.open("GET",resource);
//         requestTwo.send();
//     });
// }

// getJsonData("https://jsonplaceholder.typicode.com/todos/1").then((data)=>{
//     console.log(data);
//     return getJsonData("https://jsonplaceholder.typicode.com/todos/2");
// }).then((data)=>{
//     console.log(data);
// })
// .catch((error)=>{
//     console.log(error);
// })

// let getJsonDataTwo = (resource,callback) => {
//     return new Promise((resolve,reject)=>{
//         let request = new XMLHttpRequest();
//         request.addEventListener("readystatechange",()=>{
//             if(request.readyState == 4 && request.status == 200){
//                 resolve(request.responseText);
//             }else{
//                 reject("Something is wrong");
//             }
//         })
//         request.open("GET",resource);
//         request.send();
//     })
// }

// getJsonDataTwo("https://jsonplaceholder.typicode.com/todos/2").then((data)=>{
//     console.log(data);
//     return getJsonDataTwo('https://jsonplaceholder.typicode.com/todos/3');
// }).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })

// let getJsonDataThree = (resource,callback) => {
//     return new Promise((resolve,reject)=>{
//         let request = new XMLHttpRequest();
//         request.addEventListener("readystatechange",()=>{
//             if(request.readyState == 4 && request.status == 200){
//                 resolve(request.responseText);
//             }else{
//                 reject("Something is wrong")
//             }
//         })
//         request.open("GET",resource);
//         request.send();
//     })
// }

// getJsonDataThree("https://jsonplaceholder.typicode.com/todos/3").then((data)=>{
//     console.log(data);
//     return getJsonDataThree("https://jsonplaceholder.typicode.com/todos/4")
// }).then((data)=>{
//     console.log(data);
// })
// .catch((error)=>{
//     console.log(error);
// });




// //Fetch Api

// //if url link are false and true , work to start ".then" 

// // fetch("api link")
// // .then((response)=>{
// //     console.log("resolved", response);
// // })
// // .catch((err)=>{
// //     console.log(err);
// // })


// fetch("zwe.json")
// .then((response)=>{
//     return response.json();
// })
// .then(()=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log(err);
// })



// fetch("zwe.json")
// .then((response)=>{
  
//     if(response.status===404){
//         throw new Error("Url is not availiable");
//     }
//     return response.json();
// })
// .then(()=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log(err.message);
// })



// let getJson = async () => {
//    let responseApi = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//    let datas = await responseApi.json();

//    return datas;

// }
// getJson();  // return undefined


// let getJson =async()=>{
//    let responseApi = await fetch("https://jsonplaceholder.typicode.com/todos/1",{
//      method : "GET",
//      headers : {
//         "Content-type" : "application/json"
//      }
//    });
//    let response = await responseApi.json();
//    console.log(response);
// }
// getJson()  //return promises



// let getJson = async ()=>{
//      let response = await fetch("zwe.json")
//     //  console.log(response);
//     let datas = await response.json();
//     // console.log(datas);
//     return datas;
// }
// getJson().then((datas)=>{
//     console.log(datas)

// }) 



/*    Vuejs create   */
   
// HTML
/* <div id="app">
<h2>{{title}}</h2>
<h4>author - {{author}}</h4>
<h4>Author age is{{age}}</h4>
<button v-on:click="age++">IncreaseAge</button>
<button v-on:click="author='aung aung'">changeAuthorName</button>
</div> */

/*    result  */


// JS
// const app= Vue.createApp({
//     // template:"<h2>Hi There</h2>"
//     data(){
//         return{
//             title: "You don't know Js",
//             author:"Zwe Htet Aung",
//             age: 20,
//         }
//     },
// });
// app.mount("#app")


// HTML
/* <div id="app">
<h2>{{title}}</h2>
<h4>author - {{author}}</h4>
<h4>Author age is{{age}}</h4>
<button v-on:click="IncreseAge(25)">IncreaseAge</button>
<button v-on:click="author='aung aung'">changeAuthorName</button>
</div> */

/*    result  */


// JS
// const app= Vue.createApp({
//     // template:"<h2>Hi There</h2>"
//     data(){
//         return{
//             title: "You don't know Js",
//             author:"Zwe Htet Aung",
//             age: 20,
//         }
//     },
// methods:{
//     IncreaseAge(age){
//         alert(age)
//
//     }
// }
// });
// app.mount("#app")



// HTML
/* <div id="app">
<h2>{{title}}</h2>
<h4>author - {{author}}</h4>
<h4>Author age is{{age}}</h4>
<button v-on:click="IncreseAge">IncreaseAge</button>
<button v-on:click="author='aung aung'">changeAuthorName</button>
</div> */

/*    result  */


// JS
// const app= Vue.createApp({
//     // template:"<h2>Hi There</h2>"
//     data(){
//         return{
//             title: "You don't know Js",
//             author:"Zwe Htet Aung",
//             age: 20,
//         }
//     },
// methods:{
//     IncreaseAge(){
//        this.age++
//     }
// }
// });
// app.mount("#app")




// Vue If

// Hover 
// 1)Mouse Over
// 2)Mouse leave
// 3)DoubleClick 

// Vue for

/* <div id="cat">
<div v-if="showBook">
   <div v-for="book in books">
       <p>Book name - {{book.name}}</p>
       <p>author name  - {{book.writer}}</p>
       <p>author age - {{book.age}}</p><hr>
   </div>
</div>


<button @click="showBook=!showBook">
    <span v-if="showBook===true">Hide</span>   
    <span v-if="showBook===false">Show</span>
</button>
<a :href="link">google</a>
</div> */

// const cat= Vue.createApp({

//     data(){
//         return{
//books:[
    //     {
    //         Name: "You don't know Js",
    //         Writer:"Zwe Htet Aung",
    //         age: 20,
    //     },
    //     {
    //         Name: "You don't know Js",
    //         Writer:"Zwe Htet Aung",
    //         age: 24,
    //     },
    //     {
    //         Name: "You don't know Js",
    //         Writer:"Zwe Htet Aung",
    //         age: 30,
    //     },

    //    ],
//     showBook:true,
    //    link:"https://www.google.com"//v-bind

//         }
//     },
//   
// });
// cat.mount("#cat")



// Add Photo
// <style>

//   li{

// list-style:none;

//   }

//   .favorite{
//       background-color:black
//   }
// </style>


/* <div id="cat">
<div v-if="showBook">
//    <ul v-for="book in books">
    <ul v-for="book in filteredBook">
    <li :class="favorite:book.isFav" @click="book.isFav=!book.isFav"> // @click="clickHandler()"
       <img :src="book.jpg" width="300px" height="100px">
       <p>Book name - {{book.name}}</p>
       <p>author name  - {{book.writer}}</p>
       <p>author age - {{book.age}}</p><hr>
    </li>

   </ul>
</div>


<button @click="showBook=!showBook">
    <span v-if="showBook===true">Hide</span>   
    <span v-if="showBook===false">Show</span>
</button>
<a :href="link">google</a>
</div> */


// const cat= Vue.createApp({

//     data(){
//         return{
//books:[
//     {
//         Name: "You don't know Js",
//         Writer:"Zwe Htet Aung",
//         age: 20,
//         img:"https://www.undeprecated.com/assets/img/posts/javascript.png",
//         isFav:true
//     },
//     {
//         Name: "You don't know Js",
//         Writer:"Zwe Htet Aung",
//         age: 24,
//         img:"https://blog.logrocket.com/wp-content/uploads/2020/09/vue3.png",
//     },
//     {
//         Name: "You don't know Js",
//         Writer:"Zwe Htet Aung",
//         age: 30,
//         img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5ratmIBtN_POjBXWJ3V3E46I59kXg000YGg&usqp=CAU",
//     },

//    ],
//     showBook:true,
//    link:"https://www.google.com"//v-bind

//         }
//     },
    //   methods:{
    //       clickHandler(book){
    //           book.isFav=!book.isFav;
    //       }
    //   },
    //   computed:{
    //       filteredBooks(){
    //           return this.DOMSettableTokenList.filter(book=>{
    //               return book.isFav===true;
    //           });
    //       }

    //   }
//   
// });
// cat.mount("#cat")