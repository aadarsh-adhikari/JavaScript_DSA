function longestConsecutive(nums) {
    const set = new Set(nums);
    let longest = 0;

    for (let num of set) {
        // check if num is the start of a sequence
        if (!set.has(num - 1)) {
            let currentNum = num;
            let length = 1;

            while (set.has(currentNum + 1)) {
                currentNum++;
                length++;
            }
            longest = Math.max(longest, length);
        }
    }
    return longest;
}
console.log(longestConsecutive([1,2,3,6,9,5,4,67,68]));




