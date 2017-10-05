var str = prompt("Enter an array using comma separation (2,3,7,0)");
var arr = str.split(",");
printReverse(arr);

function printReverse(arr){
	var i = arr.length - 1;

	for ( ; i >= 0; i--) {
		console.log(arr[i]);
	}
}