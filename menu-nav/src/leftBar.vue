<template>
    <el-menu :default-active="$route.path" 
        router 
        class="el-menu-demo" 
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
      <el-menu-item v-for="(item,i) in $router.options.routes" :key="i" :index="item.path">
        {{item.label}}
      </el-menu-item>
    </el-menu>
</template>