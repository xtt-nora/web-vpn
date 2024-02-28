<template>
  <div>
    <el-input
      v-model="input"
      placeholder="搜索"
      :prefix-icon="Search"
      @change="handleChange"
    />
  </div>
</template>

<script setup lang="ts" name="barleft">
import { ref, watch } from 'vue'
import { Search } from '@element-plus/icons-vue'
import { useGlobalStore } from '@/store/modules/global'
import { storeToRefs } from 'pinia'
const globalStore = useGlobalStore()
const input = ref('')
const { searchContent } = storeToRefs(globalStore)
const handleChange = () => {
  console.log('scd')
}
watch(input, (newVal, oldVal) => {
  // console.log(newVal, oldVal)
  globalStore.searchContent = newVal
})
</script>

<style scoped lang="scss"></style>
