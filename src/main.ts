import { createApp } from 'vue'
import Entry from './App.vue'
import './style/index.scss'
import router from './router'
// import { instance, tokenInstance } from './plugins/http'

const app = createApp(Entry)

app.use(router)

// app.config.globalProperties.$http = instance
// app.config.globalProperties.$token_http = tokenInstance

app.mount('#app')
