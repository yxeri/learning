export type User = {
  username: string;
  name?: {
    firstName: string,
    lastName?: string,
  };
  age: string | number;
};
