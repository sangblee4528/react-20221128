import React, { useState } from 'react';

function InputSample() {
  const [inputs, setInputs] = useState({
    name01: '',
    name02: '',
  });

  const { name01, name02 } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value, // name 키를 가진 값을 value로 설정
    });
  };

  const onReset = () => {
    setInputs({
      name01: '',
      name02: '',
    });
  };

  return (
    <div>
      <input name="name01" onChange={onChange} value={name01} />
      <input name="name02" onChange={onChange} value={name02} />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name01} :: {name02}
      </div>
    </div>
  );
}

export default InputSample;
