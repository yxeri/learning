import { atom } from 'recoil';

export type User = {
  username: string;
  isAdmin: boolean;
  createdAt: Date;
  id: string;
  updatedAt?: Date;
};

/**
 * An atom specifies a state. Key is the unique id for the data and default the default value.
 * You use the atom as an argument when using the different
 * Recoil hooks (e.g. useRecoilState, useRecoilValue).
 */
const usersAtom = atom<User[]>({
  key: 'users',
  default: [{
    username: 'default',
    isAdmin: false,
    createdAt: new Date('2022-06-07'),
    id: new Date('2022-06-07').toDateString(),
  }, {
    username: 'second default',
    isAdmin: true,
    createdAt: new Date('2021-05-03'),
    id: new Date('2021-05-03').toDateString(),
  }],
});

export { usersAtom };
