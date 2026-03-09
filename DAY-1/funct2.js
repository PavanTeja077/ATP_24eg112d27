function sumArray(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}


let numbers = [10, 20, 30, 40];

console.log(sumArray(numbers));  