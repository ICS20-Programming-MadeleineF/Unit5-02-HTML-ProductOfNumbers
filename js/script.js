//
// Created by: Madeleine Forgeron
// Created on: May 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * This function displays all numbers from 0 up to the user number
 */
function numberDisplay() {
  	// initialize the sum to 0
	let sum = 0
	// get the user number
	let userNum = parseInt(document.getElementById('userNum').value)
	let userNum2 = parseInt(document.getElementById('userNum2').value)

  
	// use a for loop to calculate the sum of numbers
	for (let counter = 1; counter <= userNum2; counter++) {
			sum = sum + userNum
  }
      
  	// return the string of numbers back to html
  	document.getElementById('display-results').innerHTML = "The product of the two numbers is" + " = " + sum 
}