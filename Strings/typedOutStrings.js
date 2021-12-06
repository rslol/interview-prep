/*
Given two strings, S and T, return if they 
are equal when both are typed out. Any '#' 
that appears in the string counts as a backspace
Leetcode Link: https://leetcode.com/problems/backspace-string-compare/
*/

const typedOutStringBrute = (s1, s2) => {
	const first = buildString(s1); 
	const second = buildString(s2); 
	// NOTE: This method ONLY works with array of strings
	return JSON.stringify(first) === JSON.stringify(second);
}

// Make a helper function that returns an array of letters
const buildString = str => {
	const toReturn = []; 
	for (let i = 0; i < str.length; i++) {
		// If the value is not a hash, push it into final array 
		if (str[i] !== "#") {
			toReturn.push(str[i]);
		} else {
		// If it is a hash, pop the last value out of the array 
			toReturn.pop(); 
		}
	}

	return toReturn; 
};

// Optimized Solution 
const typedOutString = (s1, s2) => {
	// Use the two pointer method AND start at the end of the string 
	let i = s1.length - 1; 
	let j = s2.length - 1; 
	// While there is length in either string
	while (i >= 0 || j >= 0) {
		if (s1[i] === "#" || s2[j] === "#") {
			if (s1[i] === "#") {
				let backCount = 2; 
				while (backCount > 0) {
					i--; 
					backCount--; 
					if (s1[i] === "#"){
						backCount = backCount + 2;
					}
				}
			}

			if (s2[j] === "#") {
				let backCount = 2; 
				while (backCount > 0) {
					j--; 
					backCount--; 
					if (s2[j] === "#"){
						backCount = backCount + 2;
					}
				}
			}
		} else {
			if (s1[i] !== s2[j]) return false;
			i--; 
			j--;
		}
	}

	return true;
}