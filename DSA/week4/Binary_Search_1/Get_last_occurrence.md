## Problem Name:

Get last occurrence

  

## Problem Statement:

You are given a sorted array of integers and a

target value. Write a function to find the last

occurrence of the target value in the array. If the

target value is not present, return -1.

  
  

## Input Format:

The input consists of two lines:

  

The first line contains space-separated

integers representing the elements of the

sorted array.

The second line contains a single integer

representing the target value.

  

## Output Format:

A single line containing

either the index of the last

occurrence of the target

value if it is present, or -1

if it is not.

  

## Test Case 1:

Sample Input:

1 2 3 3 5

3

  

Sample Output:

3

  

## Test Case 2:

Sample input:

1 2 3 4

10

  

Sample output:

-1

  

## Level: Easy

  

## Hints:

- Use a modified binary search to find the last

occurrence of the target value.

- Update the search range to the right side if the

middle element is equal to the target.

  

## Approach:

Read the sorted array and target value from input.

Initialize two pointers, "low" and "high," representing the start and end indices of

the array.

While "low" is less than or equal to "high":

a. Calculate the middle index as the average of "low" and "high".

b. If the middle element is equal to the target value:

If the middle element is the last occurrence (next element is greater or the index is at

the end), return the middle index.

Otherwise, update "low" to middle + 1.

c. If the middle element is less than the target value, update "low" to middle + 1.

d. If the middle element is greater than the target value, update "high" to middle - 1.

If the loop completes without finding the target value, return -1.

  
  

## Code

  
  [LeetCode: Find Last and First Positiion of element in sorted Array](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/submissions/977829480/)
  
```
/**
* @param {number[]} nums
* @param {number} target
* @return {number[]}
*/

var searchRange = function(nums, target) {
	//find first position
	let left = 0, right = nums.length - 1;
	let firstPos, lastPos;
	while(left <= right){
		let mid = Math.floor((left+right)/2)
		if(nums[mid] == target){
			firstPos = mid
			//go left
			right = mid - 1
		}
		else if(nums[mid] > target)
		{
			//go left
			right = mid - 1
		}else
		{
			// go right
			left = mid + 1
		}
	}
	//find right position	
	left = firstPos
	right = nums.length - 1
	while(left <= right)
	{
		let mid = Math.floor((left+right)/2)
		if(nums[mid] == target)
		{
			lastPos = mid
			left = mid + 1
		}
		else if(nums[mid] < target)
		{
		//go right
		left = mid + 1
		}else{
			//go left
			right = mid - 1
		}
	}
	return [firstPos ?? -1, lastPos ?? -1]
};
```