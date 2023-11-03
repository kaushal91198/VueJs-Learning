<template>
    <div>
        <counter></counter>
        <button v-on:click="increment">Increment</button>
        <button v-on:click="decrement">Decrement</button>
        <button v-on:click="decrementAsync">decrementAsync</button>
        <button v-on:click="incrementAsync">incrementAsync</button>
        <button v-on:click="incrementAnother">incrmentAnother</button>
        <div>{{ this.$store.state.count }}</div>
        <div>{{ count }}</div>
        <div>{{ getCountWithName('kaushal') }}</div>
    </div>
</template>


<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
    name: "VueXComponent",
    mounted() {
        console.log(this.$store.state.count, 'this.$store.state')
    },
    beforeRouteLeave() {
        console.log(this.$store, 'beforeRouteLeave')
    },
    beforeRouteEnter(sdf, sdf2, next) {
        next(vm => {
            console.log(sdf, 'sdf')
            console.log(sdf2, 'sdf2')
            console.log(vm, 'vm')
            console.log(vm.$store, 'beforeRouteEnter')
        })
    },
    computed: {
        // count() {
        //     console.log(this.$store.state.count)
        //     return this.$store.state.count
        // },
        ...mapState({
            count: (state) => state.count
        }),
        ...mapGetters({
            getCountWithName: 'getCountWithName'
        }),

    },
    methods: {
        // increment() {
        //     console.log(this.$store.getters.getCount, 'this.$store.getters.getCount')
        //     console.log(this.$store.getters.getCountWithName('kaushal'), 'this.$store.getters.getCountWithName')

        //     this.$store.state.count++
        //     // we can also do this way
        //     this.$store.commit('increment')
        // },
        // incrementAsync() {
        //     this.$store.dispatch({
        //         type: "increment",
        //         value: 3
        //     }).then(() => {
        //         console.log("Promise executed")
        //     })
        // },
        incrementAnother() {
            this.$store.dispatch({
                type: "anotherIncrementMethod",
                value: 3
            })
        },
        decrement() {
            this.$store.commit('decrement', 2)
        },
        decrementAsync() {
            setTimeout(() => {
                this.$store.dispatch({
                    type: "decrement",
                    value: 3
                })
            }, 3000);
        },
        ...mapActions({
            increment: 'increment'
        }),
        ...mapMutations({
            incrementAsync: 'increment'
        })
    },

};
</script>