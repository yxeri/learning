import React, { useContext, useId } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { UsersContext } from '../../UsersContext';

type FormValues = {
  username: string;
  isAdmin: boolean;
};

const AddUser: React.FC = () => {
  const formMethods = useForm<FormValues>();
  const [users, setUsers] = useContext(UsersContext);
  const id = useId();

  const onSubmit: SubmitHandler<FormValues> = ({ username, isAdmin }) => {
    if (username) {
      setUsers([...users, {
        id,
        username,
        isAdmin,
        createdAt: new Date(),
      }]);

      formMethods.reset();
    }
  };

  return (
    <div>
      <form onSubmit={formMethods.handleSubmit(onSubmit)}>
        <h2>Create new user</h2>
        <div>
          <label htmlFor="username">
            Username
            <input {...formMethods.register('username')} type="text" id="username" />
          </label>
        </div>
        <div>
          <label htmlFor="isAdmin">
            Admin?
            <input {...formMethods.register('isAdmin')} type="checkbox" id="isAdmin" />
          </label>
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddUser;
