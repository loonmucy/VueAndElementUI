<template>
  <div id="app" class="atb-container">
    <div class="left-bar">
      <leftBar></leftBar>
    </div>
    <div class="main-data">
      <mainData></mainData>
    </div>
    
  </div>
</template>

<script>
import mainData from './mainData'
import leftBar from './leftBar'

export default {
  name: 'App',
  components: {
    mainData,leftBar
  },
  data() {
    return {

    }
  },
  created() {
    // console.log(this.$router.options.routes)
  },
  methods: {

  }
}
</script>

<style>
#app {

}
.atb-container {
  display: flex;
  width: 100%;
  height: 100%;
}
.left-bar {
  flex: 1;
  text-align: center;
  background: rgb(84, 92, 100);
}
.main-data {
  flex: 8;
  margin-left: 30px;
}
</style>
