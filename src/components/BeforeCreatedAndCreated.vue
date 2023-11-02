<template>
    <div>
        Before Created And Created
    </div>
</template>
<script>
export default {
    name: 'BeforeCreatedAndCreated',
    data() {
        console.log(this.name, "data")
        return {
            name: "data"
        }
    },
    beforeCreate() {
        this.name = "sidhu"
        alert('before created')
        console.log(this.name, "before created")
    },
    created() {
        this.name = "munno"
        alert('created')
        console.log(this.name, "created")

    }
}
</script>