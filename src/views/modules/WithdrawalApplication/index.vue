<template>
  <div>
    <el-card>
      <Title name="提现申请" />
      <div class="w-529px h-173px rounded-3xl theme-shadow">
        <div class="w-full h-46px bg-#25D55B rounded-t-3xl flex items-center pl-20 box-border">
          <img class="w-25 h-25 mr-5" src="@/assets/images/withdrawal/wallet.png" alt="">
          <span class="text-white">佣金钱包</span>
        </div>
        <div class="!w-full h-127px flex items-center justify-center">
          <div class="w-49% flex flex-col items-center">
              <span class="text-28px mb-10">{{ userStore.userInfo.balance || 0 }}</span>
              <span>可用余额(HKD)</span>
          </div>
          <div class="w-2px h-67px bg-#F4F5F9"></div>
          <div class="w-49% flex flex-col items-center text-#868D88">
              <span class="text-28px mb-10">0</span>
              <span>不可用余额(HKD)</span>
          </div>
        </div>
      </div>
      <Tabs :tabs="btns" :currentBtn="currentBtn" @tabClick="handleClick"/>
      <Cryptocurrency v-if="currentBtn === '提款至虚拟币'"/>
      <Record v-if="currentBtn === '记录'"/>
    </el-card>
  </div>
</template>

<script setup>
import Title from "@/components/Title/index.vue";
import Cryptocurrency from './components/Cryptocurrency.vue';
import Record from './components/Record.vue';
import Tabs from "@/components/Tabs";
import {useUserStore} from "@/store/modules/user.store.js";

const userStore = useUserStore()

const currentBtn = ref('提款至虚拟币')

const btns = ref(['提款至虚拟币','记录'])

const handleClick = (btn) => {
  console.log(btn)
  currentBtn.value = btn
}
</script>

<style lang="scss" scoped>

</style>
