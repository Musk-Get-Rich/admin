<template>
  <div class="!w-full pt-10">
    <el-row class="!w-full h-233px border-double border-gray-200 rounded-3xl p-30px">
      <el-col :span="24">我的专属域名</el-col>
      <el-col :span="24">
        <el-row class="!w-full h-46px flex items-center !rounded-4xl mt-30">
          <span class="block w-100px">专属域名</span>
          <div class="flex w-510px h-46px items-center justify-between border-double border-gray-200 rounded-3xl bg-#F4F9F5 pl-15 pr-10">
            <span class="text-#868D88">有待申请</span>
            <el-button round type="success" class="px-16 py-6 text-white font-12px">移动端</el-button>
          </div>
          <el-icon class="ml-10" size="20"><CopyDocument /></el-icon>
        </el-row>
        <el-row class="!w-full h-46px flex items-center !rounded-4xl mt-30">
          <span class="block w-100px"></span>
          <div class="flex w-510px h-46px items-center justify-between border-double border-gray-200 rounded-3xl bg-#F4F9F5 pl-15 pr-10">
            <span class="text-#868D88">有待申请</span>
            <el-button round type="primary" class="px-16 py-6 text-white font-12px !bg-#32ACFF">移动端</el-button>
          </div>
          <el-icon class="ml-10" size="20"><CopyDocument /></el-icon>
        </el-row>
      </el-col>
    </el-row>
    <el-row class="!w-full h-46px flex items-center !rounded-4xl mt-30 mt-30">
        <img class="w-20 h-20" src="@/assets/images/promotion/info-circle.png" alt="">
        <span class="text-#F93131 ml-10">如果长时间没有会员注册，专用域名将回收</span>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div class="mt-20 flex flex-col items-center border-t-solid border-l-solid border-r-solid border-gray-200">
          <div class="w-full h-70px bg-#E7F4EB flex items-center justify-center">
            <div class="w-33% flex justify-center">专用域名</div>
            <div class="w-33% flex justify-center">功能</div>
            <div class="w-33% flex justify-center">
              <el-button class="!bg-#25D55B" type="success">
                <img class="w-20 h-20 mr-5" src="@/assets/images/promotion/document-text.png" alt="" />
                申请记录
              </el-button>
            </div>
          </div>
          <div class="w-full h-46px flex justify-center items-center border-b-solid border-gray-200" v-for="(item,index) in tableData" :key="index">
            <div class="w-33% flex justify-center">{{ item.contactDetails }}</div>
            <div class="w-33% flex justify-center">{{ item.phone }}</div>
            <div class="w-33% flex justify-center text-#25D55B">编辑</div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { CopyDocument } from '@element-plus/icons-vue'
const input = ref('')

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