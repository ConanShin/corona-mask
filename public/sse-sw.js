const BASE_URL = 'http://52.79.142.42:5000'
// const BASE_URL = 'https://localhost:5000'

const getUUID = () => { // UUID v4 generator in JavaScript (RFC4122 compliant)
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 3 | 8)
        return v.toString(16)
    })
}
const UUID = getUUID()
sessionStorage.setItem('uuid', UUID)
const eventSource = new EventSource(`${BASE_URL}/api/subscribe/${UUID}`)
// const channel = new BroadcastChannel('sw-messages')
console.log('Registered SW')
eventSource.onmessage = ({data}) => {
    // channel.postMessage(data)
    console.log('data received from sw: ', data)
    self.clients.matchAll().then(clients => {
        const message = {
            status: 'GOOD',
            text: data,
            uuid: UUID
        }
        clients.forEach(client => client.postMessage(message))
    })
}

eventSource.onerror = event => {
    console.log('error catched from sw: ', event)
    self.clients.matchAll().then(clients => {
        const message = {
            status: 'BAD',
            text: 'Error occurred',
            uuid: UUID
        }
        clients.forEach(client => client.postMessage(message))
    })
}

