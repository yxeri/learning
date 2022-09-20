import React from 'react';
import { useRecoilValue } from 'recoil';
import { usersAtom } from './atoms';
import EditUser from './EditUser';

function UserList() {
  /**
   * useRecoilValue returns the state and subscribes to any changes in the selector or atom.
   * It's useful when you don't need the update function for the atom/selector.
   */
  const users = useRecoilValue(usersAtom);

  const items = users.map((user) => (
    <li key={user.username} style={{ display: 'flex', gap: '1rem', position: 'relative' }}>
      <p>{user.username}</p>
      <p>
        Created:
        {user.createdAt.toISOString()}
      </p>
      {user.updatedAt && (
        <p>
          Updated:
          {user.updatedAt.toISOString()}
        </p>
      )}
      <EditUser userId={user.id} />
    </li>
  ));

  return (
    <ul>{items}</ul>
  );
}

export default UserList;
