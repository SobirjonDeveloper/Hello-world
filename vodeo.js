// A2B2C3H1K2
// har bir harfni oqish
// birinchi kelgan harf bn ikkinchi kelgan harf bir biriga tengmi
//teng bolmasa qism topilsin
//harflarni oldida 1 raqami chiqishi






// let str = "ggttteerrrg";
// let count = 1;
// let str2 = "";
// for (let i = 0; i < str.length; i++) { 
//   if (str[i] == str[i + 1]){
//     count = count + 1;
//   }

//   if (str[i] !== str[i+1]) {
//     count != 1 ? str2 = str2 +str[i] + count : str2 = str2 = str2 + str[i]
//     count = 1
//   }
// }
// console.log(count,str2);





























let str = 'aarrjvvbbbhhhhh'
let count = 1;
let str2 = "";
for (let i = 0; i < str.length; i++) {
  if (str[i] == str[i+1]){
    count = count + 1;
  }

  if (str[i] !== str[i+1]) {
    count !== 1 ?str2 = str2+ str[i] +count :str2 = str2 =str2 + str[i]
    count = 1
  }
  
}

console.log(count,str2);








