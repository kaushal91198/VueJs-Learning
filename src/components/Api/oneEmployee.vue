<template>
    <div>
        <h1>employeeId {{ employeeId }}</h1>
        <h3>title {{ employee.title }}</h3>
        <h3>category {{ employee.category }}</h3>
        <p>description {{ employee.description }}</p>
        <span>discountPercentage {{ employee.discountPercentage }}</span>
        <h3>price {{ employee.price }}</h3>
        <img :src="employee.thumbnail" alt="Thumbnail"/>
    </div>
</template>

<script>
import Vue from 'vue'
import VueAxios from 'vue-axios'
import axios from 'axios'
Vue.use(VueAxios, axios)
export default {
    name: 'EmployeeList',
    data() {
        return {
            employee: null,
            employeeId: this.$route.params.id
        }
    },
    mounted() {
        this.productsFetch()
    },
    methods: {
        productsFetch() {
            Vue.axios.get(`https://dummyjson.com/products/${this.$route.params.id}`).then((result) => {
                this.employee = result.data
            }).catch((err) => {
                console.log(err)
            });
        },
    }
}
</script>