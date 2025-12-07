Input: prices = [7,8,5,3,6,4]
function buyandsell(){
 buy=0
 sell=1
 profit = 0
 while(sell < prices.length){
    if(prices[sell] <prices[buy]){
        buy = sell
    }
    else{
        temprofit = prices[sell] - prices[buy]
        profit = Math.max(temprofit,profit)
    }
    sell++
}
 return profit
}

console.log(buyandsell())

