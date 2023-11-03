<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <Home header="Welcome to Your Vue.js App " /> -->
    <!-- <Form></Form> -->
    <!-- <EmployeeList></EmployeeList> -->
    <nav>
      <ul>
        <li>
          <router-link to="/">Go to Home</router-link>
        </li>
        <li>
          <router-link to="/api">Go to Api</router-link>
        </li>
        <li>
          <router-link to="/form">Go to Form</router-link>
        </li>
        <li>
          <router-link to="/dynamic">Dynamic</router-link>
        </li>
        <li>
          <router-link to="/custom-directive">Custom Directive</router-link>
        </li>
        <li>
          <router-link to="/non-props">Non props</router-link>
        </li>
        <li>
          <router-link to="/computed">Computed Property</router-link>
        </li>
        <li>
          <router-link to="/watchers">Watchers</router-link>
        </li>
        <li>
          <router-link to="/slot">Slots</router-link>
        </li>
        <li>
          <router-link to="/dynamic-main">Dynamic Main</router-link>
        </li>
        <li>
          <router-link to="/before-created-and-created">Before Created And Created</router-link>
        </li>
        <li>
          <router-link to="/before-mounted-and-mounted">Before Mounted And Mounted</router-link>
        </li>
        <li>
          <router-link to="/kanban-board">Kanban board</router-link>
        </li>
        <li>
          <router-link to="/vue-draggable">Draggable</router-link>
        </li>
        <li>
          <router-link to="/vuex">VueX</router-link>
        </li>
      </ul>
    </nav>
    <router-view></router-view>
    <teleport to="'#footer'">
      <Footer></Footer>
    </teleport>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Home from './components/Home.vue'
// import Form from './components/Form/index.vue'
// import EmployeeList from './components/Api/apiEmployeeList.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Footer
    // HelloWorld,
    // Home
    // Form
    // EmployeeList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
