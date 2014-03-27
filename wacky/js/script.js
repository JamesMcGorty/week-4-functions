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
}
else
	alert("Invalid Parameters Entered");


// Function to validate the parameters entered by the user
// Returns true or false
function ValidateParameters(money,bill,receipt)
{
	var bGood = true;
	
	if (money < 0) {
		bGood = false;
		console.log("money issue " + money);
	}
	
	if (bill > 0 && bill <= money) {
		bGood = false;
		console.log("bill issue " + bill);
	}
	
	var recUpper = receipt.toUpperCase();
	bGood = (recUpper == "YES" || recUpper == "NO") ? bGood : false;
	
	return bGood;
}