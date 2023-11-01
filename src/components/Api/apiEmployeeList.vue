<template>
    <div>
        <AddProduct :refetchProduct="productsFetch" />
        <input placeholder="Search products..." v-model="search" @input="productSearch" />
        <table>
            <thead>
                <th>
                <td>No.</td>
                <td>title</td>
                <td>description</td>
                <td>category</td>
                </th>
            </thead>
            <tbody>
                <tr v-for="employee in employees" :key="employee.id">
                    <td>
                        {{ employee.id }}
                    </td>
                    <td>
                        {{ employee.title }}
                    </td>
                    <td>
                        {{ employee.description }}
                    </td>
                    <td>
                        {{ employee.category }}
                    </td>
                    <td>
                        <router-link :to="`/employee/${employee.id}`">View</router-link>
                    </td>
                    <td>
                        <button v-on:click="productsDelete(employee.id)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import Vue from 'vue'
import VueAxios from 'vue-axios'
import axios from 'axios'
Vue.use(VueAxios, axios)
import AddProduct from './postApi.vue'
export default {
    name: 'EmployeeList',
    data() {
        return {
            employees: [],
            search: ''
        }
    },
    components: {
        AddProduct
    },
    mounted() {
        this.productsFetch()
    },
    methods: {
        productSearch() {
            Vue.axios.get(`https://dummyjson.com/products/search?q=${this.search}`).then((result) => {
                this.employees = result.data.products
            }).catch((err) => {
                console.log(err)
            });
        },
        productsFetch() {
            Vue.axios.get("https://dummyjson.com/products").then((result) => {
                this.employees = result.data.products
            }).catch((err) => {
                console.log(err)
            });
        },
        productsDelete(id) {
            Vue.axios.delete(`https://dummyjson.com/products/${id}`).then((result) => {
                this.productsFetch()
                console.log(result)
            }).catch((err) => {
                console.log(err)
            });
        }
    }
}
</script>