import { createApp } from 'vue'
import { createMetaManager } from 'vue-meta'
import App from './App.vue'
import router from './router'
import GlobalState from './store'
import 'nprogress/nprogress.css'
import './index.css'

const app = createApp(App).use(router).provide('GlobalState',GlobalState).use(createMetaManager())

//await router.isReady()
app.mount('#app')
