let wrap=document.get.ElementById('con')
let input=document.getElementById('name')
let id=document.getElementById('id')
let G5=[
    {
        id:1,
        name:"Abdulaziz",
        age:17,
        job:'developer'
    },
    {
        id:2,
        name:"Azizbek",
        age:17,
        job:'developer'
    },
    {
        id:3,
        name:"Hojiakbar",
        age:15,
        job:'developer'
    },
    {
        id:4,
        name:"Abdurahmon",
        age:18,
        job:'developer'
    },
    {
        id:5,
        name:"Shoaziz",
        age:16,
        job:'developer'
    },
    {
        id:6,
        name:"Asilbek",
        age:22,
        job:'develope'
    },
    {
        id:7,
        name:"Zuhriddin",
        age:26,
        job:'developer'
    },
    {
        id:8,
        name:"Bexruz",
        age:17,
        job:'develope'
    },
    {
        id:9,
        name:"Sobirjon",
        age:16,
        job:'developer'
    },
    {
        id:10,
        name:"Odina",
        age:15,
        job:'developer'
    },
    {
        id:11,
        name:"Ruqayya",
        age: 18,
        job:'deveoper'
    },
]

let name_user=prompt('ismni kriting')

let nama_user

function getUser(){
    G5_dasturchilar.map((item)=>{
        wrap.innerHTML+=`<p>${item.name}<p/><button> onlick=""`
    })

}
getUser()

function addUser(arr){
    let user={id:12,name:name_user}
    arr.push(user)
    // getUser()
    // return arr
}
console.log(addUser(G5));

function idGet(id){

}








