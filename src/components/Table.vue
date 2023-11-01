<template>    
        <table class="user-table">
            <thead>
                <tr>
                    <td>
                        id
                    </td>
                    <td>
                        email
                    </td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id">
                    <td>
                        {{ user.name }}
                    </td>
                    <td>
                        {{ user.email }}
                    </td>
                </tr>
            </tbody>
        </table>
</template>
  
<script>

export default {
    name: 'Table',   
    data() {
        return {
            users: [{
                id: 1,
                email: "kaushal91198@gmail.com",

            }, {
                id: 2,
                email: "gopi91198@gmail.com",

            }, {
                id: 3,
                email: "munno91198@gmail.com",

            }]
        };
    },
 
}
</script>

<style>
.user-table{
    background-color: cornflowerblue;
    border: 1px solid red;
}
</style>
  