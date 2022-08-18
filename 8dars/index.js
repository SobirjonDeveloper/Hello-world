//    ***
//   *****
//  ***
// ****
// // *********

// let x = 1;
// let str ='';
// for (i = 1; i < x; i++){
//     for (k = 1; k < x-i; k++) {
//         str += ' '
//     }
//     for (j = 0; j < i * 2 - 1; j++){
//         str += '*'
//     }
//     str += '\n'
// }
// console.log(str);

// let x = 12
// console.log(Math.random()*300)
// let number=Math.floor ((Math.random()*300))+200
// console.log(number);
// ///////////////////////////////////////////////////////////////////task4////////////////////////////////////////////////////////////////////////////////////

// function min_max(number){
//     let max_n = 0
//     let min_n = number[0]
//     number = number.split("");
//     for (let i = 0; i < number.length; i++){
//         //console.log(number[i])
//         if (max_n < number[i]) {
//             max_n = number[i]
//         }
//         if (min_n > number[i]) {
//             min_n = number[i]
//         }
//     }
//        return { min_n, max_n } 
//     }
// console.log(min_max("481792"));    
// let son = [1,2,3,5,6]

// for (let i = 0; i< son.length; i++) {
//     // const element = array[];
//     console.log(son[i]);
// }
// ///////////////////////////////////////////////////////////////////task2//////////////////////////////////////////////////////////////////////////////////////

// function median (string) {
//     string = string.split("").sort((a,b) => a - b)
//     let median;
//     for (let i = 0; i < string.length; i++) {
//       if (string.length % 2 != 0) {
//         median = string.slice(
//             Math.floor(string.length / 2)
//             string.length / 2 + 1
//         );
//         }else if (string.length / 2 == 0) {
//         let a = +string[string.length / 2 - 1]
//         let b = +string[string.length / 2]
//         median = (a+b) / 2;
//       }
        
//     }
//     return Number(median)

// console.log('12345678');
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function myFunc(str) {
//     let arr = str.split('')
//     if(arr.length %  2 !== 0) {
//         return arr[Math.floor(arr.length/2)]
//     }
//     else{
//         return (+arr[arr.length / 2] + +arr[(arr.length / 2) - 1]) / 2
//     }
// }
// console.log(myFunc('2345673'));


////////////////////////////////////////////////////task1///////////////////////////////////////////////////////////////

// let x = "fozil";
// let a = "";
// for (let i = x.length - 1; i >= 0; i--) {
//   a += x[i];
// }
// console.log(a);



