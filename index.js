function fibs(num) {
  let list = [];
  for (let i = 0; i < num; i++) {
    if (i < 2) {
      list = list.concat(i);
    } else {
      list = list.concat(list[i - 1] + list[i - 2]);
    }
  }
  return list;
}
function fibsRec(num) {
  if (num <= 0) {
    return [];
  }
  return fibsRec(num - 1).concat(fibsR(num - 1));
}
function fibsR(num) {
  if (num < 2) {
    return num;
  } else {
    return fibsR(num - 1) + fibsR(num - 2);
  }
}
let ans = fibsRec(8);
// Merge Sort

function mergeSort(array) {
  if (array.length > 2) {
    const firstH = array.slice(0, array.length / 2);
    const secondH = array.slice(array.length / 2);
    const sortFirstH = mergeSort(firstH);
    const sortSecondH = mergeSort(secondH);
    let sortedArray = [];
    let i = 0;
    let j = 0;
    while (sortFirstH[i] != null && sortSecondH[j] != null) {
      if (sortFirstH[i] <= sortSecondH[j]) {
        sortedArray.push(sortFirstH[i]);
        i++;
      } else {
        sortedArray.push(sortSecondH[j]);
        j++;
      }
    }
    for (i; i < sortFirstH.length; i++) {
      sortedArray.push(sortFirstH[i]);
    }
    for (j; j < sortSecondH.length; j++) {
      sortedArray.push(sortSecondH[j]);
    }
    return sortedArray;
  } else if (array.length == 2) {
    if (array[0] > array[1]) {
      return [array[1], array[0]];
    } else {
      return array;
    }
  } else {
    return array;
  }
}

const array2 = [105, 79, 100, 110];
const array = [3, 2, 1, 13, 8, 5, 0, 1, 21, 55, 4];
const sortedArray = mergeSort(array2);
console.log(sortedArray);
