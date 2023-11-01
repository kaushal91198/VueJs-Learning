<template>
    <div class="hello">
        <h1>{{ header }}</h1>
        <p>
            {{ header }}
            <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
        </p>
        // to listen the event we use v-on
        <button v-on:click="helloFunc" v-on:mouseover="MouseFunc">Call Hello Function</button>
        <button v-on:click="display">Toggle </button>
        <button v-bind:disabled="true">Disabled button </button>
        <div v-if="show">Conditional rendering if</div>
        <div v-else>Conditional rendering else</div>
        <p v-html="rowHtml"></p>
        <Table></Table>
        <Style></Style>
        <DataBind />
        <Props v-bind:message='rowHtml'></Props>
        <h1>{{ title }}</h1>
        <Child v-on:changeTitle="updateTitle($event)"></Child>
        <LifeCycle v-if="show"></LifeCycle>
    </div>
</template>
  
<script>
import Table from './Table.vue'
import Style from './Style.vue'
import DataBind from './DataBind.vue'
import Props from './Props.vue'
import Child from './Child.vue'
import LifeCycle from './LifeCycle.vue'



export default {
    name: 'Home',
    components: {
        Table,
        Style,
        DataBind,
        Props,
        Child,
        LifeCycle
    },
    props: {
        header: String
    },
    data() {
        return {
            show: true,
            rowHtml: '<h1>Hello kaushal</h1>',
            title:"Props tutorial"
        };
    },
    methods: {
        helloFunc() {
            console.log("hello");
            alert("Good morning nandani")
        },
        MouseFunc() {
            console.log("Mouse func hello");
        },
        display() {
            this.show = !this.show
        },
        updateTitle(updatedTitle){
            this.title = updatedTitle
        }
    }
}
</script>

<style>
.user-table {
    background-color: cornflowerblue;
    border: 1px solid red;
}
</style>
  