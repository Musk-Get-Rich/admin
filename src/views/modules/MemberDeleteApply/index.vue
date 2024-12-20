<script setup>
import Title from "@/components/Title/index.vue";
import Upload from "@/components/Upload/index.vue";
import {onMounted, ref} from "vue";
import { useRouter } from "vue-router";
import { apiAgentChangeApply, apiAgentChangeStatistics } from "@/service/api/api.js";
import { ElMessage } from "element-plus";

const router = useRouter()
const info = ref({})
const formRef = ref();
const dialogHelpVisible = ref(false);
const carouselRef = ref();

const formData = reactive({
  linkurl: '',
  loginaccount: '',
  remark: '',
  opreatetype: '1'
})

onMounted(() => {
  apiAgentChangeStatistics({
    opreatetype: '1'
  }).then(res => {
    info.value = res
  })
})

const submitForm = async (formEl) => {
  if (!formEl) return
  formEl.validate(async (valid) => {
    if (valid) {
      const res = await apiAgentChangeApply({ ...formData })
      formEl.resetFields()
      formData.linkurl = ''
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
      <Title :name="$t('会员注销申请')" />
    </el-row>
    <div class="grid grid-cols-3 gap-10">
      <div class="flex flex-col justify-center p-8xl border border-solid border-gray-300 rounded-3xl">
        <div class="font-bold text-8xl">{{ info.monthNum || 0 }}</div>
        <div class="text-6xl text-gray-400 mt-5">{{ $t('本月注销') }}</div>
      </div>
      <div class="flex flex-col justify-center p-8xl border border-solid border-gray-300 rounded-3xl">
        <div class="font-bold text-8xl">{{ info.allNum || 0 }}</div>
        <div class="flex justify-between text-6xl text-gray-400 mt-5">
          <span>{{ $t('注销记录') }}</span>
          <el-button type="success" size="small" round plain @click="router.push('/managementCenter/memberDeleteApply/records')">{{ $t('查看记录') }}</el-button>
        </div>
      </div>
      <div class="flex flex-col justify-center p-8xl border border-solid border-gray-300 rounded-3xl">
        <div class="font-bold text-8xl">{{ info.monthRatio || "0.00%" }}</div>
        <div class="text-6xl text-gray-400 mt-5">{{ $t('注销率') }}</div>
      </div>
    </div>
    <div class="mt-5xl py-6xl border border-t-dashed border-gray-300">
      <div class="flex justify-between">
        <div class="text-6xl">
          <div>
            <span>{{ $t('上传图片') }} ({{ formData.linkurl.split(',').filter(a => !!a).length || 0 }}/5)</span>
            <span class="text-5xl color-gray">{{$t('文件格式为png,jpg,jpeg且大小不超过') + '15MB'}}</span>
          </div>
          <div class="mt-5xl">
            <Upload v-model:images="formData.linkurl" />
          </div>
        </div>
        <div>
          <div class="flex items-center text-6xl color-green cursor-pointer" @click="dialogHelpVisible = true">
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
              <el-input v-model="formData.loginaccount" />
            </el-form-item>
            <el-form-item
                prop="remark"
                :label="$t('原因说明')"
                :rules="[
                  {
                    required: true,
                    message: $t('请输入原因说明'),
                    trigger: 'blur',
                  },
                ]"
            >
              <el-input v-model="formData.remark" />
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
          <div class="my-6">1、{{$t('输入需注销的会员账号系统将会识别是否符合注销条件')}}（<span class="color-green">√{{ $t('代表符合注销条件') }}</span>，<span class="color-red">X{{$t('代表不符合注销条件')}}）</span></div>
          <div class="my-6">2、{{ $t('符合注销条件的会员需提供与会员的对话记录，至少包含2项会员绑定的信息截图（姓名、绑定银行/加密货币地址尾号、邮箱、手机尾号）') }}</div>
          <div class="my-6">3、{{ $t('发起申请后即可在注销记录查看申请状态') }}</div>
          <div class="my-6">4、{{ $t("相关部门审核通过后，需会员登录账号在“我的”页面，退出按钮下方点击“一键注销”即可完成账号注销") }}</div>
          <div class="my-6">5、{{ $t('完成注销后的会员即可重新注册并绑定已注销的账号信息') }}</div>
          <div class="my-6">6、{{ $t('注销条件：') }}</div>
          <div class="my-6">A、{{ $t('注册后1周无充值用户（包括送彩金不充值的也可以申请注销）') }}</div>
          <div class="my-6">B、{{ $t('20天无登录用户，可申请注销。') }}</div>
          <div class="my-6">C、{{ $t('30天无充值用户，无游戏用户，可申请注销') }}</div>
          <div class="my-6">D、{{ $t('充值用户45天无进行游戏，可申请注销') }}</div>
        </div>
      </div>
    </div>
    <el-dialog v-model="dialogHelpVisible" :title="$t('会员注销教程')" width="800">
      <div>
        <div>
          <el-carousel ref="carouselRef" indicator-position="outside" height="350px" trigger="click" arrow="never" :autoplay="false">
            <el-carousel-item>
              <div class="flex flex-col">
                <img class="w-full" src="@/assets/images/member/MemberDeleteHelp1.png" alt="" />
                <div class="mt-15">
                  <div>1.{{ $t('输入会员账号，√代表会员符合注销。') }}</div>
                  <div>2.{{ $t('上传与会员的对话截图，至少包含2项会员绑定的信息即可提交申请注销') }}</div>
                </div>
              </div>
            </el-carousel-item>
            <el-carousel-item>
              <div class="flex flex-col">
                <img class="w-full" src="@/assets/images/member/MemberDeleteHelp2.png" alt="" />
                <div class="mt-15">
                  <div>3.{{$t('审核通过后')}}，<span class="text-red">{{ $t('需会员登录账号') }}</span>{{ $t('在“我的”页面') }}<span class="text-red">{{ $t('点击一键注销') }}</span>{{ $t('即可完成账号注销') }}</div>
                </div>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="flex justify-center">
          <el-button @click="carouselRef.prev()">{{$t('上一步')}}</el-button>
          <el-button type="primary" @click="carouselRef.next()">{{ $t('下一步') }}</el-button>
        </div>
      </div>
    </el-dialog>
  </el-card>
</template>
