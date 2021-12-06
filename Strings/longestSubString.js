/*
Given a string s, find the length of the longest substring without repeating characters.
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Leetcode Link: https://leetcode.com/problems/longest-substring-without-repeating-characters/
*/ 

const longestSubStringBrute = s => {
    let arr = []; 
    let longest = 0;
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            if (!arr.includes(s[j])) {
                arr.push(s[j]); 
                if (arr.length > longest) {
                    longest = arr.length; 
                }
            } else {
                i++;
                arr = [];
            }
        }
    }

    return longest; 
}