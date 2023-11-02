<template>
    <div>
        <p>This is some content from the parent component</p>
        <SlotsChild header="This is the child props">
            <a href="https://www.youtube.com/watch?v=Sr7d4hQh7D8&list=PL8p2I9GklV45qwTH-mdzllUuFRJO-euYn&index=35">Code step
                by step</a>
            <p>Children component</p>
            <h3>Header component</h3>
        </SlotsChild>
        <SlotMultipleChild>
            <template v-slot:header>
                <p>To bind the header component</p>
            </template>
            <template v-slot:main>
                <p>To bind the Main component</p>
            </template>
            <template v-slot:footer>
                <p>To bind the Footer component</p>
            </template>
        </SlotMultipleChild>
    </div>
</template>
  
<script>
import SlotsChild from './SlotChild.vue';
import SlotMultipleChild from './SlotMultipleChild.vue';


export default {
    name: 'Slots',
    components: {
        SlotsChild,
        SlotMultipleChild
    }
}
</script>
  