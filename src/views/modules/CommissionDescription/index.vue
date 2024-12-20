<template>
  <div>
    <el-card>
      <Title :name="$t('佣金说明')"/>
      <!-- <el-row>
        <el-select
          v-model="value"
          placeholder="Select"
          size="large"
          style="width: 240px"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-row> -->
      <el-row class="mt-20">
        <el-col :span="25" class="mt-20">
          <el-table :data="tableData" style="width: 100%" :header-cell-style="{background:'#E7F4EB'}">
            <el-table-column prop="level" :label="$t('级别')" width="200" align="center"/>
            <el-table-column :label="$t('完成任一条件(越南)')" align="center" >
              <el-table-column min-width="300" prop="winLose" :label="$t('本月净输赢')" align="center" />
              <el-table-column min-width="300" prop="efficient" :label="$t('本月新增有效会员')" align="center" />
            </el-table-column>
            <el-table-column prop="member" :label="$t('活跃会员要求')" width="200" align="center"/>
            <el-table-column prop="commissionRate" :label="$t('佣金比例')" width="200" align="center"/>
          </el-table>
        </el-col>
      </el-row>
      <el-row>
        <el-col class="mt-40 mb-20" :span="24">{{$t('注意事项')}}：</el-col>
        <el-col :span="24" class="text-#868D88">
          <el-row class="!w-800px mb-10">
            {{ $t('1.佣金方案计算方式：代理线下所有站点兑换USD的实际净输赢，有效会员、活跃会员标准适用所有站点；') }}
          </el-row>
          <el-row class="!w-870px mb-10">
            {{ $t('马来： 2.有效会员标准：存款≥200，有效投注≥600，加密货币用户不计算在有效会员内；  香港： 2.有效会员标准：存款≥300，有效投注≥900，加密货币用户不计算在有效会员内；  越南： 2.有效会员标准：存款≥1000，有效投注≥3000，加密货币用户不计算在有效会员内；') }}  
          </el-row>
          <el-row class="!w-870px mb-10">
            {{ $t('3.活跃会员标准：会员达到有效标准后，继续充值、投注即算活跃会员；') }}  
          </el-row>
          <el-row class="!w-870px mb-10">
            {{ $t('4.佣金比例，是根据每月净输赢以及活跃会员要求为标准，需达到两项要求才能拿到相对于的佣金比例（活跃会员低于5不发放佣金）；') }}
          </el-row>
          <el-row class="!w-870px mb-10">
            {{ $t('5.级别1-4：当本月活跃会员要求达到5时，若本月净输赢未达到标准，本月新增有效会员81位也可享受2级佣金比例；') }}
          </el-row>
          <el-row class="!w-870px mb-10">
            {{ $t('6.本月亏损时，不计算负佣金，本月的净输赢额将累计到下个月对冲，假设本月达到2级佣金比例，但对冲完上月净输赢不足2级比例的需求时，依然按照2级比例计算；') }}
          </el-row>
          <el-row class="!w-870px mb-10">{{$t('范例一')}}： </el-row>
          <el-row class="!w-870px mb-10">
            {{ $t('上月净输赢：30000（会员盈利）') }}
          </el-row>
          <el-row class="!w-870px mb-10">
            {{ $t('本月净输赢：-40000（会员亏损），本月新增有效会员0，活跃会员5，佣金比例45%') }}
          </el-row>
          <el-row class="!w-870px mb-10">
            {{ $t('40000（本月净输赢）-30000（上月净输赢）=10000（本月计算佣金的净输赢）') }}
          </el-row>
          <el-row class="!w-870px mb-10">
            10000*0.45=4500{{ $t('（本月实际发放的佣金）') }}
          </el-row>
          <el-row class="!w-870px mb-10 mt-20">{{$t('范例二')}}：</el-row>
          <el-row class="!w-870px mb-10">{{ $t('上月净输赢：30000（会员盈利）') }}</el-row>
          <el-row class="!w-870px mb-10">{{ $t('本月净输赢：-40000（会员亏损），新增有效会员81，活跃会员5，佣金比例,55%') }}</el-row>
          <el-row class="!w-870px mb-10">{{ $t('40000（本月净输赢）-30000（上月净输赢）=10000（本月计算佣金的净输赢）') }}</el-row>
          <el-row class="!w-870px mb-10">10000*0.55=5500{{ $t('（本月实际发放的佣金）') }}</el-row>
          <el-row class="!w-870px mb-10 mt-20">{{ $t('7.佣金将在每月3号-5号发放账单，每月6号-10号发放佣金，佣金可当地银行提款，可加密货币提款，提款时间无限制；') }}</el-row>
          <el-row class="!w-870px mb-10">{{ $t('8.对账单存在疑问或其他争议请在佣金未发放时，在Telegram服务群组联系官方代理专员，佣金发放后将不受理账单问题') }}</el-row>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script setup>
import Title from "@/components/Title/index.vue";

const value = ref('')

const options = [
  {
    value: '',
    label: '越南',
  },
  {
    value: '香港',
    label: '香港',
  },
]

const tableData = [
  {
    level: '1',
    winLose: '1-100000',
    efficient: '0-80',
    member: '5',
    commissionRate: '45%',
  },
  {
    level: '2',
    winLose: '100001-300000',
    efficient: '81-200',
    member: '5',
    commissionRate: '55%',
  },
  {
    level: '3',
    winLose: '300001-1000000',
    efficient: '201-500',
    member: '5',
    commissionRate: '60%',
  },
  {
    level: '4',
    winLose: '1000001-9999999',
    efficient: '501-999',
    member: '5',
    commissionRate: '65%',
  }
]
</script>

<style lang="scss" scoped>

</style>