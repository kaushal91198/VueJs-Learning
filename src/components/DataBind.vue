<template>
    <div>
        <h1>{{ message }}</h1>
        <input type="text" v-model="message"/>
        <textarea type="text" v-model="message"/>
    </div>
</template>

<script>
export default {
    name: 'DataBind',
    data() {
        return {
            message: "Hi"
        }
    }
}
</script>