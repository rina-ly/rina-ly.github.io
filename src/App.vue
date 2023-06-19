<template>
<div id="app">
  <Header/>
  <Profile/>
  <router-view/>
</div>
</template>

<script>
import Header from '@/components/Header'
import Profile from '@/components/Profile'
export default {
  name: 'App',
  components: {
    Header,
    Profile
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0;
  color: #e4d2d8;
  padding-top: 8%;
}
</style>
