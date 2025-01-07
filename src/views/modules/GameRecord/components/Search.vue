<template>
  <div class="flex flex-col">
    <div class="flex items-center mb-30">
      <el-input class="!w-240" v-model="username" :placeholder="$t('会员账号')" />
      <el-select class="!w-240 ml-12" v-model="selectedOption" :placeholder="$t('注单状态')">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="$t(item.label)"
          :value="item.value">
        </el-option>
      </el-select>
      <el-select class="!w-240 ml-12" v-model="selectedCategory" :placeholder="$t('游戏类别')">
        <el-option
          v-for="category in categories"
          :key="category.value"
          :label="$t(category.label)"
          :value="category.value">
        </el-option>
      </el-select>
      <el-select class="!w-240 ml-12" v-model="selectedGameType" :placeholder="$t('游戏平台')">
        <el-option
          v-for="game in gameTypes"
          :key="game.value"
          :label="game.label"
          :value="game.value">
        </el-option>
      </el-select>
    </div>
    <TimeSelect
      @search="onSearch"
      @clear="onRefresh"
    />
  </div>
</template>

<script setup>
import TimeSelect from "@/components/TimeSelect";
import { useUserStore } from "@/store/modules/user.store.js";
import { useRoute } from "vue-router";
import { ref, onMounted } from 'vue';
import { _getGameType } from "@/service/api/game.js";
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const emit = defineEmits(['search', 'refresh'])

const userStore = useUserStore()
const route = useRoute()

const username = ref(route.query.name || '')
const selectedOption = ref('')
const selectedGameType = ref('')
const selectedCategory = ref('')
const options = ref([
  { value: '1', label: '已结算' },
  { value: '2', label: '未结算' },
])
const gameTypes = ref([])

const categories = ref([
  { value: 'TY', label: '体育' },
  { value: 'SX', label: '真人' },
  { value: 'BY', label: '捕鱼' },
  { value: 'QP', label: '棋牌' },
  { value: 'DZ', label: '电子' },
])

// 获取游戏类型数据
const fetchGameTypes = async () => {
  try {
    const response = await _getGameType();
    gameTypes.value = response.results.map(item => ({
      value: item.gameType,
      label: locale.value === 'zh-CN' ? item.gameTypeName : item.gameType
    }));
  } catch (error) {
    console.error("Failed to fetch game types:", error);
  }
}

fetchGameTypes();

// 搜索
const onSearch = (val) => {
  emit('search', {
    ...val,
    gamestatus: selectedOption.value,
    gameType: selectedGameType.value,
    gameBigType: selectedCategory.value,
    loginaccount: username.value,
    parentemployeecode: userStore.userInfo.employeecode,
    employeecode: ''
  })
}
onSearch()

const onRefresh = () => {
  username.value = ''
  selectedOption.value = ''
  selectedGameType.value = ''
  selectedCategory.value = ''
  emit('refresh')
}

</script>

<style lang="scss" scoped>
:deep(.el-form-item--default) {
  margin-bottom: 0;
}
</style>
