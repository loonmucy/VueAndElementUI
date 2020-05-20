<template>
  <div id="app">
    <p>current route name: {{$route.name}}</p>
    <ul>
      <li>
        <router-link :to="{name: 'home'}">home</router-link>
      </li>
      <li>
        <router-link :to="{name: 'test', params: {id:123}}">test</router-link>
      </li>
      <li>
        <router-link :to="{name: 'HelloWorld'}">HelloWorld</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  },
  data() {
    return {

    }
  },
  created() {
    console.log(this.$router)
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
