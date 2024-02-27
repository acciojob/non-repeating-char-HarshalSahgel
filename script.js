function firstNonRepeatedChar(str) {
 // Write your code here

	const charNum = new Map();

	for(let char of str){
		charNum.set(char, (charNum.get(char) || 0) + 1);
	}
	for(const char of str){
		if(charNum.get(char) === 1){
			return char;
		}
	}

	return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
