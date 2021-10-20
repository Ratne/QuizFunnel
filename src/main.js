import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import 'bootstrap/dist/js/bootstrap.min'

import "../src/scss/index.scss";
createApp(App).use(store).mount('#app')
