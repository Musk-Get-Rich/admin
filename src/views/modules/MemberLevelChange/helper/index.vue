<template>
    <el-dialog v-model="dialogVisible" :close-on-click-modal="false" width="800" :append-to-body="true" :title="$t('调级说明')">

        <!-- 表格部分 -->
        <el-table :data="levelData" border class="w-full bg-green">
            <el-table-column prop="level" :label="$t('等级')" align="center" />
            <el-table-column prop="hk" label="HK(CNY)" align="center" />
            <el-table-column prop="my" label="MY(MYR)" align="center" />
            <el-table-column prop="levelRange" :label="$t('等级')" align="center" />
            <el-table-column prop="vn" label="VN(KD)" align="center" />
        </el-table>

        <!-- 说明部分 -->
        <div class="space-y-20 mt-20">
            <section v-for="section in describeData" :key="section.key" class="section">
                <div class="font-bold mb-10">{{ $t(section.title) }}</div>
                <div class="space-y-5 text-gray-700 list-none text-justify">
                    <div v-for="(content, index) in section.content" :key="index" class="flex">
                        <div class="w-15 h-15 flex justify-center items-center flex-shrink-0 rounded-full text-white bg-green">{{ index + 1 }}</div>
                        <div class="ml-5">
                            {{ $t(content) }}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </el-dialog>
</template>

<script setup>
import { ref } from 'vue'

const dialogVisible = ref(false)

const levelData = [
    {
        level: 'VIP2',
        hk: '388',
        my: '18',
        levelRange: 'VIP2~VIP5',
        vn: '38'
    },
    {
        level: 'VIP3',
        hk: '388',
        my: '28',
        levelRange: 'VIP6~VIP10',
        vn: '58'
    },
    {
        level: 'VIP4',
        hk: '388',
        my: '58',
        levelRange: 'VIP11~VIP15',
        vn: '88'
    },
    {
        level: 'VIP5',
        hk: '388',
        my: '88',
        levelRange: 'VIP16~VIP20',
        vn: '188'
    },
    {
        level: 'VIP6',
        hk: '388',
        my: '188',
        levelRange: 'VIP21~VIP25',
        vn: '288'
    },
    {
        level: 'VIP7',
        hk: '588',
        my: '288',
        levelRange: 'VIP25~VIP30',
        vn: '388'
    },
    {
        level: 'VIP8',
        hk: '588',
        my: '388',
        levelRange: 'VIP31~VIP35',
        vn: '588'
    },
    {
        level: '-',
        hk: '-',
        my: '-',
        levelRange: 'VIP36~VIP40',
        vn: '688'
    },
    {
        level: '-',
        hk: '-',
        my: '-',
        levelRange: 'VIP41~VIP45',
        vn: '888'
    },
    {
        level: '-',
        hk: '-',
        my: '-',
        levelRange: 'VIP46~VIP50',
        vn: '1388'
    },
    {
        level: '-',
        hk: '-',
        my: '-',
        levelRange: 'VIP51~VIP60',
        vn: '1888'
    }
]

const describeData = [
    {
        key: 'upgradeRequirements',
        title: '会员升级申请要求',
        content: [
            "需上传会员在其他平台的账号以及等级截图、近一个月的存款记录截图、近一个月的投注记录截图，分别一张截图。",
            "请务必填写其他平台链接，以便专员对比等级。",
            "因平台所需条件不同，专员会根据会员原平台的升级条件以及福利兑换方为对比，等级将会调整时对应PP88的等级范围。\n举例：\nA.会员在其他平台等级为VIP5，但经过对比升级条件以及福利后会员适合在PP88调整的等级为VIP6，最终专员会调整成VIP6（最高调整VIP8）\nB.会员在其他平台等级为VIP5，但经过对比升级条件以及福利后会员适合在PP88调整的等级为VIP4，最终专员会调整成VIP4",
            "会员账号调整后，会员将有30天的保留时间，会员需在30天内产生游戏数据，30天后系统将根据会员的存款以及投注来决定是否保持当前等级。\n举例：\nA.假设会员的存款以及投注不符合当前等级范围，那么系统将会根据会员的存款、投注情况分配到对应等级，并享有90天保级时间\nB.假设会员的存款以及投注符合当前等级范围，那么系统将会对会员保留当前等级，并享有90天保级时间",
            "每个调整成功的会员系统将会派发迎新红包，红包金额如上所示",
            "如疑似截图造假或其它原因专员将会拒绝调级申请，拒绝原因可在调级记录查看"
        ]
    },
    {
        key: 'levelAdjustmentExample',
        title: 'PP88等级+1调整范例',
        content: [
            "VIP7以下（包含VIP7）在申请调级时可在原有基础等级上加一级；最高可调整VIP8。比如会员在某平台等级为VIP3，在申请调级时备注填写等级+1，我方专员就会在调级时为您的会员等级再加一级，即是VIP4。（如会员出现上述实际对应等级情况，那么也会在最终调整的等级上+1级，最高VIP8）"
        ]
    },
    {
        key: 'vipBenefits',
        title: 'VIP等级福利',
        content: [
            "调整成功后即送迎新红包",
            "日常：返水比例、提款次数、提款额度、充值优惠次数即刻生效。",
            "活动：霸王餐保单金额、周周负利回馈金额即刻生效。",
            "VIP：晋级礼金、生日礼金、VIP转运金、VIP周红包即刻生效。"
        ]
    }
]

const showDialog = () => {
    dialogVisible.value = true
}

defineExpose({
    showDialog
})
</script>
