// Basic 13 algorithms assignment
// print all integers from 1-255
function printNumbers() {
  for (var i = 1; i <= 255; i++) {
    console.log(i);
  }
}

// Print the integers from 0-255 and the increasing sum with each integer
function printSum(){
  var sum=0;
  for (var i=0; i<=255; i++){
    sum+=i;
    console.log(i);
    console.log(sum);
  }
}

// given an array, find and print it's largest element
function findMax(arrayOfData){
  for (var i=0; i < arrayOfData.length; i++){
    if (i==0){
      var maxValue = arrayOfData[0];
    }
    else if (arrayOfData[i]>maxValue){
      maxValue == arrayOfData[i];
    }
  }
}

// create an array with all odd integers between 1 and 255 inclusive
function createOddArray(){
  var oddArray = [];
  for (var i=1; i<256; i+=2){
    oddArray.push(i);
  }
  return oddArray;
}

// given an array and a value, count and print the number of values greater than y
function arrayGreaterThanY(array,y){
  var count = 0;
  for (var i=0; i<array.length; i++){
    if (array[i]>y){
      count++;
    }
  }
  print (count + ' numbers in the array were larger than Y.');
}

// given an array print the max, min, and average values
function maxMinAverage(array){
  var sum = 0;
  for (var i=0; i < array.lenght; i++){
    sum += array[i];
    if (i==0){
      var max = array[i];
      var min = array[i];
    }
    else if (array[i]>max){
      max = array[i];
    }
    else if (array[i]<min){
      min = array[i];
    }
  }
  console.log('The maximum value was ' + max);
  console.log('The minimum value was ' + min);
  console.log('The average value was ' + sum / array.length);
}

// given an array, swap all negative values with "Dojo"
function dojofy(array){
  for (var i=0; i<array.length; i++){
    if (array[i]<0){
      array[i]="Dojo";
    }
  }
  return array;
}

// print all odd integers from 1 to 255
function printOdds(){
  for (var i=1; i<256; i+=2){
    console.log(i);
  }
}

// iterate through an array and print each value along the way
function printArray(array){
  for (var i=0; i<array.lenght; i++){
    console.log(array[i]);
  }
}

// analyze an array's values and print the average
function findTheAverage(array){
  var sum=0;
  for (var i=0; i<array.length; i++){
    sum+=array[i];
  }
  console.log(sum/array.length);
}

// square all the values in an array
function squareTheValues(array){
  for (var i=0; i<array.length; i++){
    array[i]=array[i]*array[i];
  }
  return array;
}

// set all negative values to 0 and return the array
function zeroOut(array){
  for (var i=0; i<array.length; i++){
    if (array[i]<0){
      array[i]=0;
    }
  }
  return array;
}

// shift all array values forward 1 and leave a 0 as the final value
function shiftArray(array){
  for (var i=1; i<array.lenght; i++){
    array[i-1]=array[i];
  }
  array[array.lenght-1]=0;
}