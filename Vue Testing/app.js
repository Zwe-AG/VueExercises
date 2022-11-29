
let app = Vue.createApp({
    data(){
        return{
            title :  "How to become Web Developer",
            author : "Zwe Htet Aung",
            bookQty :  30,
            showBook : true
        }
    },
    methods:{
        increaseQty(){
            this.bookQty++;
        }
    }
});

app.mount("#app");

let appTwo = Vue.createApp({
    methods:{
        mouseoverhandler(event){
            console.log('Mouse Over is working',event);
        },
        mouseleavehandler(event){
            console.log('Mouse Leave is working',event.type);
        },
        dblclickhandler(){
            console.log('Mouse Doubleclick is working');
        }

    }
});
appTwo.mount("#appTwo");

let appThree = Vue.createApp({
    data(){
        return {
            books : [
                {
                    title : "Book1",
                    author : "John",
                    age : 20,
                    image : 'img/img1.jpeg',
                    isfav : true
                },
                {
                    title : "Book2",
                    author : "Wick",
                    age : 10,
                    image : 'img/img2.jpeg',
                    isfav : false
                },
                {
                    title : "Book3",
                    author : "Fred",
                    age : 30,
                    image : 'img/img3.jpeg',
                    isfav : true
                },
            ],
            linkOne : 'http://www.google.com',
            linkTwo : 'https://www.youtube.com/',
        }
    }
})

appThree.mount('#appThree');

let appFour = Vue.createApp({
    data(){
        return{
            megazines : [
                {
                    title : "How to improve programming skill",
                    author : "Kyaw Swar",
                    isfav : true
                },
                {
                    title : "How to improve web developemnt skill",
                    author : "Mg Mg",
                    isfav : false
                },
                {
                    title : "How to improve problem solving skill",
                    author : "Kyaw Kyaw",
                    isfav : true
                },
            ]
        }
    }
})

appFour.mount("#appFour");

let appFive = Vue.createApp({
    data(){
        return{
            cars : [
                {
                    type : "Mercedes",
                    price : "$1500",
                    isFav : true
                },
                {
                    type : "BMW",
                    price : "$2500",
                    isFav : true
                },
                {
                    type : "Toyota",
                    price : "$3500",
                    isFav : false
                },
                {
                    type : "Suzuki",
                    price : "$4500",
                    isFav : true
                },
                {
                    type : "Nissan",
                    price : "$5500",
                    isFav : false
                }
            ]
        }
    },
    methods:{
        choose(car){
            car.isFav = !car.isFav;
        }
    },
    computed: {
        filteredType(){
            return this.cars.filter((car)=>{
                return car.isFav;
            })
        }
    },
})

appFive.mount("#appFive");
