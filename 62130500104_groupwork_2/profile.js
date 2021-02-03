    const app = {
        data() {
            return {
                msg: 'Hello, Vue3'
               ,name: 'Aunnop Chatkhamchucharoen'
                ,faculty: 'Information Technology Student'
                ,rating: '7.6'
                ,arti: '72'
                ,follow: '104k'
                ,img: "./images/2.jpg"
                ,lbutt: 'Like'
                ,rbutt: 'Follow'
                ,info1: 'Article'
                ,info2: 'Follower'
                ,info3: 'Ratings'
            }
        }

    }
    Vue.createApp(app).mount('#app')