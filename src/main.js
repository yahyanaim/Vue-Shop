import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { reactive } from 'vue'
const globalState = reactive({
    cartItems: [],
    isCartView: false,
})
createApp(App).use(store).provide('GBstate', globalState).use(router).mount('#app')
