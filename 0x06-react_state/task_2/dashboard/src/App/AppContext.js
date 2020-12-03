import { createContext } from 'react';

export const defaultUser = {
  email: '',
  password: '',
  isLoggedIn: false
};

export const logOut = () => {};

const appContext = createContext({ defaultUser, logOut });

export default appContext;