import React, { useState } from 'react';
import { User } from './types';
import { defaultUsers } from './dontEdit/exampleData';

const TypeScriptPage = () => {
  const [users, setUsers] = useState(null);

  const sortedByAge = users.sort((userA, userB) => (userA.age > userB.age ? 1 : -1));

  const items = sortedByAge.map((user: User) => {
    const { firstName, lastName } = user.name;

    return (
      <li>
        <p>{firstName}</p>
        <p>{lastName}</p>
        <p>
          Last name length:
          {lastName.length}
        </p>
      </li>
    );
  });

  const onClick = (event) => {
    // eslint-disable-next-line no-console
    console.log(`${event.target.text} was clicked`);

    setUsers(defaultUsers);
  };

  return (
    <div>
      <p>
        The first user:
        {users[0].username}
      </p>
      <ul>{items}</ul>
      <button type="button" onClick={onClick}>Get users</button>
    </div>
  );
};

export default TypeScriptPage;
