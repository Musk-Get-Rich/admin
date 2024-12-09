<template>
  <div class="!w-full">
    <el-row v-for="i in 3" class="!w-full h-240px border-double border-gray-200 rounded-3xl shadow-gray-500 py-20 px-20 mb-20">
      <el-col :span="8" class="h-full bg-gray-300 rounded-3xl"></el-col>
      <el-col :offset="1" :span="15" class="h-full flex flex-col items-center justify-center">
        <el-row class="!w-full">
          <el-col :span="24" class="mb-10 text-#25D55B">
            长链接：
          </el-col>
          <el-row class="!w-full h-46px flex justify-between items-center  bg-#25D55B1A px-20px rounded-8px mb-20">
            <span>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</span>
            <div class="flex">
              <el-button type="success" round>复制
                <el-icon class="el-icon--right"><Connection /></el-icon>
              </el-button>
              <el-button round>二维码
                <el-icon class="el-icon--right"><ArrowDown /></el-icon>
                </el-button>
            </div>
          </el-row>
        </el-row>
        <el-row class="!w-full">
          <el-col :span="24" class="mb-10 text-#32ACFF">
            短链接：
          </el-col>
          <el-row class="!w-full h-46px flex justify-between items-center  bg-#32ACFF1A px-20px rounded-8px">
            <span>aaaaaaaaaaaaaaaa</span>
            <div class="flex items-center">
              <div class="flex mr-10 items-center">
                <span class="text-#32ACFF">统计</span>
                <el-icon color="#32ACFF" size="22" class="el-icon--right"><Refresh /></el-icon>
              </div>
              <el-button type="primary" round>复制
                <el-icon class="el-icon--right"><Connection /></el-icon>
              </el-button>
              <el-button round>二维码
                <el-icon class="el-icon--right"><ArrowDown /></el-icon>
              </el-button>
            </div>
          </el-row>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { Connection, Refresh, ArrowDown } from '@element-plus/icons-vue'

const list = [
  {
    title: '长链接', 
    value: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    url: ''
  },
]

</script>

<style lang="scss" scoped>

</style>