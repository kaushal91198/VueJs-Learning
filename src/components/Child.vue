<template>
    <div>
        <button v-on:click="updateTitle">Update parent title</button>
    </div>
</template>

<script>
export default {
    name: 'Child',
    methods: {
        updateTitle() {
            this.$emit("changeTitle", "Parent Updated")
        }
    }
}
</script>