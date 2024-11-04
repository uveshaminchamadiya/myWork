const reverseArray = (arr) => {
    const revArray = [];
    for(let i=arr.length-1; i>=0; i--){
        revArray.push(arr[i]);
    }
    return revArray;
}

const arr = [1,2,3,4,5,6];
const reversedArray = reverseArray(arr);
console.log("Reversed Array: ", reversedArray);