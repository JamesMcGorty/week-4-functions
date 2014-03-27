// JavaScript Document
//James McGorty
//3/26/14
//functions wacky
//bank withdraw

// Get the input from the user
var money = prompt("How much would you like to withdaw ?", 100);
var bill = prompt("What is the largest bill you would like?", 20);
var receipt = prompt("Would you like a reciept?", "No");

// Annoymous function to calcualte the number of bills 
var calcNumBills = function() { return Math.floor(money / bill); };