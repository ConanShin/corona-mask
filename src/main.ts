import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import './firebase-config'

Vue.config.productionTip = false

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
        navigator.serviceWorker
            .register("/sse-sw.js")
            .then(() => {
                // console.log("서비스 워커가 등록되었다.")
            })
            .catch(error => {
                console.log(error)
            })
    })
}

const channel = new BroadcastChannel('sw-messages');
channel.addEventListener('message', event => {
    store.state.message = event.data
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
