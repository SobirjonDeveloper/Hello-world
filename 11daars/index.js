// let person={
//     Addrres:'Uzbekistan',
//     Age:'20',
//     name:'Sobir',
// }

// person.Addrres !=='Uzbekistan' ? console.log('sizni qabul qila olmaymiz') : console.log('qabul qilamiz');
// person.Age<20  ? console.log('sizni qabul qila olmaymiz') : console.log('qabul qilamiz');
// // person.name =='' console.log('qabul qilamiz')

//////////////////////////////////////////teskari oqish/////////////////////
// var x = dark

// function darsk(x) {
//   // let x = 'darsk'
//   let y=''
//   for (let i = x.length-1; i >= 0; i--) {
//     y += x[i]
//   }
//   return y
// }
// console.log(darsk('sobir'));

// let str='g5 guruh'
// str[2]==' '&& console.log(true);
// for(let i=0;i<3;i++) {
//     console.log(str[1]);
// }
// function mergeArrays(arr1, arr2) {
//     let arr = arr1.concat(arr2).sort((a, b) => a - b);
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] !== arr[i + 1]) {
//         result.push(arr[i]);
//       }
//     }
//     return result;
//   }

// var n = 9

// function get_person (n){
//  if (n%2 ===0 ) {
//     return 'Even'

//   }
//   else{return 'Odd'}
// }
// console.log(get_person)

/////////////////////////////////////////2-masala////////////////////////////////////////////////////////////
// const g5filter = (arr) => {
//       return arr.split('').map((value, index, arr) => value == arr[index + 1] ? value : false).filter(Boolean)[0]
//   }
//           console.log(g5filter("ABBACCA"));
////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////1-masala/////////////////////////////////////////////////
// let person= data.filter((item)=>item.name.toLowerCase().includes("o"))
// console.log(person);
///////////////////////////////////////////////////////////////////////////////////////////////////





// function narcissistic(value) {
//     const valStr = `${value}`;
//     const len = valStr.length;
//     return valStr.split('')
//       .reduce((acc, item) => acc += Math.pow(+item,len), 0) === value;
//   }

// var a ='stirng'
// var b = 'ha'
// console.log(Boolean(a));

// function boolToWord( bool ){
//   if (bool==true) {
//     return 'Yes'
//   }
//   if (bool==false) {
//    return 'No'
//   }
// }
// console.log(bool);

// function digitize(n) {
//   const num = [];
//   return num.reverse();
// }
// console.log(num);
