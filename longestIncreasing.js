/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {

    const l = Array(nums.length)
    const pre = Array(nums.length)

    for(var j = 0; j < nums.length; j++){
        l[j] = 1
        pre[j] = 0
        for(var i = 0; i < j; i++){
            if(nums[i] < nums[j] && 1+l[i] > l[j]) {
                l[j] = 1+l[i]
                pre[j] = i
            }
        }
    }

    maior = 0

    for(let i = 0; i< nums.length; i++){
        maior = Math.max(maior,l[i])
    }

    console.log(pre)
    console.log(l)
    console.log(maior)
}([7,7,7,7,7,7,7]);

//nums = [0,1,0,3,2,3]
//nums = [10,9,2,5,3,7,101,18]
//nums = [7,7,7,7,7,7,7]