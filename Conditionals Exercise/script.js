var age = Number(prompt("Enter your age:"));

if (age<=0) {
	console.log("Age cannot be zero or negative");
}

else if (age==21){
	console.log("Happy 21st Birthday!!");
}

else if ((age%2) == 1) {
	console.log("Your age is odd!");
}