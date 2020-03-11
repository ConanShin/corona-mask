import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: 'Loading...!',
        message: 'No Message'
    },
    mutations: {},
    actions: {
        readMarkets: async context => {
            const OPEN_API_SERVICE_KEY = 'alJI2tyVWfvJgufBQ1Q2DGYe5QUPWcPJ11x6W9hTWil3uLnIsK2ABRLn6FFnIZt5EzJI2lage2Aaa7ub9vLoWA%3D%3D'

            try {
                const response = await axios.get('http://openapi.tago.go.kr/openapi/service/BusLcInfoInqireService/getCtyCodeList?ServiceKey=' + OPEN_API_SERVICE_KEY)
                console.log(response)
            } catch (error) {
                console.log('error', error)
            }
        }
    },
    getters: {
        token: state => state.token,
        message: state => state.message
    },
    modules: {}
})

