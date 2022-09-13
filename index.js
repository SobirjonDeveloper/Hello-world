// // // String method : harflarga ishlatiladi
// // // replace, joyni almashtirish
// // // repeat,   harfni topib beradi
// // // concat,
// // // indexOf, kiritilgan harflarni indexni topib beradi
// // // lastIndexOf, boshidagi harflarni indexni topib beradi
// // // search, qidiruv uchun
// // // includes,
// // // slice, qirqib oladi
// // // substring,
// // // toLowerCase, sozlarni kichik qiladi
// // // toUpperCase, sozlarni katta qiladi
// // // trim,
// // // startWith,
// // // endWith,
// // // padStart,
// // // padEnd yetmay qolgan
// // let a = 'harf'
// // let b = 'hello'
// // console.log(a.repeat(5));
// // console.log(a.replace('h','a'));
// // console.log(a.lastIndexOf());
// // console.log(a.indexOf());
// // console.log(a.slice(0,-3));
// // console.log(a.toLowerCase());
// // console.log(a.toUpperCase());

// Math.PI ,Math.E
// console.log(Math.E);

// console.log(Math.pow(4,0.5));

// function Pow_g5(x,y) {
//     return x**y
// }
// console.log(pow_g5(4,0.5));

// function E_g5(params) {
//     return
// }

// function asrniTopish(year) {
//     // Finish this :)
//     return year / 100;
//     //  && console.log(asr);;
//     let resul = Math.ceil(/);
//     console.log(resul);
//   }

// function asrniTopish(year) {
//   // Finish this :)
//   let sum = year / 100;
//   let result = Math.ceil(sum);
//   console.log(result);
// }
// asrniTopish(2052);
// Math.acosh
// let x='mart'
// switch (x) {
//     case 'dekabr':console.log('qishning birincchi oyi'); break
//     case 'yanvar':console.log('qishning ikkinchi oyi'); break
//     case 'fevral':console.log('qishning uchinchi oyi '); break
//     case 'mart':console.log('bahorning birincchi oyi'); break
//     case 'aprel':console.log('bahorning ikinchi oyi'); break
//     case 'may':console.log('bahorning uchinchi oyi');break
//     case 'iyun':console.log('yoz birincchi oyi'); break
//     case 'iyul':console.log('yoz ikinchi oyi'); break
//     case 'avgust':console.log('yoz uchinchi oyi'); break
//     case 'sentabr':console.log('kuzning birincchi oyi'); break
//     case 'oktabr':console.log('kuzning ikkinchi oyi'); break
//     case 'noyabr':console.log('kuzning uchinchi oyi'); break
//     default: console.log('Error bunday oy yoq'); break
// }






















// 3-masala
// const printNumText = (number) => {
//   let birlikSon = number % 10;
//   let onlik = Math.floor(number / 10);
//   let onlikSon = onlik % 10;
//   let onlikSonText = "";
//   let birlikSonText = "";
//   let yuzlikSon = Math.floor(number / 100);
//   let minglikSon = Math.floor(number / 1000);
//   let yuzlikSonText = "";

//   switch (yuzlikSon) {
//     case 1:
//       yuzlikSonText = "Bir yuz";
//       break;
//     case 2:
//       yuzlikSonText = "Ikki yuz";
//       break;
//     case 3:
//       yuzlikSonText = "Uch yuz";
//       break;
//     case 4:
//       yuzlikSonText = "To'rt yuz";
//       break;
//     case 5:
//       yuzlikSonText = "Besh yuz";
//       break;
//     case 6:
//       yuzlikSonText = "Olti yuz";
//       break;
//     case 7:
//       yuzlikSonText = "Yetti yuz";
//       break;
//     case 8:
//       yuzlikSonText = "Sakkiz yuz";
//       break;
//     case 9:
//       yuzlikSonText = "To'qqiz yuz";
//       break;
//   }

//   switch (onlikSon) {
//     case 1:
//       onlikSonText = "o'n";
//       break;
//     case 2:
//       onlikSonText = "yigirma";
//       break;
//     case 3:
//       onlikSonText = "o'ttiz";
//       break;
//     case 4:
//       onlikSonText = "qriq";
//       break;
//     case 5:
//       onlikSonText = "ellik";
//       break;
//     case 6:
//       onlikSonText = "oltmish";
//       break;
//     case 7:
//       onlikSonText = "yettimish";
//       break;
//     case 8:
//       onlikSonText = "sakson";
//       break;
//     case 9:
//       onlikSonText = "to'qson";
//       break;
//   }

//   switch (birlikSon) {
//     case 1:
//       birlikSonText = "bir";
//       break;
//     case 2:
//       birlikSonText = "ikki";
//       break;
//     case 3:
//       birlikSonText = "uch";
//       break;
//     case 3:
//       birlikSonText = "uch";
//       break;
//     case 4:
//       birlikSonText = "to'rt";
//       break;
//     case 5:
//       birlikSonText = "besh";
//       break;
//     case 6:
//       birlikSonText = "olti";
//       break;
//     case 7:
//       birlikSonText = "yetti";
//       break;
//     case 8:
//       birlikSonText = "sakkiz";
//       break;
//     case 9:
//       birlikSonText = "toqqiz";
//       break;
//   }
//   let res = yuzlikSonText + " " + onlikSonText + " " + birlikSonText;
//   console.log(minglikSon ? "mingdan katta" : res.trim());
// };
// printNumText(1653);
// printNumText(324)








// 2-masala

/////////////////////////////////
  let x =30;
if( x % 3 ==0){
    console.log("Bu son 3ga bolinadi");
}
/////////////////////////////////////////////
//   let x =30;
// if( x % 5 ==0){
//     console.log("Bu son 5ga bolinade");
// }
// //////////////////////////////x///////
// let x =30;
// if(x % 5 == 0 &&x % 3 == 0){
//     console.log('Bu son 5ga va 3ga bolinadi');
// }else if(x%3==0){
//     console.log('Bu son 3ga bolinadi');
// }else if(x % 5 ==0){
//     console.log('BU son 5ga bolinadi')
// }
// switch (x) {
//   case '6':
    
//     break;

//   default:
//     break;
// }





















// 1-masala
// var num =34
// if (num %2==0) {
//   console.log("bob win");
// } else {
//   console.log("alice lose");
// 






// let x='Salom Dunyo';
// for (i=o;i<x.length;x++){
//   if (x[i]=='o') {
    
//   }
//   console.log(x[i],i);
// }






//////1-masala///
// console.log(233%2)
// let x=12
// let number = 12
// x%2 !==0 && console.log('bu juft son' : 'toq son')
// let x = 3

// let home = ((number % 2 !== 0) ? 'juft son' : 'toq son') ;
// 3-masala
// let num = 5;
// for (let i = 1; i <= num; i++) console.log(i % 2 == 0 ? `${i} Juft Son` : `${i} Toq Son`);
// 2-masala


// let str = 'webBrain';
// const func = (s) => {
//   let arr = s.split('');
//   arr.splice(s.indexOf('web'), 3, 'IT');
//   console.log(`${s.repeat(10)}\n${arr.join('').repeat(10)}`);
// };

// func(str)
 



// var str = 'WeBbraIN'
// for (let i = 0; i < str.length; i++) {
//    console.log(str[i]);
// }














// let num = 9;
// for (let i = 0; i <= num; i++) {
//     console.log(i % 2 == 0 ? ${i} ('Juft Son' : ${i} 'Toq Son'));
// }













// 3-masala
// let x = 'web brain academy';

// let count = 0

// for (let i = 0; i < x.length; i++) {
//    if(x[i]=='a'){
//        count=count+1
//        console.log(x[i],i);
//    }
// }
// console.log(count);




// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
  
// }





















//////////////////////

// function module(x) {
//   let result;
//   x < 0 && (result = x * -1);
//   x > 0 && (result = x);
//   console.log(result);
//   return result;
// }
// module(-34);

//////////////////////////////// Math.round ////////////////////////////////

// function round(x) {
//   let number = x.toString().split(".")[0];
//   let residual = x.toFixed(1).slice(-1);
//   let result;
//   if (residual < 5) {
//     residual = 0;
//     result = Number(number) + Number(residual);
//   } else if (residual >= 5) {
//     residual = 1;
//     result = Number(number) + Number(residual);
//   }
//   console.log(result);
//   return result;
// }

// round(1235.5234542315);

//////////////////////////////// Math.floor ////////////////////////////////

// function floor(x) {
//   let number = x.toString().split(".")[0];
//   let minus = x.toString().split("-");
//   let residual = x.toString().split(".")[1];
//   let result;
//   if ((minus[0] === "" && residual == 0) || residual == undefined) {
//     result = number;
//   } else if ((minus[0] == "" && residual > 0) || residual == undefined) {
//     result = number - 1;
//   } else if (residual >= 0 || residual == undefined) {
//     result = number;
//   }
//   console.log(Number(result));
//   return Number(result);
// }
// floor(-347);

//////////////////////////////// Math.ceil ////////////////////////////////

// function ceil(x) {
//   let number = x.toString().split(".")[0];
//   let minus = x.toString().split("-");
//   let residual = x.toString().split(".")[1];
//   let result;
//   if ((minus[0] === "" && residual >= 0) || residual == undefined) {
//     result = Number(number);
//   } else if (residual == 0 || residual == undefined) {
//     result = Number(number);
//   } else if (residual >= 0 || residual == undefined) {
//     result = Number(number) + 1;
//   }
//   console.log(result);
//   return result;
//   console.log(residual);
// }
// ceil(347.12);

///////////////////////////////////////////////////
