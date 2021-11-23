/*
Given an array of integers representing
an elevation map where the width of each bar 
is 1, return how much rainwater can be trapped. 
*/

// Note: You're finding out how much water can be trapped throughout 
// the ENTIRE array. 0's in the array mean a space. 
// Leetcode link (for visualization): https://leetcode.com/problems/trapping-rain-water/

/*
Questions to ask
1) Do the left and right sides of the graph counts as walls? No
2) Can there be negative integers? 
*/

/*
Potential formula: find smaller square and calculate max area and then 
subtract any additional squares in that area
If height is larger than smaller height, start a new square
Track the lowest numbers in the array 
*/

/* Current Water Formula
currentWater = Math.min(maxLeft, maxRight) - currentHeight;
*/

const trappedRainwaterBrute = arr => {
	let totalWater = 0;
	let leftP = 0;
	let rightP = 0;
	let maxL = 0;
	let maxR = 0;
	for (let i = 0; i < arr.length; i++) {
		while (leftP >= 0) {
			maxL = Math.max(maxLeft, arr[leftP]);
			leftP - 1;
		}

		while (rightP < arr.length) {
			maxR = Math.max(maxR, arr[rightP]); 
			rightP++;
		}

		const currentWater = Math.min(maxL, maxR) - arr[i];

		if (currentWater >= 0) totalWater = totalWater + currentWater;
	}

	return totalWater;
};

// Use the two pointer method
const trappedRainwater = arr => {
	let totalWater = 0; 
	let i = 0; 
	let j = arr.length - 1; 
	let rightMax = 0; 
	let leftMax = 0;  

	// step 1: Identify which pointer has the lesser value
	while (i < j) {
		if (arr[i] <= arr[j]) {
			// step 2: Ask if pointer value is greater than the max on that side 
			if (arr[i] >= leftMax) {
				// step 2a: If yes, update max value of that side
				leftMax = arr[i];
			} else {
				// step 2b: If no, then get water for pointer value, add to total 
				totalWater = totalWater + (leftMax - arr[i]); 
			}
			// step 3: Move pointer inward
			left++;
		} else {
			// step 4: Repeat for other pointer 
			if (arr[j] >= rightMax) {
				rightMax = arr[j];
			} else {
				totalWater = totalWater + (rightMax - arr[j]);
			}
			right++;
		}
	}
	
	return totalWater;
};


