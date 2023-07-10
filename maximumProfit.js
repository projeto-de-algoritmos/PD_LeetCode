/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
*/
var jobScheduling = function(startTime, endTime, profit) {
    const time = startTime.map((time,index) => {
        return [time, endTime[index],profit[index]]
    })

    const weight = []
    weight[0] = 0
    for(let i = 1; time.length > i; i++) weight[i] = undefined

    //ordena pelo horário de termino da tarefa
    time.sort((a,b) => a[1] - b[1])
    time.unshift([0,0,0])
    
    const p = (j,i) => {
        if(i < 0) {
            return 0
        }else if(time[j][0] >= time[i][1]) {
            return i
        }
        
        return p(j, i-1)
    }
    
    const back = []
    back[0] = 0
    
    for(let i = 1; time.length > i; i++) back[i] = p(i, i - 1)
    
    let result = 0

    const opt = (j) => {

        if(weight[j] == undefined){
            weight[j] = Math.max(time[j][2] + opt(back[j]),opt(j-1))
        } 
        if(weight[j] > result) result = weight[j]
        return weight[j]
    }

    for(var i = 1; time.length > i ; i++) opt(i)

    return result

};



//test cases

// startTime = [1,2,3,4,6], endTime = [3,5,10,6,9], profit = [20,20,100,70,60] 
//([1,2,3,4,6],[3,5,10,6,9],[20,20,100,70,60])

//startTime = [1,2,3,3], endTime = [3,4,5,6], profit = [50,10,40,70]
//([1,2,3,3],[3,4,5,6],[50,10,40,70])

//startTime = [1,1,1], endTime = [2,3,4], profit = [5,6,4]
//([1,1,1],[2,3,4],[5,6,4])