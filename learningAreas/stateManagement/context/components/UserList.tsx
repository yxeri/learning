import React, { useContext } from 'react';
import { UsersContext } from '../UsersContext';
import UserItem from '../../common/components/List/UserItem';
import List from '../../common/components/List/List';

const UserList = () => {
  const [users] = useContext(UsersContext);

  const items = users.map((user) => <UserItem key={user.id} user={user} />);

  return (
    <List>{items}</List>
  );
};

export default UserList;
