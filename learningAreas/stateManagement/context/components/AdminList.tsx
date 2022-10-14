import React, { useContext } from 'react';
import { UsersContext } from '../UsersContext';
import AdminItem from '../../common/components/List/AdminItem';
import List from '../../common/components/List/List';

const AdminList = () => {
  const [users] = useContext(UsersContext);
  const admins = users.filter((user) => user.isAdmin);

  const items = admins.map((admin) => <AdminItem key={admin.id} user={admin} />);

  return (
    <List>{items}</List>
  );
};

export default React.memo(AdminList);
