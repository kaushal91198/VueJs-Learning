<template>
    <div id="app">
        <section class="section">
            <h4>
                Vue adoptation of Ettric's
                <a href="//codepen.io/ettrics/pen/QbPEeg">Codepen</a>
            </h4>
        </section>
        <kanban-board :stages="statuses" :blocks="blocksClone" @update-block="updateBlock">
            <div v-for="stage in statuses" :slot="stage" :key="stage">
                <h2>
                    {{ stage }}
                    <a>+</a>
                </h2>
            </div>
            <div v-for="item in blocks" :slot="item.id" :key="item.id">
                <div><strong>id:</strong> {{ item.id }}</div>
                <div>
                    {{ item.title }}
                </div>
            </div>
        </kanban-board>
    </div>
</template>
  
<script>
import { debounce, cloneDeep } from "lodash";

export default {
    name: "VueKanban",
    data() {
        return {
            statuses: ["on-hold", "in-progress", "needs-review", "approved"],
            blocks: [],
            blocksClone: [],
            // stateMachineConfig: {
            //     id: "kanban",
            //     initial: "on-hold",
            //     states: {
            //         "on-hold": {
            //             on: {
            //                 PICK_UP: "in-progress",
            //             },
            //         },
            //         "in-progress": {
            //             on: {
            //                 RELINQUISH_TASK: "on-hold",
            //                 PUSH_TO_QA: "needs-review",
            //             },
            //         },
            //         "needs-review": {
            //             on: {
            //                 REQUEST_CHANGE: "in-progress",
            //                 PASS_QA: "approved",
            //             },
            //         },
            //         approved: {
            //             type: "final",
            //         },
            //     },
            // },
        };
    },
    mounted() {
        for (let i = 0; i <= 10; i += 1) {
            this.blocks.push({
                id: i,
                status: this.statuses[Math.floor(Math.random() * 4)],
                title: `${i} title`,
            });

            this.blocksClone = cloneDeep(this.blocks);
        }
    },
    methods: {
        updateBlock: debounce(function (id, status, index) {
            console.log(`id`, id);
            console.log(`status`, status);
            console.log(`index`, index);
            this.blocks.find((b) => b.id === Number(id)).status = status;
            console.log(this.blocks)
        }, 500),
    },
};
</script>
  
<style>
.drag-column .drag-column-header>div {
    width: 100%;
}

.drag-column .drag-column-header>div h2>a {
    float: right;
}

.drag-column-on-hold .drag-column-header,
.drag-column-on-hold .is-moved,
.drag-column-on-hold .drag-options {
    background: #FB7D44;
}

.drag-column-in-progress .drag-column-header,
.drag-column-in-progress .is-moved,
.drag-column-in-progress .drag-options {
    background: #2A92BF;
}

.drag-column-needs-review .drag-column-header,
.drag-column-needs-review .is-moved,
.drag-column-needs-review .drag-options {
    background: #F4CE46;
}

.drag-column-approved .drag-column-header,
.drag-column-approved .is-moved,
.drag-column-approved .drag-options {
    background: #00B961;
}

.section {
    padding: 20px;
    text-align: center;
}

.section a {
    color: white;
    text-decoration: none;
    font-weight: 300;
}

.section h4 {
    font-weight: 400;
}

.section h4 a {
    font-weight: 600;
}
</style>