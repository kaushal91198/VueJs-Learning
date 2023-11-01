<template>
    <div>
        <h1>{{ signup.username | Ucase }}</h1>
       <form @submit="signupUser">
        <input type="text" placeholder="Enter your name " v-model="signup.username" />
        <br>
        <input type="password" placeholder="Enter your password " v-model="signup.password" />
        <br>
        <input type="checkbox" id="cricket" value="cricket" v-model="signup.hobbies" />
        <label for="cricket">Cricket</label>
        <br>
        <input type="checkbox" id="football" value="football" v-model="signup.hobbies" />
        <label for="football">Football</label>
        <br>
        <input type="radio" id="male" value="male" v-model="signup.gender" />
        <label for="male">male</label>
        <br>
        <input type="radio" id="female" value="female" v-model="signup.gender" />
        <label for="female">Female</label>
        <button type ='submit'>Sign up</button>
       </form>
    </div>
</template>
<script>
export default {
    name: 'Form',
    data() {
        return {
            signup: {
                username: '',
                password: null,
                hobbies: [],
                gender: null,
            }
        }
    },
    methods: {
        signupUser(e) {
            e.preventDefault()
            console.log(this.signup.hobbies)
        }
    }

}
</script>