<template>
  <el-menu
    :collapse="isCollapse"
    active-text-color="#ffd04b"
    background-color="#001529"
    class="el-menu-vertical-demo"
    :default-active="$route.path"
    text-color="#fff"
    router
    @open="handleOpen"
    @close="handleClose"
  >
    <div class="menu-nav">
      <img src="@/assets/logo.svg" alt="" />
      <span>Admin</span>
    </div>
    <el-menu-item index="/welcome">
      <el-icon><location /></el-icon>
      <span>首页</span>
    </el-menu-item>

    <el-menu-item index="/data-list">
      <el-icon><icon-menu /></el-icon>
      <span>数据管理</span>
    </el-menu-item>
    <el-menu-item index="/user">
      <el-icon><document /></el-icon>
      <span>用户管理</span>
    </el-menu-item>

    <el-sub-menu index="1">
      <template #title>
        <el-icon><location /></el-icon>
        <span>多级菜单</span>
      </template>
      <!-- 子菜单 -->
      <el-menu-item-group>
        <template #title><span>Group One</span></template>
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item two</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Group Two">
        <el-menu-item index="1-3">item three</el-menu-item>
      </el-menu-item-group>
      <el-sub-menu index="1-4">
        <template #title><span>item four</span></template>
        <el-menu-item index="1-4-1">item one</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>

    <div class="collapse-board">
      <el-icon v-if="isCollapse" @click="setCollapse" color="#409EFF"><Expand /></el-icon>
      <el-icon v-else @click="setCollapse" color="#409EFF"><Fold /></el-icon>
    </div>
  </el-menu>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Document, Menu as IconMenu, Location, Setting } from '@element-plus/icons-vue'

const isCollapse = ref(false)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

const setCollapse = () => {
  isCollapse.value = !isCollapse.value
}
</script>

<style scoped>
.el-menu {
  height: 100vh;
}
.menu-nav {
  display: flex;
  align-items: center;
  padding: 12px;
  overflow: hidden;
}

.menu-nav img {
  width: 28px;
  height: 28px;
  margin-left: 8px;
}

.menu-nav span {
  color: white;
  font-weight: bolder;
  font-size: large;
  margin-left: 16px;
}

.collapse-board {
  position: absolute;
  bottom: 12px;
  left: 24px;
}

.el-sub-menu .el-sub-menu__icon-arrow {
  margin-left: 20px;
}
</style>
