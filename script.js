function toCase(text) {
  // write your code here
	let output = "";

	let uc = text.toUpperCase();
	let lc = text.toLowerCase();
	output = lc.concat("-"+uc);
	return output;
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
