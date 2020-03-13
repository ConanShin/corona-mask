import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import './firebase-config'

Vue.config.productionTip = false

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register('./sse-sw.js').then((swr) => {
        console.log('sw registered', swr.active)
    })
    navigator.serviceWorker.addEventListener('message', async ({ data }) => {
        console.log('message received from main.ts: ', data)
        const { status, text, uuid } = data

        switch (status) {
            case 'GOOD':
                store.state.message = text
                break;
            case 'BAD':
                console.log(text)
                // await store.dispatch('stopSSE', uuid)
                break;
        }
    })
} else {
    console.log('No SERVICE WORKER')
}

// const isOnIOS = navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i);
// console.log('isOniOS: ', isOnIOS)
// if (isOnIOS) {
//     window.onpagehide = async () => {
//         await store.dispatch('stopSSE', myUUID)
//     }
// } else {
//     window.onbeforeunload = async () => {
//         await store.dispatch('stopSSE', myUUID)
//     }
// }

// const channel = new BroadcastChannel('sw-messages');
// channel.addEventListener('message', event => {
//     store.state.message = event.data
// })

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
