var toDo = [];
var pro = prompt("What would you like to do?");

while (pro !== "quit"){

	if (pro === "new") {
		var item = prompt("Enter a new todo");
		toDo.push(item);
		console.log(item + " added to list");
	}

	else if (pro === "list") {
		console.log("**********");
		
		for (var i = 0; i < toDo.length; i++) {
			console.log(i + ": " + toDo[i]);
		}

		console.log("**********");
	}

	else if (pro === "delete") {
		var index = prompt("Enter index of todo to delete");
		toDo.splice(index, 1);
		console.log("Todo Removed");
	}

	pro = prompt("What would you like to do?");
}

console.log("OK, YOU QUIT THE APP");