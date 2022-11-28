import React from 'react';
import './style.css';
import MultilineTextFields from './MultilineTextFields';
import Hello from './Hello';

export default function App() {
  return (
    <div>
      <Hello name="react" color="blue" />
      <Hello />
      <p>Start editing to see some magic happen :)</p>
      <MultilineTextFields />
    </div>
  );
}
