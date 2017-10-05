var str = prompt("Enter an array using comma separator inbetween (2,5,7,9)");
var arr = str.split(",");
isUniform(arr);

function isUniform(arr){
	var check = 1;

	for (var i = 1; i < arr.length; i++) {
		if (arr[0] !== arr[i]) {
			check = 0;
			console.log("Given array is not uniform.");
			break;
		}
	}

	if (check === 1) {
		console.log("Given array is uniform.");
	}
}