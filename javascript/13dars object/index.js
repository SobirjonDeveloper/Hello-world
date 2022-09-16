const G5_dasturchilar=[
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

function addUser(name='User',age='',job='developer'){
    G5_dasturchilar.push({id:G5_dasturchilar.length+1,name:name,age:age,job:job,})
    return G5_dasturchilar
}
// let delArr = [...G5_dasturchilar]
// function delUser(id){
//     delArr=delArr.filter((item)=>item.id!==id)
//     return delArr
// }
// console.log(delUse(3));
// console.log(delUser(1));







