// -----------------LINEAR SEARCH O(N)---------------------
function linearSearch(arr, num) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === num){
            return i
        } 
    }
    return `not found`
}

console.log(linearSearch([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 40))
// -----------------BINARY SEARCH O(LOG N)-----------------

function binarySearch(arr, num){
    let start = 0
    let end = arr.length - 1
    let mid = Math.floor((start + end) / 2) 

    while(arr[mid] !== num && start < end){
        if(num < arr[mid]){
            end = mid - 1
        } else if(num > arr[mid]){
            start = mid + 1
        }
        mid = Math.floor((start + end) / 2) 
        if(arr[mid] === num) return arr[mid]
    }
}

// console.log(binarySearch([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 40))