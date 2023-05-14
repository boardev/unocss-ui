# unocss-ui

A UI library for Vue3, built with unocss.

## Usage


```
pnpm add unocss unocss-ui @unocss/reset
```

Add `unocss-ui` in your main entry file.

```ts
import 'uno.css'
import '@unocss/reset/tailwind.css'
import 'unocss-ui/style.css'
import unocssui from 'unocss-ui'
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).use(unocssui).mount('#app')
```