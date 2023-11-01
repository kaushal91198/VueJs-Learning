<template>
    <div>
        <h3>Add products</h3>
        <form @submit="submitForm">
            <input type="text" v-model="title" />
            <button type="submit">Submit</button>
        </form>
    </div>
</template>

<script>
import Vue from 'vue'
import VueAxios from 'vue-axios'
import axios from 'axios'
Vue.use(VueAxios, axios)
export default {
    name: 'addProduct',
    props: ['refetchProduct'],
    data() {
        return {
            title: '',
        }
    },
    methods: {
        submitForm(e) {
            e.preventDefault()
            Vue.axios.post("https://dummyjson.com/products/add", {
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    title: this.title,
                })
            }).then((result) => {
                console.log(result)
                this.refetchProduct()
            }).catch((err) => {
                console.log(err)
            });
        }
    }

}
</script>