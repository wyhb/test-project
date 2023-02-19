import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/reset.css'
import TestPlugin from './test/TestPlugin'

const app = createApp(App)
app.use(router)
// 自定义Vue插件
app.use(TestPlugin)
// app.provide & inject
app.mount('#app')
