import { DefaultValue, selector, selectorFamily } from 'recoil';
import { User, usersAtom } from './atoms';

/**
 * A selector that derives part of the state from atoms.
 * The key is the selector state's unique id.
 * get is a function that receives get (GetRecoilValue) as a parameter.
 * When this selector is used all the users are retrieved (get(usersAtom))
 * and filtered based on isAdmin
 */
const adminsSelector = selector({
  key: 'admins',
  get: ({ get }) => get(usersAtom).filter((user) => user.isAdmin),
});

/**
 * Compared to selector, selectorFamily also has a setter option.
 * This selector retrieves a single user based on the id argument.
 * The structure to allow a setter or getter to accept arguments is:
 * (params) => (Recoil functions) => call functions.
 * The setter updates usersAtom with the new user data.
 */
const userSelector = selectorFamily<Partial<User> | undefined, string>({
  key: 'user',
  get: (id) => ({ get }) => get(usersAtom).find((user) => user.id === id),
  set: (id) => ({ set, get }, update) => {
    const users = [...get(usersAtom)];

    if (!update || update instanceof DefaultValue) {
      return;
    }

    const userIndex = users.findIndex((user) => user.id === id);
    users[userIndex] = {
      ...users[userIndex],
      ...update,
      updatedAt: new Date(),
    } as User;

    set(usersAtom, users);
  },
});

export { adminsSelector, userSelector };
