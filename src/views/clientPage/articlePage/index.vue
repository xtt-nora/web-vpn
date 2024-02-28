<template>
  <div class="article">
    <el-tabs v-model="activeName" tab-position="left" class="demo-tabs">
      <el-tab-pane
        v-for="item in tabs"
        :key="item"
        :label="item.label"
        :name="item.name"
        ><articleCard :tab="item.name"></articleCard
      ></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts" name="article">
import articleCard from './components/articleCard.vue'
import { reactive, ref } from 'vue'
const activeName = ref('news')
const tabs = reactive([
  { label: '最新文档', name: 'news' },
  { label: '文章存档', name: 'history' },
  { label: '技术分享', name: 'tele' },
  { label: '交接文档', name: 'about' }
])
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
