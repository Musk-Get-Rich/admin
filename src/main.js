import {createApp} from 'vue'
import App from './App.vue'
import "normalize.css"
import 'virtual:uno.css'
import store from "@/store"
import router from "@/router"
import {loadSvg} from "./icons/index.js"
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import "./router/permission.js"

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import Avue from '@smallwei/avue';
import '@smallwei/avue/lib/index.css';

import '@/assets/css/init.scss'

const app = createApp(App)

// 注册所有 el icon
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

import zhLocale from '@smallwei/avue/lib/locale/lang/zh'

app.use(Avue, {
  locale: zhLocale,
});

app.use(ElementPlus, {
  locale: zhCn,
})
loadSvg(app)

app.use(store)
app.use(router)
app.use(i18n)

app.mount('#app')
