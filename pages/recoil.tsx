import React from 'react';
import UserList from '../parts/recoil/UserList';
import AdminList from '../parts/recoil/AdminList';
import AddUser from '../parts/recoil/AddUser';

function RecoilPage() {
  return (
    <div>
      <div>
        <AddUser />
      </div>
      <div>
        <h2>Admins</h2>
        <AdminList />
      </div>
      <div>
        <h2>All users</h2>
        <UserList />
      </div>
    </div>
  );
}

export default RecoilPage;
