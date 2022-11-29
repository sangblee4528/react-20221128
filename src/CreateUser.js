import React from 'react';

function CreateUser({ username, email, onChange, onCreate }) {
  return (
    <div>
      <input name="username" value={username} />
      <input name="email" value={email} />
      <button onClick={onCreate}>등록</button>
    </div>
  );
}

export default CreateUser;
