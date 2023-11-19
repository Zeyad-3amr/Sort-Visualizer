import { FC } from 'react';
import { BubbleSort } from './BubbleSort';
import { MergeSort } from './MergeSort';
import { Charts } from '../Charts/Charts';
import classes from '../Charts/Charts.module.css';
import cssclass from './SortVisualizer.module.css';
import { QuickSort } from './QuickSort';
import React, { useEffect, useState } from 'react';

export interface SortVisualizerProps {}

export const SortVisualizer: FC<SortVisualizerProps> = () => {
  const [array, setArray] = useState<number[]>([]);
  const [speed, setSpeed] = useState(25);

  useEffect(() => {
    setArray(Array.from({ length: 40 }, () => Math.floor(Math.random() * 300)));
  }, []);
  const generateArrayHandler = () => {
    const newArray = Array.from({ length: 40 }, () => Math.floor(Math.random() * 300));
    setArray(newArray);
  };
  const bar = document.getElementsByClassName(
    `${classes.chart}`
  ) as HTMLCollectionOf<HTMLElement>;

  const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

  const speedHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSpeed(+e.target.value < 1 ? 1 : +e.target.value);
  };

  ////////////////////////////////////////////////////////////////////////////////////////
  //Merge Sort Handler
  ///////////////////////////////////////////////////////////////////////////////////////

  const MergeSortHandler = async () => {
    const x: number[] = [];
    const newSteps = MergeSort(array, x, 0, array.length - 1);

    console.log(newSteps);

    for (let k = 0; k < newSteps!.length; k++) {
      const { type, value } = newSteps![k];

      await delay(speed);
      if (type === 'compare') {
        bar[value[1]].style.backgroundColor = 'red';
        bar[value[0]].style.backgroundColor = 'red';
      } else if (type === 'done') {
        bar[value[0]].style.backgroundColor = ' rgb(65, 188, 195)';
        bar[value[1]].style.backgroundColor = ' rgb(65, 188, 195)';
      } else if (type === 'swap') {
        bar[value[0]].style.backgroundColor = 'yellow';
        bar[value[0]].style.height = `${value[1]}px`;
        bar[value[0]].children[0].textContent = value[1];
      }
    }
  };
  const B_QSortVisualizer = async (newSteps: any) => {
    for (let k = 0; k < newSteps!.length; k++) {
      const {
        type,
        value: [i, j],
      } = newSteps![k];
      if (type === 'compare') {
        bar[j].style.backgroundColor = 'red';
        bar[i].style.backgroundColor = 'red';
      } else if (type === 'done') {
        bar[i].style.backgroundColor = ' rgb(65, 188, 195)';
        bar[j].style.backgroundColor = ' rgb(65, 188, 195)';
      } else if (type === 'swap') {
        bar[j].style.backgroundColor = 'yellow';
        bar[i].style.backgroundColor = 'red';

        let tempBar = bar[i].style.height;
        bar[i].style.height = bar[j].style.height;
        bar[j].style.height = tempBar;

        let tempHeight = bar[i].children[0].textContent;
        bar[i].children[0].textContent = bar[j].children[0].textContent;
        bar[j].children[0].textContent = tempHeight;
      }
      await delay(speed);
    }
  };

  ///////////////////////////////////////////////////////////////////////////////////////
  //Bubble Sort Handler
  ///////////////////////////////////////////////////////////////////////////////////////

  const BubbleSortHandler = async () => {
    const newSteps = BubbleSort(array);
    await B_QSortVisualizer(newSteps);
  };

  ///////////////////////////////////////////////////////////////////////////////////////
  //Quick Sort Handler
  ///////////////////////////////////////////////////////////////////////////////////////

  const QuickSortHandler = async () => {
    const newSteps = QuickSort(array, 0, array.length - 1);
    await B_QSortVisualizer(newSteps);
  };

  return (
    <div>
      <div className={cssclass.container}>
        {array.map((el: any) => (
          <Charts height={el} />
        ))}
      </div>
      <div className={cssclass.buttons}>
        <div className={cssclass.Sortbuttons}>
          <button className={cssclass.btn} onClick={MergeSortHandler}>
            Merge Sort
          </button>

          <button className={cssclass.btn} onClick={BubbleSortHandler}>
            Bubble Sort
          </button>
          <button className={cssclass.btn} onClick={QuickSortHandler}>
            Quick Sort
          </button>
        </div>
        <div>
          <button className={cssclass.btn} onClick={generateArrayHandler}>
            Generate New Array
          </button>

          <label htmlFor="speed">Speed</label>
          <input
            id="speed"
            name="speed"
            type="number"
            min="1"
            onChange={speedHandler}
            value={speed}
          />
        </div>
      </div>
    </div>
  );
};
