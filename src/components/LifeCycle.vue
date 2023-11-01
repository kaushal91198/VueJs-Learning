<template>
    <div>
        LifeCycle methods
    </div>
</template>

<script>
export default {
    name: 'LifeCycle',
    created(){
        console.log("Created")
    },
    beforeCreate(){
        console.log("beforeCreate")
    },
    beforeMount(){
        console.log("beforeMount")
    },
    mounted(){
        console.log("mounted")
    },
    beforeDestroy(){
        console.log("beforeDestroy")
    },
    destroyed(){
        console.log("destroyed")
    }
   
}
</script>