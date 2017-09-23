var ans = prompt("Are we there yet?");
var pos = ans.search("yes");
var pos1 = ans.search("yeah");

while(pos === -1 && pos1 === -1) {
	ans = prompt("Are we there yet?");
	pos = ans.search("yes");
	pos1 = ans.search("yeah");
}

alert("Yay, we finally made it!");