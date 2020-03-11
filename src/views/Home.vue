<template>
    <div>
        <div>Message</div>
        <div>{{$store.getters.message}}</div>
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
