"use strict";

var makebudget = function() {
	var income = document.getElementById("income").value;
	var home = parseFloat(.5);
	var savings = parseFloat(.2);
	var payoff = parseFloat(.2);
	var wants = parseFloat(.1);
	//var homebudget = (income * home);
	
	var isValid = true;
	
	if (income == "") {
		document.getElementById("income").nextElementSibling.innerHTML = "You must enter a value";
		isValid = false;
	} else {
		document.getElementById("income").nextElementSibling.innerHTML = "";
		document.write("You Entered: " + income + "<span></span><br>");
		document.write("\nMandatory expenses (cars, housing, utilities, etc): " + (income * home) + "<span></span><br>");
		document.write("\n Savings: " + (income * savings) + "<span></span><br>");
		document.write("\nDebt payoff (if you have any. this includes student loans, credit cards, etc): " + (income * payoff) + "<span></span><br>");
		document.write("\nDiscretionary spending: " + (income * wants));
	}

	if (isValid) {
		document.getElementById("makebudget").submit();
		//document.write(document.getElementById("income"));
	}
};
/*
var calculate_budget = function(income, homeBud, homeSpend) {
	var income = document.getElementById("income").innerHTML;
	var homeSpend = parseFloat(.3);
	var homeBud = income * homeSpend;
	document.write(homeBud);
}

var resetIncome = function() {
	document.getElementById("makebudget").reset();
	document.getElementById("income").nextElementSibling.innerHTML = "";
}
*/

window.onload = function() {
	document.getElementById("budgetbtn").onclick = makebudget;
	//var income = document.getElementById("income").value;

};