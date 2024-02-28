import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useAuthStore } from '@/store/modules/auth'

/**
 * @description 页面按钮权限
 * */
export const useAuthButtons = () => {
  const route = useRoute()
  const authStore = useAuthStore()
  const authButtons = authStore.authButtonListGet[route.name as string] || []

  const BUTTONS = computed(() => {
    let currentPageAuthButton: { [key: string]: boolean } = {}
    authButtons.forEach((item: any) => (currentPageAuthButton[item] = true))
    return currentPageAuthButton
  })

  return {
    BUTTONS
  }
}
