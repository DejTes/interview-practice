// If there are multiple pairs of numbers that add up to the target


function twoSum(nums, target) {
    const numMap = new Map(); // Create a map to store numbers and their indices
    const pairs = []; // Array to store pairs of indices
  
    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
  
      if (numMap.has(complement)) {
        // If the complement is in the map, add the pair of indices to the result array
        pairs.push([numMap.get(complement), i]);
      }
  
      // Store the current number and its index in the map
      numMap.set(nums[i], i);
    }
  
    return pairs;
  }
  
  // Example usage:
  const nums = [2, 7, 11, 15, 8, 1];
  const target = 9;
  const result = twoSum(nums, target);
  console.log(result); // Output: [[0, 1], [4, 5]]
  