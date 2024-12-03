<template>
    <el-card class="mb-8">
        <el-row>
            <el-col :span="12">
                <el-row align="middle" class="mb-10">
                    <div class="rounded-full bg-green-400 w-10 h-10 mr-5"></div>
                    <span>站点选择</span>
                </el-row>
                <el-row>
                    <div v-for="s in sites" :key="s.value"
                        class="border-1 border-gray-400 border-solid rounded-3xl px-20 py-6 mr-10"
                        :class="{ 'bg-green-400 border-0! color-white!': site === s.value }" @click="changeSite(s.value)"
                        >
                        {{ s.label }}
                    </div>
                </el-row>
            </el-col>
            <el-col :span="12">
                <el-row align="middle" class="mb-10">
                    <div class="rounded-full bg-green-400 w-10 h-10 mr-5"></div>
                    <span>货币选择</span>
                </el-row>
                <el-row>
                    <div v-for="c in coins" :key="c.value" class="border-1 border-gray-400 border-solid rounded-3xl px-20 py-6 mr-10" :class="{ 'bg-green-400 border-0! color-white!': coin === c.value }" @click="changeCoin(c.value)">{{ c.label }}</div>
                </el-row>
            </el-col>
        </el-row>
    </el-card>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useCommonStore } from "@/store/modules/common.store.js";

const { site, coin } = storeToRefs(useCommonStore());
const { changeCoin, changeSite } = useCommonStore();

const sites = [
    {
        value: '',
        label: '全部'
    },
    {
        value: 'mas',
        label: '马来'
    },
    {
        value: 'hk  ',
        label: '香港'
    },
    {
        value: 'vn',
        label: '越南'
    }
]

const coins = [
    {
        value: 'usd',
        label: '美金'
    },
    {
        value: 'all',
        label: '本地法币'
    },
]
</script>