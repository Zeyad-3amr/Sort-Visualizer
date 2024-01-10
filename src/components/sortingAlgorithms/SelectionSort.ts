interface Steps {
  type: string;
  value: [i: number, j: number];
}

export let steps: Steps[] = [];

export const SelectionSort = (array: number[]): Steps[] => {
  steps = [];
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
