let inputArr = [10,15,20,100,2,3];
insertionSort(inputArr);

function insertionSort(inputArr) {
  let n = inputArr.length;
  for (let i = 1; i<n; i++) {

    let current = inputArr[i];
    let j = i - 1;

    while ((j>-1) && (current < inputArr[j])) {
      inputArr[j+1] = inputArr[j]; j--;
    }
inputArr[j+1] = current;
  }
  return inputArr;
}


console.log(inputArr);