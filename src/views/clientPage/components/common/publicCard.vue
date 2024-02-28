<template>
  <div class="publicCard">
    <el-card
      :body-style="{ padding: '0px', display: 'flex', height: '100%' }"
      v-for="(item, index) in cardList"
      :key="index"
      shadow="hover"
    >
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

<script setup lang="ts" name="publiccard">
import { ref, onMounted } from 'vue'
import mitt from '@/utils/mittBus'
import clientHome from '@/assets/json/clientHome.json'
interface ListType {
  src: string
  title: string
  note: string
}
const cardList = ref<ListType[]>([])
mitt.on('tabClick', (value) => {
  cardList.value = clientHome.data[value]
})
onMounted(() => {
  cardList.value = clientHome.data.nerbar
})
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
