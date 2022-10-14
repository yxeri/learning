import { atom } from 'recoil';
import { User } from '../../common/types';
import defaultData from '../../common/defaultData';

/**
 * An atom specifies a state. Key is the unique id for the data and default the default value.
 * You use the atom as an argument when using the different
 * Recoil hooks (e.g. useRecoilState, useRecoilValue).
 */
const usersAtom = atom<User[]>({
  key: 'users',
  default: defaultData,
});

export default usersAtom;
