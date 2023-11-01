<template>
    <div>
        <p v-html="message"></p>
        <p v-bind="$attrs">attributes</p>
    </div>
</template>

<script>
export default {
    name: 'Props',
    inheritAttrs:false,
    props: ['message'],
}
</script>