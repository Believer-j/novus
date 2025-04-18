import App from './App'
console.log('---- main.js ------')
// uv-ui 工具库
import uvUI from '@/uni_modules/uv-ui-tools'
import utils from './utils/index.js'
import store from './store/index.js'
import cookie from './utils/cookie.js'
import web3 from './web3'
uni.$web3 = web3;
// 国际化
import i18n from './locale/index.js'
import { createSSRApp } from 'vue'


export function createApp() {
  const app = createSSRApp(App)
  app.use(uvUI);
  app.use(i18n)
  app.config.globalProperties.$utils = utils
  app.config.globalProperties.$store = store
  app.config.globalProperties.$cookie = cookie
  app.config.globalProperties.$web3 = web3
  return {
    app
  }
}
