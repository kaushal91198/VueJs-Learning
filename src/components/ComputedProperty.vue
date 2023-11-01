<template>
    <div>
        <h1>Computed property</h1>
        <h2>{{ getResult }}</h2>
    </div>
</template>

<script>
export default {
    name: 'ComputedProperty',
    data() {
        return {
            dollars: 100,
            rupeeVal: 70,
            discount: 10
        }
    },
    computed: {
        getResult() {
            return this.dollars * this.rupeeVal - this.discount
        }
    }
}
</script>