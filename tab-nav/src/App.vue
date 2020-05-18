<template>
  <div id="app" class="my-app">
    <div style="flex:1;margin-right:10px">
      <el-tabs tab-position='left'  v-model="activeTab" @tab-click="handleTabClick">
        <el-tab-pane v-for="list in lists" :key="list.name" :label='list.label' :name="list.name"></el-tab-pane>
      </el-tabs>
    </div>
    <div style="flex:8">
        <component :is="currentView"></component>
    </div>
  </div>
</template>

<script>
import checkboxAddTable from './components/checkboxAddTable'
import dynamicForm from './components/dynamicForm'
import tableRowClass from './components/tableRowClass'
import dynamicAddRow from './components/dynamicAddRow'
import copyNavigation from './components/copyNavigation'

export default {
  name: 'App',
  components: {
    checkboxAddTable,dynamicForm,tableRowClass,dynamicAddRow,copyNavigation
  },
  data() {
    return {
      currentView: 'checkboxAddTable',
      activeTab: 'checkboxAddTable',
      lists: [
        {'label':'表格动态列','name':'checkboxAddTable'},
        {'label':'表格动态行列','name':'dynamicForm'},
        {'label':'表单行样式','name':'tableRowClass'},
        {'label':'动态添加表格行','name':'dynamicAddRow'},
        {'label':'表格仿造导航功能','name':'copyNavigation'},
      ]
    }
  },
  methods: {
    handleTabClick(tab) {
      this.currentView = tab.name
    },

  },
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
.my-app {
  display: flex;
}
</style>
