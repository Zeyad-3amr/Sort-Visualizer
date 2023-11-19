const Partition = (a: number[], start: number, end: number, steps: any[]) => {
  let pivot = a[end];
  let pindex = start;

  for (let i = start; i < end; i++) {
    steps.push({ type: 'compare', value: [i, end] });
    if (a[i] <= pivot) {
      steps.push({ type: 'swap', value: [i, pindex] });
      let temp = a[i];
      a[i] = a[pindex];
      a[pindex] = temp;

      steps.push({ type: 'done', value: [i, pindex] });
      pindex += 1;
    }
    steps.push({ type: 'done', value: [i, end] });
  }

  steps.push({ type: 'swap', value: [end, pindex] });
  let temp = a[pindex];
  a[pindex] = a[end];
  a[end] = temp;

  steps.push({ type: 'done', value: [end, pindex] });

  return pindex;
};

export const QuickSort = (a: number[], start: number, end: number, steps: any[] = []) => {
  if (start >= end) return;
  let pindex = Partition(a, start, end, steps);
  QuickSort(a, start, pindex - 1, steps);
  QuickSort(a, pindex + 1, end, steps);

  return steps;
};
