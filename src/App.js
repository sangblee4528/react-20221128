import React from 'react';
import './style.css';
import MultilineTextFields from './MultilineTextFields';
import Hello from './Hello';
import Counter from './Counter';
import InputSample from './InputSample';

export default function App() {
  return (
    <div>
      <Hello name="react" color="blue" />
      <Hello />
      <Counter />
      <InputSample />
      <p>Start editing to see some magic happen :)</p>
      <MultilineTextFields />
    </div>
  );
}
