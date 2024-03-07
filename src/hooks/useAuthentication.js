import { useContext } from 'react';
import AuthContext from '../AuthContenxt';
import MockedAuthApi from '../util/MockedAuthApi';

export default function useAuthentication() {
  const [auth, setAuth] = useContext(AuthContext);

  const login = async (login, password) => {
    const authenticatedUser = await MockedAuthApi.login(login, password);
    setAuth(authenticatedUser);
  };

  const logout = async () => {
    await MockedAuthApi.logout();
    setAuth(undefined);
  };

  return [auth, login, logout];
}
