import React, { useId } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import usersAtom from '../../atoms/usersAtom';

type FormValues = {
  username: string;
  isAdmin: boolean;
};

const AddUser: React.FC = () => {
  const formMethods = useForm<FormValues>();
  /**
   * useRecoilState returns the state and an updater function to update the state.
   * It accepts atoms or selectors.
   * In this case an atom (usersAtom) is sent.
   * Using useRecoilState will re-render the component if the value in the atom is changed.
   */
  const [users, setUsers] = useRecoilState(usersAtom);
  const id = useId();

  const onSubmit: SubmitHandler<FormValues> = ({ username, isAdmin }) => {
    if (username) {
      /**
       * Call the updater function with the new state, in this case an array
       * with users with the new user appended.
       * This will cause any components (including this one) listening to changes
       * (e.g. useRecoilState or userRecoilValue) to the atom to re-render.
       */
      setUsers(users.concat([{
        id,
        username,
        isAdmin,
        createdAt: new Date(),
      }]));
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
