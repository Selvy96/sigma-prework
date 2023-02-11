let age = 0;
let birthday = prompt("What's your date of birth? (YYYY-MM-DD)?");
let today = new Date().toISOString().slice(0, 10);
console.log(today);
console.log(birthday);
let birthYear = parseInt(birthday.slice(0, 4));
let birthMonth = parseInt(birthday.slice(5, 7));
let birthDate = parseInt(birthday.slice(8, 10));
let currentYear = parseInt(today.slice(0, 4));
let currentMonth = parseInt(today.slice(5, 7));
let currentDate = parseInt(today.slice(8, 10));
if (birthMonth < currentMonth) {
  age = currentYear - birthYear;
} else if (birthMonth > currentMonth) {
  age = currentYear - birthYear - 1;
} else if (birthMonth === currentMonth && birthDate <= currentDate) {
  age = currentYear - birthYear;
} else {
  age = currentYear - birthYear - 1;
}
console.log("Your age is: " + age);
