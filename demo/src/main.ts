import 'uno.css'
import '@unocss/reset/tailwind.css'
import 'unocss-ui/style.css'

// import unocssui from 'unocss-ui'
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
// app.use(unocssui)
app.mount('#app')
