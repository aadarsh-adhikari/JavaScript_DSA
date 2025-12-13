var lengthOfLongestSubstring = function(s) {
    set = new Set()
    left = 0
    length = 0
    result = ""
    for(let right = 0 ; right <s.length; right++){
      while(set.has(s[right])){
        set.delete(s[left])
        left++
      }
     set.add(s[right])
     if (set.size > length) {
     length = set.size;
     result = s.substring(left, right + 1);
    }
    }
  return length
};
console.log(lengthOfLongestSubstring("abdabcdab"))