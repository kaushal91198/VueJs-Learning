<template>
    <div>
        <h1>Main Dynamic component</h1>
        <button @click="tab = 'Java'">Load Java</button>
        <button @click="tab = 'Python'">Load Python</button>
        <button @click="tab = 'Node'">Load Node</button>
        <component :is="tab" />
    </div>
</template>
  
<script>
import Java from './JavaDynamic.vue'
import Node from './NodeContent.vue'
import Python from './PythonDynamic.vue'

export default {
    name: 'main',
    components: {
        Java,
        Node,
        Python
    },
    data() {
        return {
            tab: 'Java'
        }
    }
}
</script>