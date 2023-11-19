interface Steps {
  type: string;
  value: [i: number, j: number];
}

export let steps: Steps[] = [];

export const BubbleSort = (array: number[]): Steps[] => {
  steps = [];
  console.log(array);
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      steps.push({ type: 'compare', value: [i, j] });
      if (array[i] > array[j]) {
        steps.push({ type: 'swap', value: [i, j] });
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      steps.push({ type: 'done', value: [i, j] });
    }
  }

  return steps;
};

// for (let k = start; k <= end; k++) {
//   steps.push({ type: 'compare', value: [i, j] });
//   if (i > mid) {
//     steps.push({ type: 'swap', value: [k, j] });

//     a[k] = newArray[j];
//     steps.push({ type: 'done', value: [k, j] });

//     j++;
//   } else if (j > end) {
//     steps.push({ type: 'swap', value: [k, i] });

//     a[k] = newArray[i];
//     steps.push({ type: 'done', value: [k, i] });

//     i++;
//   } else if (newArray[i] < newArray[j]) {
//     steps.push({ type: 'swap', value: [k, i] });
//     a[k] = newArray[i];
//     steps.push({ type: 'done', value: [k, i] });
//     i++;
//   } else {
//     steps.push({ type: 'swap', value: [k, j] });
//     a[k] = newArray[j];
//     steps.push({ type: 'done', value: [k, j] });
//     j++;
//   }
// }

// for (let k = start; k <= end; k++) {
//   steps.push({ type: 'compare', value: [i, j] });
//   if (i > mid) {
//     steps.push({ type: 'swap', value: [k, j] });

//     a[k] = newArray[j];
//     steps.push({ type: 'done', value: [k, j] });

//     j++;
//   } else if (j > end) {
//     steps.push({ type: 'swap', value: [k, i] });

//     a[k] = newArray[i];
//     steps.push({ type: 'done', value: [k, i] });

//     i++;
//   } else if (newArray[i] < newArray[j]) {
//     steps.push({ type: 'swap', value: [k, i] });
//     a[k] = newArray[i];
//     steps.push({ type: 'done', value: [k, i] });
//     i++;
//   } else {
//     steps.push({ type: 'swap', value: [k, j] });
//     a[k] = newArray[j];
//     steps.push({ type: 'done', value: [k, j] });
//     j++;
//   }
// }
