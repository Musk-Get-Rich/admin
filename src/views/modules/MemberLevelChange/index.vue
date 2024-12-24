<script setup>
import Title from "@/components/Title/index.vue";
import Upload from "@/components/Upload/index.vue";
import {onMounted, ref} from "vue";
import { useRouter } from "vue-router";
import { apiAgentLevelChange, apiAgentLevelStatistics } from "@/service/api/api.js";
import { ElMessage } from "element-plus";
import Helper from './helper/index.vue'
import {useRoute} from "vue-router";

const router = useRouter()
const info = ref({})
const formRef = ref();
const helperRef = ref();
const route = useRoute()

const formData = reactive({
  picurl: '',
  loginaccount: '',
  platformuserlevel: '',
  platformlinkurl: '',
  platformusername: '',
  remark: ''
})
formData.loginaccount = route.query.loginaccount || ''

onMounted(() => {
  apiAgentLevelStatistics().then(res => {
    info.value = res
  })
})

const submitForm = (formEl) => {
  if (!formEl) return
  formEl.validate(async (valid) => {
    if (valid) {
      const res = await apiAgentLevelChange({ ...formData })
      formEl.resetFields()
      formData.picurl = ''
      ElMessage({
        message: res || '操作成功',
        type: 'success',
      })
    } else {
      console.log('error submit!')
    }
  })
}
</script>

<template>
  <el-card>
    <el-row justify="space-between">
      <Title :name="$t('会员调级申请')" />
    </el-row>
    <div class="grid grid-cols-3 gap-10">
      <div class="flex flex-col justify-center p-8xl border border-solid border-gray-300 rounded-3xl">
        <div class="font-bold text-8xl">{{ info.monthNum || 0 }}</div>
        <div class="text-6xl text-gray-400 mt-5">{{ $t('本月调级') }}</div>
      </div>
      <div class="flex flex-col justify-center p-8xl border border-solid border-gray-300 rounded-3xl">
        <div class="font-bold text-8xl">{{ info.allNum || 0 }}</div>
        <div class="flex justify-between text-6xl text-gray-400 mt-5">
          <span>{{ $t('调级记录') }}</span>
          <el-button type="success" size="small" round plain @click="router.push('/managementCenter/memberLevelChange/records')">{{ $t('查看详情') }}</el-button>
        </div>
      </div>
      <div class="flex flex-col justify-center p-8xl border border-solid border-gray-300 rounded-3xl">
        <div class="font-bold text-8xl">{{ info.monthRatio || "0.00%" }}</div>
        <div class="text-6xl text-gray-400 mt-5">{{ $t('调级率') }}</div>
      </div>
    </div>
    <div class="mt-5xl py-6xl border border-t-dashed border-gray-300">
      <div class="flex justify-between">
        <div class="text-6xl">
          <div>
            <span>{{ $t('上传图片') }} ({{ formData.picurl.split(',').filter(a => !!a).length || 0 }}/5)</span>
            <span class="text-5xl color-gray">{{$t('文件格式为png,jpg,jpeg且大小不超过')}}15MB</span>
          </div>
          <div class="mt-5xl">
            <Upload v-model:images="formData.picurl" />
          </div>
        </div>
        <div>
          <div class="flex items-center text-6xl color-green cursor-pointer" @click="helperRef.showDialog()">
            <span>{{ $t('教程说明') }}</span>
            <img class="w-16 h-16 shrink-0 ml-5" src="@/assets/images/member/FAQ-Circle.png" alt="" />
          </div>
        </div>
      </div>
      <div class="mt-7xl py-6xl">
        <div class="py-6xl">
          {{ $t('申请信息') }}
        </div>
        <div class="flex justify-center">
          <el-form
              ref="formRef"
              style="max-width: 600px"
              :model="formData"
              label-width="auto"
              class="w-[70%]"
          >
            <el-form-item
                prop="loginaccount"
                :label="$t('会员账号')"
                :rules="[
                  {
                    required: true,
                    message: $t('请输入会员账号'),
                    trigger: 'blur',
                  },
                ]"
            >
              <el-input v-model="formData.loginaccount" :placeholder="$t('请输入会员账号')" />
            </el-form-item>
            <el-form-item
                prop="platformuserlevel"
                :label="$t('其他平台等级')"
                :rules="[
                  {
                    required: true,
                    message: $t('请输入其他平台等级'),
                    trigger: 'blur',
                  },
                ]"
            >
              <el-input v-model="formData.platformuserlevel" :placeholder="$t('请输入其他平台等级')" />
            </el-form-item>
            <el-form-item
                prop="platformlinkurl"
                :label="$t('其他平台链接')"
                :rules="[
                  {
                    required: true,
                    message: $t('请输入其他平台链接'),
                    trigger: 'blur',
                  },
                ]"
            >
              <el-input v-model="formData.platformlinkurl" :placeholder="$t('请输入其他平台链接')" />
            </el-form-item>
            <el-form-item
                prop="platformusername"
                :label="$t('其他平台账号')"
                :rules="[
                  {
                    required: true,
                    message: $t('请输入其他平台账号'),
                    trigger: 'blur',
                  },
                ]"
            >
              <el-input v-model="formData.platformusername" :placeholder="$t('请输入其他平台账号')" />
            </el-form-item>
            <el-form-item
                prop="remark"
                :label="$t('备注')"
            >
              <el-input v-model="formData.remark" :placeholder="$t('请输入备注')" />
            </el-form-item>
            <el-form-item class="pl-80">
              <el-button type="primary" @click="submitForm(formRef)">{{ $t('提交申请') }}</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="mt-7xl py-6xl">
        <div class="pt-6xl pb-xl">
          {{ $t('备注说明') }}
        </div>
        <div class="text-5xl color-grey">
          <div class="my-6">1、{{ $t('需提供会员在其他平台的账号、等级截图，以及近一个月的存款截图、近一个月的投注截图') }}</div>
          <div class="my-6">2、{{ $t('需提供其他平台链接') }}</div>
          <div class="my-6">3、{{ $t('其它调级规则请查看“调级说明”') }}</div>
        </div>
      </div>
    </div>
    <Helper ref="helperRef" />
  </el-card>
</template>
