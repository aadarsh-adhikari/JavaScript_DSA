
var isPalindrome = function(x) {
    let rev = 0;
    let org = x;
    if(x <0) return false;
    while (x >0){
       rev = rev * 10 + (x%10); 
       x = Math.floor(x/10);  

    }
    return org === rev;
};
console.log(isPalindrome(10)); 
console.log(isPalindrome(121)); 
console.log(isPalindrome(0)); 