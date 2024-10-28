<template>
  <div>
    <div class="login-box">
      <el-input v-model="state.userName" style="width: 240px" placeholder="用户名" />
      <el-input v-model="state.account" style="width: 240px" placeholder="账号" />
      <el-input v-model="state.password" style="width: 240px" type="password" placeholder="密码" show-password />
    </div>
    <div>
      <!-- <el-button type="primary" loading>Loading</el-button> -->
      <el-button type="primary" :loading="state.loading" @click="createAccount">创建</el-button>
      <el-button type="primary" :loading="state.loading" @click="loginFn">登录</el-button>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
import { registerAccount, loginAccount, getList } from '@/api/index.js'
const router = useRouter()
const state = reactive({
  userName: '',
  account: '',
  password: '',
  loading: false,
})

// userName
// "1"
// account
// "2"
// password
// "3"
const loginFn = () => {
  loginAccount({
    account: state.account,
    password: state.password,
  }).then((res) => {
    console.log(res)
    if (res.data) {
      localStorage.setItem('s-token', res.data)
      router.push('/home')
    }
    ElMessage(res.message)
  })
}

function createAccount() {
  registerAccount({
    userName: state.userName,
    account: state.account,
    password: state.password,
  }).then((res) => {
    console.log(res)

    localStorage.setItem('s-token', res.data)
    // state.loading = true
    ElMessage('This is a message.')
    // router.push('/home')

    getList({})
  })
}
</script>

<style lang="scss" scoped>
.login-box {
  display: flex;
  flex-direction: column;
}
</style>
