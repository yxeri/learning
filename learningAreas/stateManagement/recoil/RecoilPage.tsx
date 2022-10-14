import React from 'react';
import { RecoilRoot } from 'recoil';
import AdminList from './components/AdminList';
import UserList from './components/UserList';
import AddUser from './components/forms/AddUser';
import Section from '../common/components/Section';

const RecoilPage: React.FC = () => (
  /**
   * Usage of any Recoil hooks have to be done within RecoilRoot
   */
  <RecoilRoot>
    <div>
      <AddUser />
      <Section title="Admins">
        <AdminList />
      </Section>
      <Section title="All users">
        <UserList />
      </Section>
    </div>
  </RecoilRoot>
);

export default RecoilPage;
