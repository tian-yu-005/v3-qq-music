<template>
  <div class="avatar">
    <el-avatar :size="30" :src="loginStore.info.avatar" class="user-avatar" @click="openModel()" />
    <span class="user-name" @click="openModel()">{{ loginStore.info.name }}</span>

    <!-- 登录页 -->
    <Teleport to="body" v-if="loginModel">
      <Login @close="loginModel = false" />
    </Teleport>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
import { useLoginStore } from '@/store/login/login'
// 登录的内容默认是隐藏的，可以用异步组件导入，减少浏览器请求次数
const Login = defineAsyncComponent(() => import('@/layout/login/Login.vue'))

const loginStore = useLoginStore()
const loginModel = ref(false)
function openModel() {
  // 未登录
  if(!loginStore.isLogin) {
    loginModel.value = true
  } else {
    
  }
}
</script>

<style scoped lang="scss">
// 头像
.avatar {
  display: flex;
  align-items: center;
  .user-avatar:hover {
    cursor: pointer;
  }
  .user-name {
    margin-left: 7px;
    font-size: 13px;
    color: var(--font-color-shallow);
    &:hover {
      color: var(--theme-color);
      cursor: pointer;
    }
  }
}
</style>