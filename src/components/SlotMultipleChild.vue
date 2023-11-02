<template>
    <div>
        <p>{{ header }}</p>
        <h1>Child Component Content</h1>
        <header>
            <slot name="header"></slot>
        </header>
        <content>
            <slot name="main"></slot>
        </content>
        <footer>
            <slot name="footer"></slot>
        </footer>
    </div>
</template>
  
<script>
export default {
    name: 'SlotMultipleChild',
    props: {
        header: String
    },
}
</script>
  