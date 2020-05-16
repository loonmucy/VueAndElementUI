<template>
  <div id="app" class="my-app">
    <div style="flex:1;margin-right:10px">
      <el-table ref="detailTable" class="atb-table" border :show-header="false" size="mini" height="100%" :data="list" highlight-current-row @current-change="currentChangeHandle">
          <el-table-column label="table仿造导航" prop="prop0"></el-table-column>
      </el-table>
    </div>
    <div style="flex:3">
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
      list: [
        {'prop0':'表格动态列','name':'checkboxAddTable'},
        {'prop0':'表格动态行列','name':'dynamicForm'},
        {'prop0':'表单行样式','name':'tableRowClass'},
        {'prop0':'动态添加表格行','name':'dynamicAddRow'},
        {'prop0':'表格仿造导航功能','name':'copyNavigation'},
      ],
      currentView: 'checkboxAddTable'
    }
  },
  methods: {
    currentChangeHandle(row) {
      let label = row.name
      this.currentView = label
    },
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
.my-app {
  display: flex;
  /* justify-content: column;; */
}
</style>
