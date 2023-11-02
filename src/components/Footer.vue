<template>
    <div>
        <footer>
            <p>Author: Hege Refsnes</p>
            <p><a href="mailto:hege@example.com">hege@example.com</a></p>
        </footer>
        <teleport to="#footer"></teleport>
    </div>
</template>

<script>
export default {
    name: 'Footer',
}
</script>