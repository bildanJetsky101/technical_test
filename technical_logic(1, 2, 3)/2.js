const dataArray = ['u','D','m','w','b','a','y','s','i','s','w','a','e','s','e','o','m',' ',' ']
const realData = ['D','u','m','b','w','a','y','s',' ','i','s',' ','a','w','e','s','o','m','e']

function arrayData(array1, array2){
    newArray = []
    for(let i = 0; i < array2.length+1; i++){
        for(let j = 0; j< array2.length+1; j++){
            if (array1[j] === array2[i]){
                [array1[i], array1[j]] = [array1[j], array1[i]]
                newArray.push(array1[i])
                break;
            }
        }
    }
    return console.log(newArray.join(''))
}
arrayData(dataArray, realData)

   