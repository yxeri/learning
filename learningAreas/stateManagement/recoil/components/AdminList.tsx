import React from 'react';
import { useRecoilValue } from 'recoil';
import { adminsSelector } from '../atoms/selectors';
import List from '../../common/components/List/List';
import AdminItem from '../../common/components/List/AdminItem';

const AdminList = () => {
  /**
   * useRecoilValue returns the state and subscribes to any changes in the selector or atom.
   * It's useful when you don't need the update function for the atom/selector.
   */
  const admins = useRecoilValue(adminsSelector);

  const items = admins.map((admin) => <AdminItem key={admin.id} user={admin} />);

  return (
    <List>{items}</List>
  );
};

export default AdminList;
