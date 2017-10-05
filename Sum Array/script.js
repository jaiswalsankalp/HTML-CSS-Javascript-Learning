var str = prompt("Enter an array of numbers to sum using comma (2,3,5,7)");
var arr = str.split(",");
console.log(sumArray(arr));

function sumArray(arr){
	var sum = 0;

	for (var i = 0; i < arr.length; i++) {
		sum += Number(arr[i]);
	}

	return sum;
}