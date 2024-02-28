<template>
  <div class="articleCard">
    <el-row :gutter="10">
      <el-col
        :xs="24"
        :sm="12"
        :md="8"
        :lg="8"
        :xl="8"
        v-for="(item, index) in List"
        :key="index"
      >
        <div class="article-container">
          <h2 class="article-title">{{ prop.tab }}{{ item.title }}</h2>
          <div class="article-box">
            <el-icon size="12"><Calendar /></el-icon>
            <span>{{ item.date }}</span>
            <span> {{ item.team }}</span>
          </div>
          <div class="article-content">
            {{ item.content }}
          </div>
          <div class="article-tag">
            <el-icon size="12" color="#757575"><Flag /></el-icon>
            <el-tag
              size="small"
              class="tag"
              v-for="tagItem in item.tag"
              :key="tagItem"
              >{{ tagItem }}</el-tag
            >
          </div>
        </div></el-col
      >
    </el-row>
  </div>
</template>

<script setup lang="ts" name="articleCard">
import articleList from '@/assets/json/articleList.json'
import { watch } from 'vue'
interface PropsType {
  tab: string
}
const prop = withDefaults(defineProps<PropsType>(), {
  tab: 'news'
})
const List = articleList.data[prop.tab]
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
