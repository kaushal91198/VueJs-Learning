<template>
    <div>
        <h1 class="homestyle">Class and style Bindings</h1>
        <h1 v-bind:style="{ color: 'blue' }">Style bindingss</h1>
        <h1 v-bind:class="{ displayClass: show }">Class Bindings with object</h1>
        <h1 v-bind:class="[aClass]">Class Bindings with Array</h1>
        <h1 v-bind:class="[show ?'yesShow':'noShow']">Class Bindings with Array conditional</h1>


        <button v-on:click="displayFunc">Toggle </button>


    </div>
</template>

<script>

export default {
    name: 'Style',
    data() {
        return {
            show: true,
            aClass: 'arrayClass'
        }
    },
    methods: {
        displayFunc() {
            this.show = !this.show
        }
    }
}
</script>


<style scoped>
.homestyle {
    color: orange
}

.displayClass {
    background-color: crimson;
}

.arrayClass {
    background-color: blueviolet;
}
.yesShow{
    display: block;
}
.noShow{
    display: none;
}
</style>
