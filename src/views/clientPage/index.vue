<template>
  <el-container>
    <el-aside style="width: 100px">
      <el-menu
        :router="false"
        :default-active="activeMenu"
        :collapse-transition="false"
        class="el-menu-vertical-demo"
      >
        <el-menu-item
          v-for="(item, index) in clientList"
          :key="index"
          @click="handleClickMenu(item)"
        >
          <span class="sle">{{ item.meta.title }}</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>
        <!-- <headerPage></headerPage> -->
        <barLeft></barLeft>
        <barRight :page="pageName"></barRight>
      </el-header>
      <el-main>
        <search v-if="searchCon"></search>
        <clientHome v-if="pageName === 'clientHome' && !searchCon" />
        <articlePage v-else-if="pageName === 'articlePage'" />
        <software v-else-if="pageName === 'software'" />
      </el-main>
    </el-container>
  </el-container>
</template>
<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import client from '@/assets/json/client.json'
import software from './software/index.vue'
import clientHome from './clientHome/index.vue'
import articlePage from './articlePage/index.vue'
import barLeft from './components/tabs/BarLeft.vue'
import barRight from './components/tabs/BarRight.vue'
import search from './components/common/search.vue'
import { useGlobalStore } from '@/store/modules/global'
const globalStore = useGlobalStore()
const route = useRoute()
const clientList = client.data
console.log(clientList, 'clientList')
const pageName = ref<string>('clientHome')
const handleClickMenu = (item: any) => {
  if (item.meta.isLink) return window.open(item.meta.isLink, '_blank')
  pageName.value = item.name
}
const activeMenu = computed(
  () => (route.meta.activeMenu ? route.meta.activeMenu : route.path) as string
)
const searchCon = computed(() => globalStore.searchContent)
</script>
<style scoped lang="scss">
@import './index.scss';
</style>
