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

// Sequencial Processing
var bGood = ValidateParameters(money, bill, receipt);

if (bGood)
{
	var totalBills = calcNumBills(money, bill);
	console.log("Total Bills in requested bill " + totalBills);

	var amtBills = totalBills * bill;
	console.log("Total Amount in the bill requested $" + amtBills);
	
	var amtRemaining = money - amtBills;
	console.log("Amount remaining " + amtRemaining);
	
	document.write("You get " + totalBills + " $" + bill + "'s, plus $" + amtRemaining + " remaining.");