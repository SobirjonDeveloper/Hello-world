function myName(){
    console.log('myNAME',this);
}


const car = {
    name : 'Cobalt',
    year :2022,
    sayName:myName,
    // color : white,
    sayNameWindow: myName.bind(window),
    info: function(){
        console.log(`Car name is: ${this.name}`);
        console.log(`Year: ${this.year}`);
        // console.log(`Model:${model}`);
        // console.log(`Color:${this.white}`);
    }
}


const genrta = {
    name:'Gentra',
    year:2020,
}
// car.info.bind(genrta)('CHevrole')
car.info.call(genrta,'CHevrolet',)
car.info.apply(genrta,['CHevrolet'])








