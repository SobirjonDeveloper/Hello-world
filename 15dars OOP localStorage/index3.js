class Robot{
    constructor(name,age,text){
        this.name=name
        this.age=age
        this.text=text
    }
    hello(){
        return `assalomu alakum maning ismim ${this.name}`
    }
}  
let robot1=new Robot('robot11','23','assalom ')





console.log(robot1.hello());
