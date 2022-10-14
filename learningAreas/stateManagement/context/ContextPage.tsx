import React from 'react';
import { UsersProvider } from './UsersContext';
import Section from '../common/components/Section';
import AdminList from './components/AdminList';
import UserList from './components/UserList';
import AddUser from './components/forms/AddUser';

const ContextPage: React.FC = () => (
  <UsersProvider>
    <div>
      <AddUser />
      <Section title="Admins">
        <AdminList />
      </Section>
      <Section title="All users">
        <UserList />
      </Section>
    </div>
  </UsersProvider>
);

export default ContextPage;
