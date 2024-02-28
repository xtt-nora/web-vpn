<template>
  <div class="publicCard">
    <el-card
      :body-style="{ padding: '0px', display: 'flex', height: '100%' }"
      v-for="(item, index) in cardList"
      :key="index"
      shadow="hover"
    >
      <div class="triangle"></div>
      <div class="triangle-title">{{ item.tag }}</div>
      <div class="publicCard-img">
        <img :src="item.src" class="image" />
      </div>
      <div class="publicCard-right">
        <span>{{ item.title }}</span>
        <time class="time">{{ item.note }}</time>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts" name="search">
import { ref, onMounted } from 'vue'
import { useGlobalStore } from '@/store/modules/global'
import search from '@/assets/json/search.json'
interface ListType {
  src: string
  title: string
  note: string
  tag: string
}
const globalStore = useGlobalStore()
const cardList = ref<ListType[]>([])
onMounted(() => {
  console.log(
    globalStore.searchContent,
    'globalStore.searchContentglobalStore.searchContent'
  )
  cardList.value = search.data
})
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
