var num = Number(prompt("Guess a number!"));

if (num==7) {
	alert("You guessed it!!!");
}

else if (num<7) {
	alert("Too low. Try again.");
}

else {
	alert("Too high. Try again.");
}