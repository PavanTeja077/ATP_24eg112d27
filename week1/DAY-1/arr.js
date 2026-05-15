// 7. Write a function that receives an array &
//      search element as args and returns the index of
//      that search element in the array. It should return 
//      "not found" when search element not found.
function search(arr,b){
    
    for(let i=0;i<arr.length;i++)
        if(arr[i]==b)
            return i;
    return "Search elment not found"
}
console.log(search(arr,60))
