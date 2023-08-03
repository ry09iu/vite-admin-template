<template>
  <div class="common-layout">
    <el-container>
      <div>
        <Sider />
      </div>

      <el-container>
        <el-header>
          <div class="header">
            <p>首页</p>
          </div>
        </el-header>

        <el-main>
          <!-- <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">promotion management</a></el-breadcrumb-item>
            <el-breadcrumb-item>promotion list</el-breadcrumb-item>
            <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
          </el-breadcrumb> -->
          
          <el-card shadow="never" body-style="padding: 16px">
            <router-view />
          </el-card>
        </el-main>

        <el-footer>
          <el-card shadow="never" body-style="padding: 16px"> Footer </el-card>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import Sider from './sider/index.vue'
</script>

<style scoped>
.el-container {
  width: 100vw;
}

.el-header {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e5e6eb;
  height: 48px;
}

.el-main {
  background-color: #f2f3f5;
  padding: 14px;
}

.el-aside {
  width: 200px;
}

.el-card {
  height: 100%;
  border: none;
  border-radius: 2px;
}

.el-footer {
  padding: 0 14px;
  background-color: #f2f3f5;
}
</style>
