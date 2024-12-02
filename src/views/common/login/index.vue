<template>
  <div class="w-screen h-screen pt-10vw box-border overflow-hidden bg-[#f0f3fc]">
    <div class="login-wrapper mx-auto rounded-4 overflow-hidden bg-white">
      <div class="relative w-full bg-[#899fe1]">
        <img class="w-full block" src="@/assets/images/login-head.png" alt="">
        <div
          class="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-100 h-100 rounded-full overflow-hidden bg-white p-5 box-border max-sm:w-90 max-sm:h-90"
        >
          <img class="w-full h-full object-cover rounded-full" src="@/assets/images/author.png" alt="">
        </div>
      </div>
      <div class="px-20 pt-60 pb-20 bg-white">
        <el-form
          :model="dataForm"
          :rules="dataRule"
          ref="dataFormRef"
          @keyup.enter.native="submitForm"
          status-icon
        >
          <el-form-item prop="userName">
            <el-input
              class="info h-40"
              v-model="dataForm.userName"
              placeholder="账号"
            >
              <template #prefix>
                <el-icon size="19">
                  <User/>
                </el-icon>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              class="info h-40"
              v-model="dataForm.password"
              type="password"
              placeholder="密码"
            >
              <template #prefix>
                <el-icon size="19">
                  <Lock/>
                </el-icon>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              class="w-full !h-48"
              type="primary"
              @click="submitForm"
              :loading="loading"
            >
              <div class="text-16">登录</div>
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script setup>
import {encrypt} from "@/utils/index.js";
import {useUserStore} from "@/store/modules/user.store.js";
import {useRouter} from "vue-router";
import {useSessionStorage} from "@vueuse/core";
import {USERNAME} from "@/config/storageKey.js";

const myUserName = useSessionStorage(USERNAME, '')

const router = useRouter()

const useStore = useUserStore()

const dataFormRef = ref(null)

const dataForm = reactive({
  userName: '',
  password: '',
  uuid: '',
  captcha: ''
})

const dataRule = {
  userName: [
    {required: true, message: '请输入账号', trigger: 'blur'}
  ],
  password: [
    {required: true, message: '请输入密码', trigger: 'blur'}
  ],
  captcha: [
    {required: true, message: 'The captcha is required.', trigger: 'blur'}
  ]
}

// 防抖函数
const debounce = (fn, delay) => {
  let timer = null
  return function () {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments)
    }, delay)
  }
}

// 提交表单
const submitForm = () => {
  dataFormRef.value.validate((valid) => {
    if (valid) {
      login()
      // verifyRef.value.show()
    }
  })
}

// 登录
const loading = ref(false)
const login = debounce(async () => {
  loading.value = true

  try {
    const res = await useStore.login({
      loginaccount: dataForm.userName,
      loginpassword: dataForm.password,
    })

    await router.push('/')
  } catch (err) {
    console.log(err);
  }

  loading.value = false


}, 300)
</script>

<style lang="scss" scoped>
.login-wrapper {
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
}

/* 针对宽度大于 768 像素的设备（通常是桌面电脑） */
@media (min-width: 769px) {
  .login-wrapper {
    width: 450px;
  }
}

@media (max-width: 769px) {
  .login-wrapper {
    width: 84%;
  }
}
</style>
