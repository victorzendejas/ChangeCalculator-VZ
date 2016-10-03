$("button").click(function() {
/*created 4 variables */
var total = $("#input1").val();

var customertotal = $("#input2").val();

var change = customertotal - total;

var dollar = Math.floor(change); 
// The Math.floor() function returns the largest integer less than or equal to a given number.
$("#dollar").html(dollar);
change-=dollar;

var quarters = Math.floor(change / .25);
$("#quarters").html(quarters);
change %= .25;

var dimes = Math.floor(change / .1);
$("#dimes").html(dimes);
change %= .1;

var nickles = Math.floor(change / .05);
$("#nickles").html(nickles);
change %= .05;

var pennies = Math.floor(change / .01);
$("#pennies").html(pennies);
change %= .01;

});

