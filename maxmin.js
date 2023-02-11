function findMaxAndMin(arr) {
  let maxVal = arr[0];
  let minVal = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxVal) {
      maxVal = arr[i];
    } else if (arr[i] < minVal) {
      minVal = arr[i];
    }
  }
  return `Max Value: ${maxVal}\nMin Value: ${minVal}`;
}
