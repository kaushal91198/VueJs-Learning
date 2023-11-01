<template>
    <div>
        <h1>{{ count }}</h1>
        <button v-on:click="count = count + 1">+</button>
        <button v-on:click="count = count - 1">-</button>
    </div>
</template>


<script>
export default {
    name: 'Watchers',
    data() {
        return {
            count: 0
        }
    },
    watch: {
        count(val, prevVal) {
            if (val > 5) {
                alert(`${prevVal} stop counting`)
            }
            // else{

            // }
        }
    }
}
</script>
