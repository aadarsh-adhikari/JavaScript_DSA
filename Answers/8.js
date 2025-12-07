function twosum(){
 l = 0;
 r=  numbers.length -1
 sum = 0
 while(l<r){
    sum = numbers[l] + numbers[r]
    if(sum == target){
        return [l+1, r+1]
    } 
    if(sum > target)
        r--
    else
     l++
 }
}
console.log(twosum())