<template>
    <div>
        <h1>
            Before Mounted And Mounted
        </h1>
        <p>{{ counter }}</p>
        <button v-on:click="counter = counter + 1">Btn click</button>
    </div>
</template>
<script>
export default {
    name: 'BeforeMountedAndMounted',
    data() {
        return {
            counter: 0
        }
    },
    beforeUpdate() {
        console.log(this.counter, " before updated")
    },
    updated() {
        console.log(this.counter, " updated")
    }
}
</script>