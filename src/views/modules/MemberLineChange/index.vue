<script setup>
import Title from "@/components/Title/index.vue";
import Upload from "@/components/Upload/index.vue";
import {onMounted, ref} from "vue";
import { useRouter } from "vue-router";
import {apiAgentChangeApply, apiAgentChangeStatistics} from "@/service/api/api.js";
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
  terminal: '',
  opreatetype: '1'
})

onMounted(() => {
  apiAgentChangeStatistics({
    opreatetype: '2'
  }).then(res => {
    info.value = res
  })
})

const submitForm = (formEl) => {
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
      <Title name="会员转线申请" />
    </el-row>
    <div class="grid grid-cols-3 gap-10">
      <div class="flex flex-col justify-center p-8xl border border-solid border-gray-300 rounded-3xl">
        <div class="font-bold text-8xl">{{ info.monthNum || 0 }}</div>
        <div class="text-6xl text-gray-400 mt-5">本月转线</div>
      </div>
      <div class="flex flex-col justify-center p-8xl border border-solid border-gray-300 rounded-3xl">
        <div class="font-bold text-8xl">{{ info.allNum || 0 }}</div>
        <div class="flex justify-between text-6xl text-gray-400 mt-5">
          <span>转线记录</span>
          <el-button type="success" size="small" round plain @click="router.push('/managementCenter/memberLineChange/records')">查看详情</el-button>
        </div>
      </div>
      <div class="flex flex-col justify-center p-8xl border border-solid border-gray-300 rounded-3xl">
        <div class="font-bold text-8xl">{{ info.monthRatio || "0.00%" }}</div>
        <div class="text-6xl text-gray-400 mt-5">转线率</div>
      </div>
    </div>
    <div class="mt-5xl py-6xl border border-t-dashed border-gray-300">
      <div class="flex justify-between">
        <div class="text-6xl">
          <div>
            <span>上传图片 ({{ formData.linkurl.split(',').filter(a => !!a).length || 0 }}/5)</span>
            <span class="text-5xl color-gray">文件格式为png,jpg,jpeg且大小不超过15MB</span>
          </div>
          <div class="mt-5xl">
            <Upload v-model:images="formData.linkurl" />
          </div>
        </div>
        <div>
          <div class="flex items-center text-6xl color-green cursor-pointer" @click="dialogHelpVisible = true">
            <span>教程说明</span>
            <img class="w-16 h-16 shrink-0 ml-5" src="@/assets/images/member/FAQ-Circle.png" alt="" />
          </div>
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
                prop="loginaccount"
                label="会员账号"
                :rules="[
                  {
                    required: true,
                    message: '请输入会员账号',
                    trigger: 'blur',
                  },
                ]"
            >
              <el-input v-model="formData.loginaccount" />
            </el-form-item>
<!--            <el-form-item-->
<!--                prop="link"-->
<!--                label="引导链接"-->
<!--                :rules="[-->
<!--                  {-->
<!--                    required: true,-->
<!--                    message: '请输入引导链接',-->
<!--                    trigger: 'blur',-->
<!--                  },-->
<!--                ]"-->
<!--            >-->
<!--              <el-input v-model="formData.link" />-->
<!--            </el-form-item>-->
            <el-form-item
                prop="terminal"
                label="终端"
                :rules="[
                  {
                    required: true,
                    message: '请输入终端',
                    trigger: 'blur',
                  },
                ]"
            >
              <el-input v-model="formData.terminal" />
            </el-form-item>
            <el-form-item
                prop="remark"
                label="备注"
            >
              <el-input v-model="formData.remark" />
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
          <div class="my-6">1、会员是在总线的，不在其他代理线下。 </div>
          <div class="my-6">2、充值少于6,000。 </div>
          <div class="my-6">3、提供登陆信息图片和其他证明在你线下的图片。输入需注销的会员账号系统将会识别是否符合</div>
        </div>
      </div>
    </div>
    <el-dialog v-model="dialogHelpVisible" title="会员注销教程" width="800">
      <div>
        <div>
          <el-carousel ref="carouselRef" indicator-position="outside" height="350px" trigger="click" arrow="never" :autoplay="false">
            <el-carousel-item>
              <div class="flex flex-col">
                <img class="w-full" src="@/assets/images/member/MemberLineChangeHelp1.png" alt="" />
                <div class="mt-15">
                  <div>1.上传与会员的对话截图，至少包含注册链接、会员账号、日期。 </div>
                  <div>2.输入需转线的会员账号。</div>
                </div>
              </div>
            </el-carousel-item>
            <el-carousel-item>
              <div class="flex flex-col">
                <img class="w-full" src="@/assets/images/member/MemberLineChangeHelp2.png" alt="" />
                <div class="mt-15">
                  <div>3.输入发给会员的注册链接。</div>
                  <div>4.选择会员设备类型（此项可以随意选择）完成以上步骤后即可提交申请</div>
                </div>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="flex justify-center">
          <el-button @click="carouselRef.prev()">上一步</el-button>
          <el-button type="primary" @click="carouselRef.next()">下一步</el-button>
        </div>
      </div>
    </el-dialog>
  </el-card>
</template>
