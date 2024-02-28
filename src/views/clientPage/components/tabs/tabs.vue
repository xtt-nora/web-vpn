<template>
  <div>
    <el-tabs v-model="tabsValue" @tab-click="tabClick" @tab-remove="tabRemove">
      <el-tab-pane
        v-for="item in tabsMenuList"
        :key="item.name"
        :label="item.label"
        :name="item.name"
      >
        <template #label>
          {{ item.label }}
        </template>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts" name="tabs">
import { TabPaneName, TabsPaneContext } from 'element-plus'
import { reactive, ref } from 'vue'
import mitt from '@/utils/mittBus'

const tabsValue = ref('nerbar')
const tabsMenuList = reactive([
  { label: '最近使用', name: 'nerbar' },
  { label: '全部应用', name: 'all' },
  { label: '内部管理', name: 'internal' },
  { label: '统计工具', name: 'statistics' },
  { label: '油藏地质', name: 'oil' }
])
const tabClick = (tabItem: TabsPaneContext) => {
  mitt.emit('tabClick', tabItem.props.name)
}
const tabRemove = (tabItem: TabPaneName) => {
  // console.log(tabItem)
}
</script>

<style scoped lang="scss"></style>
