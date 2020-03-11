const BASE_URL = 'http://52.79.142.42:5000'
// const BASE_URL = 'https://localhost:5000'

const getUUID = () => { // UUID v4 generator in JavaScript (RFC4122 compliant)
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 3 | 8)
        return v.toString(16)
    })
}
const UUID = getUUID()
const eventSource = new EventSource(`${BASE_URL}/api/subscribe/${UUID}`)
const channel = new BroadcastChannel('sw-messages')
eventSource.onmessage = ({data}) => {
    channel.postMessage(data)
}
