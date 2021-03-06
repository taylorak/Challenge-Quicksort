function quicksort(arr, firstIndex, secondIndex) {
  if(firstIndex < secondIndex) {
    var partitionIndex = partition(arr, firstIndex, secondIndex);
    quicksort(arr, firstIndex, partitionIndex);
    quicksort(arr, partitionIndex + 1, secondIndex);
  }
}

function partition(arr, firstIndex, secondIndex) {
  var pivot = arr[firstIndex];
  var biggerIndex = firstIndex - 1;
  var smallerIndex = secondIndex + 1;

  while(true) {

    do {
      biggerIndex++;
    } while(arr[biggerIndex] < pivot);

    do{
      smallerIndex--;
    } while(arr[smallerIndex] > pivot);

    if(biggerIndex >= smallerIndex) {
      return smallerIndex;
    }
    swap(arr, biggerIndex, smallerIndex);
  }
}

function swap(arr, firstIndex, secondIndex) {
  var tmp = arr[firstIndex];
  arr[firstIndex] = arr[secondIndex];
  arr[secondIndex] = tmp;
}

module.exports = quicksort;

// unsortedArray = [];

// for(var i = 0; i < 20; i++) {
//   unsortedArray[i] = Math.floor(Math.random() * 100) + 1;
// }
// quicksort(unsortedArray, 0, unsortedArray.length -1);
// console.log(unsortedArray);