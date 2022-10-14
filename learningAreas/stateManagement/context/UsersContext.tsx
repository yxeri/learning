import React, {
  Context, Dispatch, PropsWithChildren, SetStateAction, useMemo, useState,
} from 'react';
import { User } from '../common/types';
import defaultData from '../common/defaultData';

type UsersContextType = [User[], Dispatch<SetStateAction<User[]>>];

const defaultValue: UsersContextType = [[], () => {
}];

const UsersContext: Context<UsersContextType> = React.createContext<UsersContextType>(defaultValue);

const UsersProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [users, setUsers] = useState<User[]>(defaultData);
  const memoizedValue = useMemo((): UsersContextType => [users, setUsers], [users, setUsers]);

  return <UsersContext.Provider value={memoizedValue}>{children}</UsersContext.Provider>;
};

export { UsersContext, UsersProvider };
