import { defineStore } from 'pinia';
import { api } from 'boot/axios';

type User = {
  name: string;
};

export const userStore = defineStore('userStore', {
  state: () => ({
    user: {} as User,
  }),

  actions: {
    async fetchUser() {
      const user = await api.get('/');
      this.user.name = user.data.results[0].name.first;
    },
  },
});
