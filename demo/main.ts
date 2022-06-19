import { createApp } from 'vue'
import App from './App.vue'
import {createXUi} from "../src";


createApp(App)
    .use(createXUi())
    .mount('#app')
