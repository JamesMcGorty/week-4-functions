// JavaScript Document
//James McGorty
//3/24/14
// years you have been alive
//functions personal

var stringDate = prompt("Please enter in your birth date mm/dd/yyyy: ", "");
var birthDate = Date.parse(stringDate);

var myAge = getAge(birthDate);

document.write("Your age is " + myAge);
console.log(myAge);




function getAge(birthDate)
{
	var dateToday = new Date();			// get the current date
	var diff = dateToday - birthDate;	// diff is in milliseconds
	
	var milliSecondsPerYear = 1000 * 60 * 60 * 24 * 365.25;
	
	return Math.floor(diff / milliSecondsPerYear);
}