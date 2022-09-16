const occurrences = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4].reduce(function (num, curr) {
    return num[curr] ? ++num[curr] : (num[curr] = 1), num;
  }, {});
      
  console.log(occurrences);