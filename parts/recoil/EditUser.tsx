import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { userSelector } from './selectors';

type FormValues = {
  username: string;
  isAdmin: boolean;
};

type EditUsersProps = {
  userId: string;
};

function EditUser({ userId }: EditUsersProps) {
  const formMethods = useForm<FormValues>();
  /**
   * useRecoilState returns the state and an updater function to update the state.
   * It accepts atoms or selectors.
   * In this case a selector (userSelector) is sent, which handles a sub-set of the
   * state (userSelector returns a single user by id and allows you to update that user).
   * This selector expects an argument (string corresponding to the user's id).
   * Using useRecoilState will re-render the component if the value in the atom is changed.
   */
  const [user, editUser] = useRecoilState(userSelector(userId));
  const [editing, setEditing] = useState(false);

  const onSubmit: SubmitHandler<FormValues> = ({ username, isAdmin }) => {
    if (username) {
      formMethods.reset();

      /**
       * Call the updater function and update an existing user.
       * This will cause any components (including this one) listening to changes
       * (e.g. useRecoilState or userRecoilValue) to the atom to re-render.
       */
      editUser({
        username, isAdmin,
      });
    }

    return null;
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
}

export default EditUser;
