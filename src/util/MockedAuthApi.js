import { AxiosError } from 'axios';
import AuthError from './AuthError';

const users = [
  {
    id: 1,
    login: 'glumaks',
    username: 'Masyaaaasya',
    password: 'qwerty007',
  },
];

export default class MockedAuthApi {
  static async login(login, password) {
    try {
      //Requesting /api/v1/auth/login with body {login: $login, password: $password}
      const user = users.find((u) => u.login === login && u.password === password);
      if (!user) {
        throw new AxiosError('Incorrect login or password', 401);
      }

      return user;
    } catch (e) {
      if (e.code === 401) {
        throw new AuthError(e.message);
      }
    }
  }

  static async logout() {}
}
