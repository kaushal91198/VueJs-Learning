<template>
    <div>
        <Props message="<h1>Hello kaushal</h1>" nonProps="'nsdjfnjksdnjn'"></Props>
    </div>
</template>

<script>
import Props from './Props.vue'
export default {
    name: 'HelloWorld',
    components: {
        Props
    }
}
</script>