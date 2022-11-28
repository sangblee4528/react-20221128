import React, { useState } from 'react';
import './style.css';
import BasicTextFields from './BasicTextFields';
import Button from '@mui/material/Button';

export default function App() {
  const [textValue, setTextValue] = useState('');
  const handleSetValue = (e) => {
    setTextValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Submit');
  };

  const handleButtonClick = (e) => {
    alert('Clicked');
  };

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <from onSubmit={handleSubmit}>
        <textarea
          placeholder="여기에 입력하세요."
          value={textValue}
          onChange={(e) => handleSetValue(e)}
        ></textarea>
        <Button variant="contained" onClick={handleButtonClick}>
          Click me
        </Button>
      </from>
      <p>{textValue}</p>
    </div>
  );
}
