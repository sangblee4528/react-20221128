import React, { useRef } from 'react';
import './style.css';
import MultilineTextFields from './MultilineTextFields';
import Hello from './Hello';
import Counter from './Counter';
import UserList from './UserList';

import InputSample from './InputSample';

export default function App() {
  const userlist = [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
    },
  ];

  const nextId = useRef(4);
  const onCreate = () => {
    nextId.current += 1;
  };

  return (
    <div>
      <Hello name="react" color="blue" />
      <Hello />
      <Counter />
      <InputSample />
      <UserList users={userlist} />
      <p>Start editing to see some magic happen :)</p>
      <MultilineTextFields />
    </div>
  );
}
