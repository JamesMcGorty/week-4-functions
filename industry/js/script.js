// JavaScript Document
//James McGorty
//3/25/14
//how many pictures you can fit on a webpage
//functions industry

// Get the size of the image
var picHeight = prompt("what is the height of your picture?", 120);
var picWidth = prompt("what is the width of your picture?", 120);

// Get the area of the image and screen
var picSiz = picHeight * picWidth;
console.log("Picture Area " + picSiz);

var scrSiz = screen.height * screen.width;
console.log("Screen (" + screen.height + "x" + screen.width + ") Area " + scrSiz);

// Create annoyomous function
var calcHowManyWillFit = function(screenSize, pictureSize) {
	return Math.floor(scrSiz / picSiz);
}

// Call function
var numPics = calcHowManyWillFit(scrSiz / picSiz);
console.log(numPics);

// Display output to use
document.write("you can fit " + numPics + " pictures on your screen");




