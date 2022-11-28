import React from 'react';
import './style.css';
import MultilineTextFields from './MultilineTextFields';
import Hello from './Hello';
import Counter from './Counter';

export default function App() {
  return (
    <div>
      <Hello name="react" color="blue" />
      <Hello />
      <Counter />
      <p>Start editing to see some magic happen :)</p>
      <MultilineTextFields />
    </div>
  );
}
