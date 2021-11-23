/*
Given an array of integers, return the indecies of 
2 numbers that add up to a given target
Leetcode Link: https://leetcode.com/problems/two-sum/
*/

// Brute Force
const twoSumBrute = (arr, target) => {
	if (arr.length < 2 ) return null; 
	let result = [];
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] + arr[j] === target) {
				result.push(arr[i], arr[j]);
			}
		}
	}

	return result.length === 0 ? null : result;
};

const twoSum = (arr, target) => {
	let arrObj = {}; 
	// First loop, just assign the value of the array as the key and the index as the value
	for (let i = 0; i < arr.length; i++) {
		let value = arr[i];
		arrObj[value] = i;
	}

	// Loop through the array again 
	for (let i = 0; i < arr.length; i++) {
		// Get the difference between the target and the current value 
		const difference = target - arr[i]; 
		// Check if the difference is a key in the arrObj
		if (arrObj.hasOwnProperty(difference) && arrObj[difference] !== i) {
			return [i, arrObj[difference]];
		}
	}
}