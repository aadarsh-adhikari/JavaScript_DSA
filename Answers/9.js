Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" 
function palindrome(){
    s = "A man, a plan, a canal: Panama"
    s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
    left = 0
    right = s.length - 1
    while(left <right ){
        if(s[left] != s[right])
            return false
        left ++
        right--
    }
      
    return true  
}
console.log(palindrome())