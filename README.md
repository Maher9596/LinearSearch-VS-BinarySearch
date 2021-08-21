# LinearSearch-VS-BinarySearch
In this repo I will show the differece in time complexity / Big O notation between the two searching algorithms.

## The problem
In this example we need to create a function that accepts an array and a value of any type, we should be able to know if the value is in the array or not.

## The Solution
We will solve this problem with 2 different approaches : - 

**Linear Search** Iterate the array and compare the value to the items at each index *O(n)*

**Binary Search** Split the array and compare the mid point to the value *O(log n)*

### First Approach Linear Search
- Create a function that accepts an array and a value
- Loop through the array 
- Compare the value at each index / arr[i] to the value passed
- If you find that arr[i] is equal to the value, return the index
- If the loop ends and the value is not found, return "Not Found"

In terms of implementation this approach is relatively simple compared to the second approach. However, the time complexity of this approach would O(n),
as you will have to loop through the whole array in the worst case when the value is found at the end of the array. So in an array of 8 numbers we will do 8 checks.

### Second Approach Binary Search
- Create a function that accepts an array and a value
- Create start point, end point, and a mid point
- Check if the mid point is greater or smaller than the value
- If it is smaller, update the value of start point to be mid + 1. This means our array now is smaller, we got rid of the first half of the array
- If it us greater, update the value of end point to be mid - 1. We got rid of the second half of the array
- Update the value of mid point to be the center of the new array
*Repeat this process as long as the value is not found and start point is smaller than end point*
- Finally if the value is found return the index

In this implementation we are making use of the "Divide and Conqure" pattern to find the value, unlike the previous approach we won't be comparing each index to the value,
We will check if the mid point is equal to the value.
So in an array of 8 numbers we will only do 3 checks This would give us a better time complexity of O(log n).
The rate of operation growth would be O(log n) which is much better than O(n). *Refere to* [BigO chart](https://www.google.com/url?sa=i&url=https%3A%2F%2Fmedium.com%2F%40sadia.islam.badhon%2Fbig-o-notation-into-overview-f83bc792e344&psig=AOvVaw2dR7wFvV_xn-mlj4vUNDyr&ust=1629551301653000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCICizefVv_ICFQAAAAAdAAAAABAU).

**See main.js to see the implementation of both approaches in JavaScript**
