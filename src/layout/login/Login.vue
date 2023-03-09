<template>
  <div class="mask">
    <div class="login-wrapper" v-loading="data.loading">
      <div class="top">
        用户登录
      </div>
      <el-form
        ref="loginRef"
        :model="loginModel"
        :rules="loginRule"
        label-position="top"
        label-width="100px"
        style="width: 100%;"
      >
        <el-form-item label="账号" prop="username">
          <el-input v-model="loginModel.username" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="loginModel.password" />
        </el-form-item>
        <br>
        <el-form-item>
          <el-button size="large" @click="emits('close')">退出</el-button>
          <el-button type="primary" size="large" class="submit" @click="submit(loginRef)">
            确定
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { useLoginStore } from '@/store/login/login'
import { ILogin } from '@/types/ILogin'
import type { FormInstance, FormRules } from 'element-plus'
import { ElMessage } from 'element-plus'

const emits = defineEmits<{
  (n: 'close'): void
}>()
const data = reactive({
  loading: false, // 正在登录
})
// 仓库
const loginStore = useLoginStore()
// 组件
const loginRef = ref<FormInstance>()
// 数据
const loginModel = reactive<ILogin>({
  username: '',
  password: ''
})
// 规则
const loginRule = reactive<FormRules>({
  username: [
    { required: true,message: '不能为空', trigger: 'change' },
    { min: 6, message: '不低于 6 位数', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '不能为空', trigger: 'change' },
    { min: 3, message: '不低于 3 位数', trigger: 'blur' }
  ]
})
// 提交表单
function submit(f: FormInstance | undefined) {
  if(!f) return
  f.validate(async (isValid) => {
    if(isValid) {
      // 开启加载
      data.loading = true
      // 1. 模拟异步登录
      const res = await loginStore.login(loginModel)
      if(res.code === 200) {
        // 变更为 已经登录
        loginStore.saveLoginResult()
        // 弹窗
        ElMessage({ message: res.msg, type: 'success' })
        // 2. 获取用户数据
        const info = await loginStore.getInfo(loginModel)
        loginStore.info = info.data!
        loginStore.saveInfo()
        // 关闭登录框
        // emits('close')
        // 刷新
        location.reload()
      } else {
        // 关闭加载
        data.loading = false
        // 弹窗
        ElMessage({ message: res.msg, type: 'error' })
      }
    }
  })
}


</script>

<style scoped lang="scss">
.mask {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
  width: 100vw;
  height: 100vh;
  user-select: none;
  // background-color: rgba(238, 238, 238, .4);
  background-color: transparent;

  display: flex;
  justify-content: center;
  align-items: center;
}
.login-wrapper {
  box-sizing: border-box;
  width: 36%;
  min-width: 400px;
  height: 350px;
  border-radius: 8px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, .2);
  background-color: #fff;
  padding: 0 30px;
}

.top {
  line-height: 90px;
  padding: 0 ;
  font-size: 26px;
  letter-spacing: 12px;
  font-family: 'Courier New', Courier, monospace;
}
.submit {
  margin-left: auto;
  // background-color: $theme-color;
  border-color: transparent;
  &:hover {
    opacity: .7;
  }
  &:active {
    // border-color: $theme-color;
    opacity: 1;
  }
}


</style>