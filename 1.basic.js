function add(num1, num2) {
  const result = num1 + num2;
  console.log("function");
  return result;
}

const result = add(1, 2);
console.log(result);

function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
let lastName = "장";
let firstName = "종현";
// let fullName = `${lastName} ${firstName}`;
console.log(fullName(firstName, lastName));

let lastName2 = "장";
let firstName2 = "노아";
// let fullName2 = `${lastName} ${firstName}`;
console.log(fullName(firstName2, lastName2));
