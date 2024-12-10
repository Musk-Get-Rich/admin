<script setup>
import Title from "@/components/Title/index.vue";
import Upload from "@/components/Upload/index.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter()
const info = ref({})
const formRef = ref();
const formData = reactive({
  account: '',
  reason: ''
})

const submitForm = (formEl) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!')
    }
  })
}
</script>

<template>
  <el-card>
    <el-row justify="space-between">
      <Title name="会员注销申请" />
    </el-row>
    <div class="grid grid-cols-3 gap-10">
      <div class="flex flex-col justify-center p-8xl border border-solid border-gray-300 rounded-3xl">
        <div class="font-bold text-8xl">{{ info.loginaccount || 0 }}</div>
        <div class="text-6xl text-gray-400 mt-5">本月注销</div>
      </div>
      <div class="flex flex-col justify-center p-8xl border border-solid border-gray-300 rounded-3xl">
        <div class="font-bold text-8xl">{{ info.loginaccount || 0 }}</div>
        <div class="flex justify-between text-6xl text-gray-400 mt-5">
          <span>注销记录</span>
          <el-button type="success" size="small" round plain @click="router.push('/managementCenter/memberDeleteApply/records')">查看记录</el-button>
        </div>
      </div>
      <div class="flex flex-col justify-center p-8xl border border-solid border-gray-300 rounded-3xl">
        <div class="font-bold text-8xl">{{ info.countAgent || 0 }}</div>
        <div class="text-6xl text-gray-400 mt-5">注销率</div>
      </div>
    </div>
    <div class="mt-5xl py-6xl border border-t-dashed border-gray-300">
      <div class="flex justify-between">
        <div class="text-6xl">
          <div>
            <span>上传图片 (0/5)</span>
            <span class="text-5xl color-gray">文件格式为png,jpg,jpeg且大小不超过15MB</span>
          </div>
          <div class="mt-5xl">
            <Upload />
          </div>
        </div>
        <div class="text-6xl color-green">
          <span>教程说明</span>
        </div>
      </div>
      <div class="mt-7xl py-6xl">
        <div class="py-6xl">
          申请信息
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
                prop="account"
                label="会员账号"
                :rules="[
                  {
                    required: true,
                    message: '请输入会员账号',
                    trigger: 'blur',
                  },
                ]"
            >
              <el-input v-model="formData.account" />
            </el-form-item>
            <el-form-item
                prop="reason"
                label="原因说明"
                :rules="[
                  {
                    required: true,
                    message: '请输入原因说明',
                    trigger: 'blur',
                  },
                ]"
            >
              <el-input v-model="formData.reason" />
            </el-form-item>
            <el-form-item class="pl-80">
              <el-button type="primary" @click="submitForm(formRef)">提交申请</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="mt-7xl py-6xl">
        <div class="pt-6xl pb-xl">
          备注说明
        </div>
        <div class="text-5xl color-grey">
          <div class="my-6">1、输入需注销的会员账号系统将会识别是否符合注销条件（<span class="color-green">√代表符合注销条件</span>，<span class="color-red">X代表不符合注销条件）</span></div>
          <div class="my-6">2、符合注销条件的会员需提供与会员的对话记录，至少包含2项会员绑定的信息截图（姓名、绑定银行/加密货币地址尾号、邮箱、手机尾号）</div>
          <div class="my-6">3、发起申请后即可在注销记录查看申请状态</div>
          <div class="my-6">4、相关部门审核通过后，需会员登录账号在“我的”页面，退出按钮下方点击“一键注销”即可完成账号注销</div>
          <div class="my-6">5、完成注销后的会员即可重新注册并绑定已注销的账号信息</div>
          <div class="my-6">6、注销条件：</div>
          <div class="my-6">A、注册后1周无充值用户（包括送彩金不充值的也可以申请注销）</div>
          <div class="my-6">B、20天无登录用户，可申请注销。</div>
          <div class="my-6">C、30天无充值用户，无游戏用户，可申请注销</div>
          <div class="my-6">D、充值用户45天无进行游戏，可申请注销</div>
        </div>
      </div>
    </div>
  </el-card>
</template>
