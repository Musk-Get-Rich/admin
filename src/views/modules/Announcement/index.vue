<template>
  <div>
    <el-card>
      <Title :name="$t('公告')" />
     <Tabs :tabs="btns" :currentBtn="currentBtn" @tabClick="handleClick"/>
      <el-row>
        <Item @click="toRouter" />
      </el-row>
    </el-card>
  </div>
</template>

<script setup>
import {useRouter} from "vue-router";
import Title from "@/components/Title/index.vue";
import Item from './components/Item.vue';
import Tabs from "@/components/Tabs";
import {apiPromotionWebsite} from "@/service/api/api.js";

const router = useRouter()

const currentBtn = ref('平台公告')

const btns = ref(['平台公告','会员信息','体育公告','真人公告','彩票公告'])

const toRouter = (item) => {
  router.push({
    path: '/top/announcement/detail',
    query: {
      id: item.id
    }
  })
}

const handleClick = (btn) => {
  console.log(btn)
  currentBtn.value = btn
}

const list = ref([])

apiPromotionWebsite({
  parentemployeecode: null
}).then(res => {
  list.value = res
  console.log(res);
})

</script>

<style lang="scss" scoped>

</style>
