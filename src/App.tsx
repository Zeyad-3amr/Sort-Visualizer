import React from 'react';
import { SortVisualizer } from './components/sortingAlgorithms/SortVisualizer';
import classes from './App.module.css';
const App: React.FC = () => {
  return (
    <div className={classes.container}>
      <SortVisualizer />
    </div>
  );
};

export default App;
