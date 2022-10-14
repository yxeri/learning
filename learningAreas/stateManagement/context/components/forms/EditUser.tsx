import React, { useContext, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { UsersContext } from '../../UsersContext';

type FormValues = {
  username: string;
  isAdmin: boolean;
};

type EditUsersProps = {
  userId: string;
};

const EditUser: React.FC<EditUsersProps> = ({ userId }) => {
  const formMethods = useForm<FormValues>();
  const [editing, setEditing] = useState(false);
  const [users, setUsers] = useContext(UsersContext);
  const userIndex = users.findIndex(({ id }) => id === userId);
  const user = users[userIndex];

  const onSubmit: SubmitHandler<FormValues> = ({ username, isAdmin }) => {
    if (username) {
      const updatedUsers = [...users];

      updatedUsers[userIndex] = { ...updatedUsers[userIndex], username, isAdmin };

      setUsers(updatedUsers);
      setEditing(false);

      formMethods.reset();
    }
  };

  return (
    <>
      <button type="button" onClick={() => setEditing(!editing)}>Edit</button>
      {editing && (
        <form
          onSubmit={formMethods.handleSubmit(onSubmit)}
          style={{
            position: 'absolute',
            height: '100%',
            width: '100%',
            backgroundColor: 'white',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <div>
            <label htmlFor="username">
              Username
              <input {...formMethods.register('username')} type="text" id="username" defaultValue={user?.username} />
            </label>
          </div>
          <div>
            <label htmlFor="isAdmin">
              Admin?
              <input {...formMethods.register('isAdmin')} type="checkbox" id="isAdmin" defaultChecked={user?.isAdmin} />
            </label>
          </div>
          <div style={{ display: 'flex', gap: '.5rem' }}>
            <button type="button" onClick={() => setEditing(false)}>Cancel</button>
            <button type="submit">Add</button>
          </div>
        </form>
      )}
    </>
  );
};

export default EditUser;
