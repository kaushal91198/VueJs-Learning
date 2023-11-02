<template>
    <div>
        <draggable v-model="myArray" group="people" @start="drag = true" @end="drag = false" :move="checkMove">
            <div v-for="element in myArray" :key="element.id">{{ element.name }}</div>
        </draggable>
    </div>
</template>

<script>
import draggable from 'vuedraggable';
export default {
    name: "VueDraggable",
    components: {
        draggable
    },
    data() {
        return {
            myArray: [
                {
                    id: 1,
                    name: 'name 1'
                },
                {
                    id: 2,
                    name: 'name 2'
                },
                {
                    id: 3,
                    name: 'name 3'
                },
            ]
        }
    },
    methods: {
        checkMove(asdas) {
            console.log(asdas,"SDfnj")
        }
    }

};
</script>