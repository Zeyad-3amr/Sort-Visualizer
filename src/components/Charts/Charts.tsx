import { FC } from 'react';
import classes from './Charts.module.css';
export interface ChartsProps {
  height: number;
}

export const Charts: FC<ChartsProps> = ({ height }) => {
  return (
    <div className={classes.chart} style={{ height: `${height}px` }}>
      <p className={classes.number}>{height}</p>
    </div>
  );
};
