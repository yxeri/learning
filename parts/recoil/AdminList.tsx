import React from 'react';
import { useRecoilValue } from 'recoil';
import { adminsSelector } from './selectors';

function AdminList() {
  /**
   * useRecoilValue returns the state and subscribes to any changes in the selector or atom.
   * It's useful when you don't need the update function for the atom/selector.
   */
  const admins = useRecoilValue(adminsSelector);

  const items = admins.map((admin) => <li key={admin.username} style={{ position: 'relative' }}>{admin.username}</li>);

  return (
    <ul>{items}</ul>
  );
}

export default React.memo(AdminList);
