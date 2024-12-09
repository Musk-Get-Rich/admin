<template>
  <div>
    <el-card>
      <el-row justify="space-between mb-20">
        <div class="text-20">个人资料</div>
      </el-row>
      <el-row v-for="(item,index) in list" :key="index">
        <el-col class="mt-20" :span="24">{{ item.title }}</el-col>
        <el-col :offset="2" class="mt-20 flex items-center" :span="24" v-for="i in item.items" :key="i.label">
          <span class="mr-20 block w-70px">{{ i.label }}</span>
          <el-input v-model="i.value" size="large" style="width: 240px" placeholder="Please input" />
          <el-button v-if="i.isEdit" class="ml-20 !text-white !px-30" round type="success" size="large" color="#25D55B">修改</el-button>
          <el-button v-if="i.isReset" class="ml-20 !border-double !border-gray-200 !px-30" round type="danger" size="large" color="#ffffff">重置</el-button>
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
            <div class="w-full h-46px flex justify-center items-center border-b-1 border-b-solid border-gray-200" v-for="(item,index) in tableData" :key="index">
              <div class="w-33% flex justify-center">{{ item.contactDetails }}</div>
              <div class="w-33% flex justify-center">{{ item.phone }}</div>
              <div class="w-33% flex justify-center text-#25D55B">编辑</div>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script setup>
const list = ref([
  {
    title: '个人资料',
    items: [
      {
        label: '姓名',
        value: '用户姓名***',
        isEdit: false,
        isReset: false
      },
      {
        label: '代理账号',
        value: 'BBBBBBBBBBBBBBA',
        isEdit: false,
        isReset: false
      },
      {
        label: '登录密码',
        value: '*******',
        isEdit: true,
        isReset: true
      },
    ]
  },
  {
    title: '安全信息',
    items: [
      {
        label: '邮箱地址',
        value: '365*****225@qq.com',
        isEdit: false,
        isReset: true
      },
      {
        label: '支付密码',
        value: '*******',
        isEdit: true,
        isReset: true
      },
    ]
  },
])

const tableData = ref([
  {
    contactDetails: 'Telegram',
    phone: '--',
  },
  {
    contactDetails: '其他联系方式',
    phone: '365*****225@qq.com',
  }
])
</script>

<style lang="scss" scoped>

</style>
