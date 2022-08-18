const person = [
    {
        name:"Abdulaziz",
        age:17,
        job:'developer'
    },
    {
        name:"Azizbek",
        age:17,
        job:'developer'
    },
    {
        name:"Hojiakbar",
        age:15,
        job:'developer'
    },
    {
        name:"Abdurahmon",
        age:18,
        job:'developer'
    },
    {
        name:"Shoaziz",
        age:16,
        job:'developer'
    },
    {
        name:"Asilbek",
        age:22,
        job:'develope'
    },
    {
        name:"Zuhriddin",
        age:26,
        job:'developer'
    },
    {
        name:"Bexruz",
        age:17,
        job:'develope'
    },
    {
        name:"Sobirjon",
        age:16,
        job:'developer'
    },
    {
        name:"Odina",
        age:15,
        job:'developer'
    },
    {
        name:"Ruqayya",
        age: 18,
        job:'deveoper'
    },
]
let res= person.filter((item)=>item.name.includes("s"))
console.log(res);







