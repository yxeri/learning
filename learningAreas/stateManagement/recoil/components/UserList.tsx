import React from 'react';
import { useRecoilValue } from 'recoil';
import usersAtom from '../atoms/usersAtom';
import List from '../../common/components/List/List';
import UserItem from '../../common/components/List/UserItem';

const UserList = () => {
  /**
   * useRecoilValue returns the state and subscribes to any changes in the selector or atom.
   * It's useful when you don't need the update function for the atom/selector.
   */
  const users = useRecoilValue(usersAtom);

  const items = users.map((user) => <UserItem key={user.id} user={user} />);

  return (
    <List>{items}</List>
  );
};

export default UserList;
