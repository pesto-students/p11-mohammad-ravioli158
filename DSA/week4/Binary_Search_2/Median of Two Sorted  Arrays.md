## Problem Name:
Median of Two Sorted Arrays

## Problem Statement:
Given two sorted arrays nums1 and nums2 of size 
m and n respectively, return the median of the two 
sorted arrays.


## Input Format:
The first line contains an integer m, 
representing the size of nums1.

The next line contains m space-separated
 integers representing the elements of nums1.

The third line contains an integer n, 
representing the size of nums2.

The next line contains n space-separated 
integers representing the elements of nums2.

## Output Format:
A floating-point number 
representing the median 
of the two sorted arrays.

## Test Case 1:
Sample Input:
4
1 3 5 7
3
2 4 6

Sample Output:
4.5

## Test Case 2:
Sample input:
4
1 1 3 4
4
2 2 5 6

Sample output:
2.5

## Level: Easy

## Hints:
- The median of a sorted array can be defined as 
the middle element for arrays with an odd number 
of elements, or the average of the two middl
e elements for arrays with an even number of 
elements.

- Analyze the relationship between the partition
 points and the median of the combined array.
Handle different cases based on the values at 
the partition points and their neighboring 
elements.

## Approach:
Read the input values from the user.
Implement a binary search approach to find the median of the two sorted arrays:
Ensure that the smaller array (nums1) has the smaller size among the two arrays. 
If not, swap the arrays and their sizes.
Initialize the variables start and end as 0 and the size of nums1, respectively, to 
represent the search space for the partition point in nums1.
While start is less than or equal to end:
Calculate the partition point in nums1 as mid1 = Math.floor((start + end) / 2).
Calculate the partition point in nums2 as mid2 = Math.floor((m + n + 1) / 2) - mid1, 
where m is the size of nums1 and n is the size of nums2.
Calculate the maximum element on the left side of the partition in nums1 
as maxLeft1 = (mid1 === 0) ? -Infinity : nums1[mid1 - 1].
Calculate the maximum element on the left side of the partition in nums2 as 
maxLeft2 = (mid2 === 0) ? -Infinity : nums2[mid2 - 1].
Calculate the minimum element on the right side of the partition in nums1 as 
minRight1 = (mid1 === m) ? Infinity : nums1[mid1].
Calculate the minimum element on the right side of the partition in nums2 as 
minRight2 = (mid2 === n) ? Infinity : nums2[mid2].
If maxLeft1 is less than or equal to minRight2 and maxLeft2 is less than or equal 
to minRight1, it means we have found the correct partition points. Check if (m + n) is odd or even:
If (m + n) is odd, return Math.max(maxLeft1, maxLeft2).
If (m + n) is even, return (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2.
If maxLeft1 is greater than minRight2, move the end pointer to mid1 - 1 to search in the left half of nums1.
If maxLeft2 is greater than minRight1, move the start pointer to mid1 + 1 to search in the right half of nums1.
Return 0 if no median is found.

## Code

[Leetcode: Median of two sorted arrays](https://leetcode.com/problems/median-of-two-sorted-arrays/submissions/981555255/)
```
    /**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

var findMedianSortedArrays = function(nums1, nums2) {
   if(nums2.length < nums1.length)
   return findMedianSortedArrays(nums2,nums1)
   if(nums1.length == 0)
   {
       let n = Math.floor(nums2.length/2)
     
   }
   if(nums2.length == 0)
   {
        let n = Math.floor(nums1.length/2)
  return (nums1.length % 2 == 0 ? (nums1[n]+nums1[n-1])/2 : nums1[n])
   }
   
   let len = nums1.length + nums2.length
   let low = 0
   let high = Math.min(nums1.length, Math.ceil(len/2))
   while(low <= high){
       let l1, l2, r1, r2
       let cut1 = Math.floor(low + (high - low)/2)
       let cut2 = Math.ceil(len/2) - cut1
       //read l1,l2,r1, and r2
      
       l1 = (cut1 == 0) ? Number.NEGATIVE_INFINITY : nums1[cut1-1]
       l2 = (cut2 == 0) ? Number.NEGATIVE_INFINITY : nums2[cut2-1]

       
       r1 = (cut1 == nums1.length) ? Number.POSITIVE_INFINITY : nums1[cut1]
       r2 = (cut2 == nums2.length) ? Number.POSITIVE_INFINITY : nums2[cut2]
       //console.log(`low:${low}, high:${high}, cut1:${cut1}, cut2:${cut2}`)
      // console.log(`l1:${l1}, r2:${r2}, l2:${l2}, r1:${r1}`)
       if(l1 > r2)
       {
           console.log("go left")
           high = cut1 - 1
       }
       else if(l2 > r1)
       {
           //go right
        //   console.log('go right')
           low = cut1 + 1
       }else{
           //everything is good
           let mid = (Math.max(l1,l2) + Math.min(r1, r2))/2
           return len % 2 != 0 ? Math.max(l1,l2) : mid
       }
       
   }
};
```