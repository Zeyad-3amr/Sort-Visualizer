const Merge = (
  a: number[],
  newArray: number[],
  start: number,
  mid: number,
  end: number,
  steps: any[]
) => {
  for (let i = start; i <= end; i++) {
    newArray[i] = a[i];
  }

  let i = start;
  let j = mid + 1;
  let k = start;

  while (i <= mid && j <= end) {
    steps.push({ type: 'compare', value: [i, j] });
    if (newArray[i] <= newArray[j]) {
      // steps.push({ type: 'swap', value: [k, i] });
      steps.push({ type: 'swap', value: [k, newArray[i]] });

      a[k] = newArray[i];
      steps.push({ type: 'done', value: [k, i] });
      i++;
    } else {
      // steps.push({ type: 'swap', value: [k, j] });
      steps.push({ type: 'swap', value: [k, newArray[j]] });

      a[k] = newArray[j];
      steps.push({ type: 'done', value: [k, j] });
      j++;
    }
    k++;
  }

  while (i <= mid) {
    // steps.push({ type: 'swap', value: [k, i] });

    steps.push({ type: 'swap', value: [k, newArray[i]] });

    a[k] = newArray[i];

    steps.push({ type: 'done', value: [k, i] });

    // steps.push({ type: 'done', value: [k, i] });

    k++;
    i++;
  }
  while (j <= end) {
    // steps.push({ type: 'swap', value: [k, j] });
    steps.push({ type: 'swap', value: [k, newArray[j]] });

    a[k] = newArray[j];

    steps.push({ type: 'done', value: [k, j] });
    // steps.push({ type: 'done', value: [k, j] });

    k++;
    j++;
  }

  return steps;
};

export const MergeSort = (
  a: number[],
  newArray: number[] = [],
  start: number,
  end: number,
  steps: any[] = []
) => {
  if (start === end) return;
  let mid = Math.floor(start + (end - start) / 2);

  MergeSort(a, newArray, start, mid, steps);
  MergeSort(a, newArray, mid + 1, end, steps);
  Merge(a, newArray, start, mid, end, steps);

  console.log(a);

  return steps;
};
