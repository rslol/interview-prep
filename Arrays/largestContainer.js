/*
Given an array of positive integers where 
each integer represents the height of a 
vertical line on a chart. Find two lines which together
with the x-axis (the index position) forms a container that would hold 
the greatest amount of water. Return the area of water 
it would hold. 
-- Notes --
It's not about taking the highest number in the array and setting it as the height, 
as unless another number in the array is equal to it, it will be to 'high' and water
will 'flow' over it 
Leetcode Link: https://leetcode.com/problems/container-with-most-water/
*/

// This is a maximum value question, to find the height: O(n^2)
const largestContainerBrute = arr => {
    // Step 1: find out the formula for this problem. 
    // area = l * w
    // maxArea = min(arr[i], arr[j]) * (j - i)
    let maxArea = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            const area = Math.min(arr[i], arr[j]) * (j - i); 
            if (area > maxArea) maxArea = area
        }
    }
    return maxArea; 
}

// Two pointer method
const largestContainter = arr => {
    let maxArea = 0;
    let i = 0; 
    let j = arr.length - 1; 

    while (i < j) {
        const height = Math.min(arr[i], arr[j]); 
        const width = j - i;
        const area = height * width; 
        if (area > maxArea) maxArea = area;
        if (arr[i] <= arr[j]) {
            i++;
        } else {
            j++;
        }
    }
    return maxArea;
}