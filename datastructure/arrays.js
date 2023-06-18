// 
// 1. Given an array of integers, return the indices of the two numbers that add up to a given target.

function twoSum(nums, target) {

        // Create a map to store numbers and their indices
    const numMap = new Map(); 

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (numMap.has(complement)) {
            // If the complement is in the map, return its index and the current index
            return [numMap.get(complement), i];
        }

        // Store the current number and its index in the map
        numMap.set(nums[i], i);
    }

    // No solution found
    return [];
}

// Example usage:
const nums = [2, 12, 10, 7, 8];
const target = 18;
const result = twoSum(nums, target);
console.log(result); // Output: [2, 4]