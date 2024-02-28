<template>
  <div>
    <div v-if="props.page === 'clientHome'">
      <el-button type="success" @click="goAdmin">后台管理</el-button>
      <el-button type="success">提出需求</el-button>
    </div>
    <div v-if="props.page === 'articlePage'">
      <el-button type="success">发文章</el-button>
    </div>
    <div v-if="props.page === 'software'">
      <el-button type="success">上传应用</el-button>
    </div>
  </div>
</template>

<script setup lang="ts" name="barright">
import router from '@/router'
import { HOME_URL } from '@/config'

interface PropsType {
  page: string
}
const props = withDefaults(defineProps<PropsType>(), {
  page: 'clientHome'
})
const goAdmin = () => {
  router.push(HOME_URL)
}
</script>

<style scoped lang="scss"></style>
