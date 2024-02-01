// JavaScript source code

// declare a variable named "thecalculator" which holds everything inside the form for callculator
// declare a variable named "theconverter" which holds everything inside the div element for converter
var thecalculator = document.getElementById("myform");
var theconverter = document.getElementById("converter");

// Create a function named "showconverter" which upon execution, hides the calculator section and show only the converter section
function showconverter() {
    var y = theconverter.style.display = "block";
    var z = thecalculator.style.display = "none";
}
// Create a function named "showcalculator" which upon execution, hides the converter section and show only the calculator section
function showcalculator() {
    var y = theconverter.style.display = "none";
    var z = thecalculator.style.display = "grid";
}