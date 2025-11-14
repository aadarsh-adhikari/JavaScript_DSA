/* 1. **Two Sum**
   - Given an array of integers and a target sum, return indices of two numbers that add up to the target.
   - Example: nums = [2,7,11,15], target = 9 → Output: [0,1] 
   */
   function twoSum(nums , target){
    
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
    
   }
    }
}
console.log("the index are " , twoSum([2,7,11,15], 9));