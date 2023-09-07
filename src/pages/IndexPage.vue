<template>
  <q-page class="row items-center justify-evenly"> hi </q-page>
</template>

<script lang="ts" setup>
import { userStore } from 'stores/example-store';
import { useMeta } from 'quasar';

defineOptions({
  async preFetch({ store }) {
    let user = userStore(store); // initializing pinia store in preFetch
    await user.fetchUser(); // fetching user data
  },
});

let user = userStore(); // initializing pinia store in setup, the store data persists from preFetch
useMeta(() => {
  return {
    title: user.user.name, // now we can pass that data in our meta tags
  };
});
</script>
