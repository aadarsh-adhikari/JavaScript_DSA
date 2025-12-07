function maxwater(){
    height = [1,8,6,2,5,4,8,3,7]
     l = 0
     r = height.length - 1
     Water = 0;
     while(l<r){
        width = r -l
        lowest = Math.min(height[l] , height[r])
        area = lowest * width
        Water = Math.max(Water, area);
        if (height[l] < height[r]) {
            l++;
        } else {
            r--;
        }}
       return Water
     }
