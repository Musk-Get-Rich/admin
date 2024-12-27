<template>
  <div>
    <el-card>
      <Title :name="$t('公告')" />
     <!-- <Tabs :tabs="btns" :currentBtn="currentBtn" @tabClick="handleClick"/> -->
      <el-row>
        <div class="flex flex-1" v-if="list.length > 0">
          <Item class="flex-1" @click="toRouter(item)" v-for="(item,index) in list" :key="index" :item="item"/>
        </div>
        <div class="flex-1" v-else>
          <div class="text-center text-16 text-gray-500">
            {{ $t('暂无数据') }}
          </div>
        </div>
      </el-row>
    </el-card>
  </div>
</template>

<script setup>
import {ref,onMounted} from "vue";
import {useRouter} from "vue-router";
import Title from "@/components/Title/index.vue";
import Item from './components/Item.vue';
import Tabs from "@/components/Tabs";
import {apiNotic} from "@/service/api/api.js";

const router = useRouter()

const currentBtn = ref('资讯')

// const btns = ref(['平台公告','会员信息','体育公告','真人公告','彩票公告'])
const btns = ref(['资讯','维护','活动','其他'])

const toRouter = (item) => {
  router.push({
    path: '/top/announcement/detail',
    query: {
      title: item.title,
      content: item.content,
      time: item.createtime,
    }
  })
}

const handleClick = (btn) => {
  currentBtn.value = btn;
  list.value = []
  // 根据字符串在数组中查找下标
  const index = btns.value.indexOf(btn)
  getList(index + 1)
}

const list = ref([])

const getList = (index = 1) => {
  apiNotic({
    isroll: 0 + '',
    notickind: index + '',
    notictype: '3'
  }).then(res => {
    console.log(res)
    list.value = res.list
  })
}

onMounted(() => {
  getList()
})
</script>

<style lang="scss" scoped>

</style>
