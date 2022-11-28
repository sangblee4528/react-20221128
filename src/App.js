import React, { useState } from 'react';
import './style.css';
import BasicTextFields from './BasicTextFields';

export default function App() {
  const [textValue, setTextValue] = useState('');
  const handleSetValue = (e) => {
    setTextValue(e.target.value);
  };

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <textarea
        placeholder="여기에 입력하세요."
        value={textValue}
        onChange={(e) => handleSetValue(e)}
      ></textarea>
      <p>{textValue}</p>
    </div>
  );
}
