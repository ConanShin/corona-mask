import * as firebase from "firebase"
import store from "./store";

const config = {
    apiKey: "AIzaSyBfZ8tDwgMy9dhv6thXKZwR47dg8Zn3xao",
    authDomain: "corona-mask-market.firebaseapp.com",
    databaseURL: "https://corona-mask-market.firebaseio.com",
    projectId: "corona-mask-market",
    storageBucket: "corona-mask-market.appspot.com",
    messagingSenderId: "153381804155",
    appId: "1:153381804155:web:b4b3e958dbc679d88baade",
    measurementId: "G-8DZXL8DMR5"
}
firebase.initializeApp(config)

if (firebase.messaging.isSupported()) {
    const messaging = firebase.messaging()
    const keyPair = 'BEbDotnZHQRCXVv8Pu8iWX6ODK5iuoHiauRh5pEL2_Pq3ZHB9KN4PL2N99-CUsjE1pkda4fu-d62Vbz342viZBY'
    messaging.usePublicVapidKey(keyPair)
    messaging.requestPermission().then(() => {
        console.log('Notification permission granted.')
        messaging.getToken().then((token) => {
            console.log(token)
            store.state.token = token
        })
    }).catch((err) => {
        console.log('Unable to get permission to notify.', err)
    })
} else {
    store.state.token = 'Notification is not supported'
    console.log('Firebase messaging is not supported')
}
