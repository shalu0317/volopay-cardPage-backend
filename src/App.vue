<template>
  <Header msg="Header Component"/>
  <NavBar/>
  <router-view/>
</template>

<script>
import Header from './components/Header.vue'
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    Header,
    NavBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #313131;
}
</style>
