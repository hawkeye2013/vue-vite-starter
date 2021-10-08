import { createApp } from 'vue';
import { createStore } from 'vuex';
import App from './App.vue';
import router from './router/index';

import 'virtual:windi.css';

const store = createStore({
  state() {
    return {
      count: 0,
    };
  },
  mutations: {
    increment(state: any) {
      state.count++;
    },
  },
});

const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');
