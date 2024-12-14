<template>
  <div>
    <el-card>
      <Title name="个人资料" />
      <el-row v-for="(item,index) in list" :key="index">
        <el-col class="mt-20" :span="24">{{ item.title }}</el-col>
        <el-col
          :offset="2"
          class="mt-20 flex items-center"
          :span="24"
          v-for="i in item.items"
          :key="i.label"
        >
          <div class="text-14 mr-20 block w-70px">{{ i.label }}</div>
          <el-input class="!w-280 !text-14" readonly v-model="i.value" size="large"/>
          <el-button
            v-if="i.isEdit"
            class="ml-20 !text-white !px-30"
            round
            type="success"
            color="#25D55B"
            @click="handleChange(i)"
          >修改</el-button>
          <el-button
            v-if="i.isReset"
            class="ml-20 !border-double !border-gray-200 !px-30"
            round
            type="danger"
            color="#fff">重置</el-button>
        </el-col>
      </el-row>
      <el-row>
        <el-col class="mt-20" :span="24">联系信息</el-col>
        <el-col :span="24">
          <div class="mt-20 flex flex-col items-center border-t-1 border-r-1 border-t-solid border-l-1 border-l-solid border-r-solid border-gray-200">
            <div class="w-full h-70px bg-#E7F4EB flex items-center justify-center">
              <div class="w-33% flex justify-center">联系方式</div>
              <div class="w-33% flex justify-center">联系号码</div>
              <div class="w-33% flex justify-center">操作</div>
            </div>
            <div
              class="w-full h-46px flex justify-center items-center border-b-1 border-b-solid border-gray-200 text-14"
              v-for="(item,index) in tableData"
              :key="index"
            >
              <div class="w-33% flex justify-center">{{ item.contactDetails }}</div>
              <div class="w-33% flex justify-center">{{ item.phone }}</div>
              <div @click="handleChange(item)" class="w-33% flex justify-center text-#25D55B cursor-pointer">编辑</div>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script setup>
import Title from "@/components/Title/index.vue";
import {useChangePaymentPassword} from "@/views/modules/PersonalData/hook/changePaymentPassword.js";
import {useChangePassword} from "@/views/modules/PersonalData/hook/changePassword.js";
import {useChangeOtherContacts} from "@/views/modules/PersonalData/hook/changeOtherContacts.js";
import {useChangeTelegram} from "@/views/modules/PersonalData/hook/changeTelegram.js";
import {useUserStore} from "@/store/modules/user.store.js";

const userStore = useUserStore()

const changePaymentPassword = () => {
  useChangePaymentPassword().change()
}

const changePassword = () => {
  useChangePassword().change()
}

const changeOtherContacts = () => {
  useChangeOtherContacts().change()
}

const changeTelegram = () => {
  useChangeTelegram().change()
}

const handleChange = (data) => {
  if (data.type === 'fundPassword') {
    changePaymentPassword()
  } else if (data.type === 'password') {
    changePassword()
  } else if (data.type === 'other') {
    changeOtherContacts()
  } else if (data.type === 'telegram') {
    changeTelegram()
  }
}

const list = computed(() => [
  {
    title: '个人资料',
    items: [
      {
        label: '姓名',
        value: userStore.userInfo.displayalias,
        isEdit: false,
        isReset: false
      },
      {
        label: '代理账号',
        value: userStore.userInfo.displayalias,
        isEdit: false,
        isReset: false
      },
      {
        label: '登录密码',
        value: '*******',
        isEdit: true,
        isReset: false,
        type: 'password'
      },
    ]
  },
  {
    title: '安全信息',
    items: [
      {
        label: '邮箱地址',
        value: userStore.userInfo.email || '未设置邮箱',
        isEdit: false,
        isReset: false
      },
      {
        label: '支付密码',
        value: userStore.userInfo.fundpassword === 'false' ? '未设置支付密码' : '******',
        isEdit: true,
        isReset: false,
        type: 'fundPassword'
      },
    ]
  },
])

const tableData = ref([
  {
    contactDetails: 'Telegram',
    phone: userStore.userInfo.otherimname1 || '--',
    type: 'telegram'
  },
  {
    contactDetails: '其他联系方式',
    phone: userStore.userInfo.otherimno1 || '--',
    type: 'other'
  }
])
</script>

<style lang="scss" scoped>

</style>
