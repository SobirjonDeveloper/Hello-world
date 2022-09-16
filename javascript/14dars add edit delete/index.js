let array = [
  { id: 1, name: "Sobirjon" },
  { id: 2, name: "Abdurahmon" },
  { id: 3, name: "SHoaziz" },
  { id: 4, name: "Odina" },
  { id: 5, name: "Behruz" },
];

const EditUser = (id, key, value_user) => {
  const editItem = array.map((value) =>
    value.id === id ? { ...value, [key]: value_user } : value
  );
  console.log(editItem);
};
EditUser(3, "name", "Fayzullayev");


//del

// const deleteFunc = (id) => array = array.filter((value)=> value.id !== id)
// deleteFunc(3)
// console.log(array);

// Add

// function addUser(name = "User",) {
//   array.push({
//     id: array.length + 1,
//     name: name,
//   });
//   return array;
// }

// console.log(addUser("Fayzullayev"));
