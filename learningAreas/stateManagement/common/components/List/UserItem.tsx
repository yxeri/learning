import React from 'react';
import EditUser from '../../../context/components/forms/EditUser';
import { User } from '../../types';
import Item from './Item';

type UserItemProps = {
  user: User,
};

const UserItem: React.FC<UserItemProps> = ({ user }) => (
  <Item>
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
  </Item>
);

export default UserItem;
