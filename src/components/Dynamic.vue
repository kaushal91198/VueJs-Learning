<template>
    <div>
        <h1>Dynamic page</h1>
        <component :is="cmp"></component>
        <button v-on:click="ToggleFunc('Signup')">Signup</button>
        <button v-on:click="ToggleFunc('SignIn')">SignIn</button>
    </div>
</template>
  
<script>
import SignIn from './SignIn.vue';
import Signup from './Signup.vue';

export default {
    name: 'Dynamic',
    components: {
        SignIn,
        Signup
    },
    data() {
        return {
            cmp: "Signup"
        };
    },
    methods: {
        ToggleFunc(page) {
            this.cmp = page
        }
    }
}
</script>
  