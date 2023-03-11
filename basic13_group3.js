// Algo number 8
// print all odd integers from 1 to 255

function printOdds() {
  for (var i = 1; i <= 255; i += 2) {
    console.log(i);
  }
}

function printOtherOdds() {
  for (var i = 0; i <= 255; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

// iterate and print an array
function printArray(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

// analyze an array's values and print the average
function findSum(arr) {
  // code before the loop
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    // code inside the loop
    sum += arr[i];
  }
  // code after the loop
  console.log(sum / arr.length);
}

findSum([1, 2, 3, 4]);