import { api } from './axios';

export async function fetchUser() {
  const user = await api.get('/');
  return user.data.results[0].name.first;
}
