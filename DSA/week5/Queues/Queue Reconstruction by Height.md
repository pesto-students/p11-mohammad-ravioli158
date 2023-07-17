## Problem Name:
Queue Reconstruction by Height

## Problem Statement:
You are given a list of people with their heights and 
the number of people in front of them who have a 
greater or equal height. Your task is to reconstruct 
the queue based on this information.

Write a function reconstructQueue(people) that 
takes a single parameter:

people: An array of pairs of integers representing 
the heights and the number of people in front of them.
The function should return the reconstructed queue 
as an array of pairs of integers.


## Input Format:
The input consists of two lines:

The first line contains a series of space-separated
pairs of integers representing the heights and the
 number of people in front of them.

The second line contains a single integer 
representing the number of people.

## Output Format:
Print the reconstructed queue as 
a series of space-separated pairs 
of integers representing the heights 
and the number of people in front 
of them.

## Test Case 1:
sample Input
7 0 4 4 5 0 6 1 5 2
9

Sample Output
5 0 7 0 5 2 6 1 4 4

## Test Case 2:
Sample input:
6 0 5 0 4 0
5

Sample output:
6 0 5 0 4 0

## Level: Medium

## Hints:
- Sort the people array based on their heights in 
descending order. If two people have the same 
height, sort them based on the number of people 
in front in ascending order.

- Iterate over the sorted array and insert each 
person into the reconstructed queue at the 
specified index based on the number of people
 in front.


## Approach:
Read the input pairs of heights and the number of people in front from the user.
Split the input string into an array of pairs of integers.
Create an empty array reconstructedQueue to store the reconstructed queue.
Sort the people array in descending order based on heights. If two people have the 
same height, sort them based on the number of people in front in ascending order.
Iterate over each person in the sorted people array.
Extract the height and the number of people in front for each person.
Insert the person at the specified index based on the number of people in front into 
the reconstructedQueue.
Print the reconstructedQueue as pairs of heights and the number of people in front.

##Code

[https://leetcode.com/problems/queue-reconstruction-by-height/submissions/996298626/](https://leetcode.com/problems/queue-reconstruction-by-height/submissions/996298626/)
```
/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
  //Sort heights in ascending order
  people.sort((a,b) => {
      if(a[0] == b[0])
      { 
        return a[1] - b[1]
      }else{
        return a[0] - b [0]
      }
  })  
  //console.log(people)
  const result = new Array(people.length)
  
  for(let person of people){
    //  console.log('preson',person)
      const height = person[0]
      const taller = person[1]
      if(taller == 0)
      {
        //put at first available place
        let i = 0 
        while(result[i] !== undefined)
        {
          i++
        }
        //insert at ith place
        result[i] = person

      }else{
        //try to insert such that it has 'taller' space before it
        let count = 0
        //count undefined and larger such that it is equals to larger  
        let i = 0
        for(i = 0 ; i < result.length && count < taller; i++){
         // console.log('at i',i,'result[i]',result[i],'height',height)
          if(result[i] === undefined || result[i][0] >= height)
          {
            count++
          }
        //  console.log('coutn is',count)
        }
        // place at empty place
        while(result[i] !== undefined )
        {
          i++
        }
        result[i] = person
      }
    //  console.log(result)
  }
  return result
};
```