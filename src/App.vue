<template>
  <el-config-provider :size="assemblySize" :button="buttonConfig">
    <router-view></router-view>
  </el-config-provider>
</template>

<script setup lang="ts">
import { useTheme } from '@/hooks/useTheme'
import { ElConfigProvider } from 'element-plus'
import { useGlobalStore } from '@/store/modules/global'
import { computed, reactive } from 'vue'
const globalStore = useGlobalStore()

// init theme
const { initTheme } = useTheme()
initTheme()

// element assemblySize
const assemblySize = computed(() => globalStore.assemblySize)

// element button config
const buttonConfig = reactive({ autoInsertSpace: false })
</script>
