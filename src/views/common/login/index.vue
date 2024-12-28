<template>
  <div class="w-screen py-58 max-md:py-25 box-border overflow-auto wrapper">
    <div class="main-container px-30">
      <div class="max-md:flex-col bg-white p-20 rounded-30 shadow flex items-center">
        <img class="max-lg:w-50% lg:w-520 max-md:w-full" src="@/assets/images/login/image.png" alt="">
        <div class="flex-1 md:ml-5% md:pr-3% max-md:w-full max-md:mt-20">
          <div class="text-28 font-600 text-black">{{ $t('登录') }}</div>
          <div class="mt-6 text-12 text-#868D88">{{ $t('您好，欢迎您！') }}</div>
          <div class="mt-20">
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
                  :placeholder="$t('请输入您的用户名')"
                >
                  <template #prefix>
                    <img class="w-20" src="@/assets/images/login/user.png" alt="">
                  </template>
                </el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input
                  class="info h-40"
                  v-model="dataForm.password"
                  type="password"
                  :placeholder="$t('请输入您的密码')"
                >
                  <template #prefix>
                    <img class="w-20" src="@/assets/images/login/lock.png" alt="">
                  </template>
                </el-input>
              </el-form-item>
              <el-checkbox class="mb-18" v-model="remember">{{ $t('记住账号') }}</el-checkbox>
              <el-form-item>
                <el-button
                  class="w-full !h-46 !rounded-8"
                  type="primary"
                  @click="submitForm"
                  :loading="loading"
                >
                  <div class="text-16">{{ $t('登录') }}</div>
                </el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import {useUserStore} from "@/store/modules/user.store.js";
import {useRouter} from "vue-router";
import { useI18n } from "vue-i18n";

const { t } = useI18n()

const router = useRouter()

const useStore = useUserStore()

const dataFormRef = ref(null)

const remember = ref(true)

const dataForm = reactive({
  userName: '',
  password: '',
})

const key = 'rememberAccount'
const rememberAccount = localStorage.getItem(key) || ''
if(rememberAccount){
  const objectInfo = JSON.parse(rememberAccount)
  dataForm.userName =  objectInfo.userName
  dataForm.password =  objectInfo.password
}

const dataRule = {
  userName: [
    {required: true, message: t('请输入您的用户名'), trigger: 'blur'}
  ],
  password: [
    {required: true, message: t('请输入您的密码'), trigger: 'blur'}
  ],
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

    if(remember.value){
      localStorage.setItem(key, JSON.stringify(dataForm))
    } else {
      localStorage.removeItem(key)
    }

    await useStore.changeUserInfo()
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

.wrapper::-webkit-scrollbar {
  display: none;
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

.wrapper {
  height: calc(100vh - 70px);
  background: url("@/assets/images/login-bg.png") no-repeat;
  background-size: cover;
}

:deep(.el-input__wrapper) {
  background: #f4f9f5;
}
</style>
