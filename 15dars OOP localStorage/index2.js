let robot={
    name:'Robot1',
    age:'20',
    text:'salom',
    hello:function(){
        return `assalomu alaykum mening ismim ${this.name}`
    }
}
let robot2={
    name:'Robot2',
    age:'25',
    text:'salom',
    hello:function(){
        return `assalomu alaykum mening ismim ${this.name} ahvollaringiz yaxshimi`
    },
    alik:function(){
        return `va alaykum assalom`
    }
}
console.log(robot.hello());
console.log(robot2.alik());






 




 