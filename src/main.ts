import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import './firebase-config'

Vue.config.productionTip = false

if ("serviceWorker" in navigator) {
    const sw = navigator.serviceWorker
    sw.addEventListener('message', event => {
        store.state.message = event.data
    })
}

// const channel = new BroadcastChannel('sw-messages');
// channel.addEventListener('message', event => {
//     store.state.message = event.data
// })

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
