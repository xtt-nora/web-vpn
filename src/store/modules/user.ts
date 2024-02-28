import { defineStore } from 'pinia'
import { UserState } from '@/store/interface'
import piniaPersistConfig from '@/store/helper/persist'

export const useUserStore = defineStore({
  id: 'web-user',
  state: (): UserState => ({
    token: '',
    userInfo: { name: 'XTT' }
  }),
  getters: {},
  actions: {
    // Set Token
    setToken(token: string) {
      this.token = token
    },
    // Set setUserInfo
    setUserInfo(userInfo: UserState['userInfo']) {
      this.userInfo = userInfo
    }
  },
  persist: piniaPersistConfig('web-user')
})
