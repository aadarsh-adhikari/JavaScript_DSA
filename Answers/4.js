var findFinalValue = function(nums, original) {
    while(nums.includes(original)){
        original=original*2
    }
    return original
};
nums = [5,3,6,1,12], original = 3
console.log(findFinalValue(nums, original))