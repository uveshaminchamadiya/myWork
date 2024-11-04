const maxElement = (arr) => {
    if (arr.length === 0) return null; 
    let maxEle = arr[0];
    for(let i=0; i<arr.length; i++){
        if(arr[i] > maxEle)
            maxEle = arr[i]
    }
    return maxEle;
}

const arr = [1,2,3,4,5,6,-1];
const maximumElement = maxElement(arr);
console.log("Maximum Element: ", maximumElement);