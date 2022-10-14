import React from 'react';
import { User } from '../../types';
import Item from './Item';

type AdminItemProps = {
  user: User,
};

const AdminItem: React.FC<AdminItemProps> = ({ user }) => (
  <Item>{user.username}</Item>
);

export default AdminItem;
