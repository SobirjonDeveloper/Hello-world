function myFunc(str) {
  let arr = str.split("");
  if (arr.length % 2 !== 0) {
    return arr[Math.floor(arr.length / 2)];
  } else {
    return (+arr[arr.length / 2] + +arr[arr.length / 2 - 1]) / 2;
  }
}
console.log(myFunc("23456744"));
