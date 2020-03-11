<template>
    <div>
<!--        <div>Token</div>-->
<!--        <div>{{token}}</div>-->
        <div>Message</div>
        <div>{{$store.getters.message}}</div>
<!--        <div>주변 약국</div>-->
        <button @click="$store.dispatch('startSSE')">Subscribe</button>
        <button @click="$store.dispatch('stopSSE')">Unsubscribe</button>
<!--        <div id="location">-->
<!--            <label>내 위치 찾기</label>-->
<!--            <button @click="setMyLocation"></button>-->
<!--        </div>-->
    </div>
</template>

<script>
    import Vue from 'vue'
    import Component from 'vue-class-component'

    @Component
    export default class Home extends Vue {
        get token () {
            return this.$store.getters.token
        }
        mounted() {
            console.log('initializing')
        }
        setMyLocation () {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(position => {
                    console.log('Latitude: ', position.coords.latitude)
                    console.log('Longitude: ', position.coords.longitude)
                });
            } else {
                alert("위치서비스 권한을 주세요.")
            }
        }
    }
</script>

<style>
    #location label {
        margin-right: 10px;
    }
    #location button {
        width: 20px;
        height: 20px;
        background-image: url("../assets/blue-location-icon.png");
        background-repeat: round;
    }
</style>
