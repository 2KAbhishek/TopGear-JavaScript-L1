function arrayReverse(arr) {
  return arr.reverse();
}

function arrayLength(arr) {
  return arr.length;
}

let list = [1, 2, 3, 4, 5];

document.write("Reversed Array: " + "[" + arrayReverse(list) + "] <br>");
console.log(arrayReverse(list));

document.write("Array Length: " + arrayLength(list));
console.log(arrayLength(list));
