const students = [
  { name: "Shiva", age: 20, course: "B.Tech" },
  { name: "Ravi", age: 21, course: "B.Sc" },
  { name: "Anu", age: 19, course: "B.Com" }
];
const message = `
Hello, my name is ${students[0].name}. I am ${students[0].age} years old and studying ${students[0].course}.<br>
Hello, my name is ${students[1].name}. I am ${students[1].age} years old and studying ${students[1].course}.<br>
Hello, my name is ${students[2].name}. I am ${students[2].age} years old and studying ${students[2].course}.
`;
document.getElementById("text").innerHTML = message;