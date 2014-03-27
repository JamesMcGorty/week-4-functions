// JavaScript Document
//James McGorty
//3/24/14
// years you have been alive
//functions personal

var stringDate = prompt("Please enter in your birth date mm/dd/yyyy: ", "");
var birthDate = Date.parse(stringDate);

var myAge = getAge(birthDate);

document.write("Your age is " + myAge);