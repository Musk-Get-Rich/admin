<template>
  <div class="!w-full">
    <el-row
      v-for="(item, index) in list"
      :key="item.domainlink"
      class="!w-full border-double border-gray-200 border-1 rounded-3xl shadow-gray-500 py-20 px-20 mb-20"
    >
      <!--      <el-col :span="8" class="h-full bg-gray-300 rounded-3xl"></el-col>-->
      <el-col :span="24" class="h-full flex flex-col items-center justify-center">
        <el-row class="!w-full">
          <el-col :span="24" class="mb-10 text-#25D55B">
            {{$t('链接')+ index + 1}}：
          </el-col>
          <el-row class="!w-full py-12 flex justify-between items-center  bg-#25D55B1A px-20px rounded-8px">
            <div class="w-80% text-overflow-1">{{ item.domainlink }}</div>
            <div class="flex">
              <el-button
                type="success"
                round
                @click="copy(item.domainlink)"
              >{{ $t('复制') }}
                <el-icon class="el-icon--right">
                  <Connection/>
                </el-icon>
              </el-button>
<!--              <el-button round>二维码-->
<!--                <el-icon class="el-icon&#45;&#45;right">-->
<!--                  <ArrowDown/>-->
<!--                </el-icon>-->
<!--              </el-button>-->
            </div>
          </el-row>
        </el-row>
        <!--        <el-row class="!w-full">-->
        <!--          <el-col :span="24" class="mb-10 text-#32ACFF">-->
        <!--            短链接：-->
        <!--          </el-col>-->
        <!--          <el-row class="!w-full h-46px flex justify-between items-center  bg-#32ACFF1A px-20px rounded-8px">-->
        <!--            <span>aaaaaaaaaaaaaaaa</span>-->
        <!--            <div class="flex items-center">-->
        <!--              <div class="flex mr-10 items-center">-->
        <!--                <span class="text-#32ACFF">统计</span>-->
        <!--                <el-icon color="#32ACFF" size="22" class="el-icon&#45;&#45;right"><Refresh /></el-icon>-->
        <!--              </div>-->
        <!--              <el-button type="primary" round>复制-->
        <!--                <el-icon class="el-icon&#45;&#45;right"><Connection /></el-icon>-->
        <!--              </el-button>-->
        <!--              <el-button round>二维码-->
        <!--                <el-icon class="el-icon&#45;&#45;right"><ArrowDown /></el-icon>-->
        <!--              </el-button>-->
        <!--            </div>-->
        <!--          </el-row>-->
        <!--        </el-row>-->
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import {Connection, Refresh, ArrowDown} from '@element-plus/icons-vue'
import {copy} from "@/utils/index.js";

const props = defineProps({
  list: {
    type: Array,
    default: () => []
  }
})

</script>

<style lang="scss" scoped>

</style>
