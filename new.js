const students = [
  {
    id: 101,
    name: "Rahat",
    department: "Textile",
    isGraduated: true
  },
  {
    id: 102,
    name: "Sumi",
    department: "CSE",
    isGraduated: false
  }
];

// console.log(students);
let search=101;
const object = students.map(element=>{
    // console.log(element);
    const value=Object.values(element);
    return value;
})
const output=object
console.log(output);
const filterword = output.filter(item=>{
  return item.includes(search)
})
console.log(filterword);
