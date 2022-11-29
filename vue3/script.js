let projects=[
{
    "id":1,
    "title":"Frontend Developer",
    "detail":"A front end developer has one general responsibility: to ensure that website visitors can easily interact with the page. They do this through the combination of design, technology and programming to code a website's appearance, as well as taking care of debugging."
},
{
    "id":2,
    "title":"Backend Developer",
    "detail":"A front end developer has one general responsibility: to ensure that website visitors can easily interact with the page. They do this through the combination of design, technology and programming to code a website's appearance, as well as taking care of debugging."
},
{
    "id":3,
    "title":"Fullstack Developer",
    "detail":"A front end developer has one general responsibility: to ensure that website visitors can easily interact with the page. They do this through the combination of design, technology and programming to code a website's appearance, as well as taking care of debugging."
}
]

let findProject = projects.find((project)=>{
     return project.id===1
})
console.log(findProject)

