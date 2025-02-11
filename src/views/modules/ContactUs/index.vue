<template>
  <div>
    <el-card>
      <Title :name="$t('联系我们')" />
      <div class="text-16px text-#3A3541 mb-20 font-600">{{$t('投诉箱')}}</div>
      <el-row class="!w-full items-center mb-20">
        <span class="mr-10 block w-120px text-right">{{$t('意见类型')}}</span>
        <el-select
          v-model="formDataComplaintBox.questiontype"
          class="!w-571px"
          :placeholder="$t('请选择问题类型')"
          size="large"
        >
          <el-option
            v-for="item in questionTypeOptions[1]"
            :key="item"
            :label="item"
            :value="item"
          />
        </el-select>
      </el-row>
      <el-row class="!w-full items-center">
        <span class="mr-10 block w-120px text-right">{{ $t('描述') }}</span>
        <el-input
          v-model="formDataComplaintBox.Description"
          class="!w-571px !h-92px"
          :rows="4"
          type="textarea"
          :placeholder="$t('请输入您的描述')"
        />
      </el-row>
      <el-row class="pl-130 mt-20">
        <Upload v-model:images="formDataComplaintBox.piclink"/>
      </el-row>
      <el-row class="pl-130 mt-20">
        <el-button
          class="!w-300px !h-46px !rounded-40px !bg-#25D55B"
          type="success"
          :loading="loadingComplaintBox"
          @click="handleSubmitComplaintBox"
        >
          {{ $t('确认') }}
        </el-button>
      </el-row>
      <div class="text-16px text-#3A3541 mb-20 mt-50 font-600">{{ $t('回电服务') }}</div>
      <div class="mt-20 text-14px text-#3A3541 mb-40">{{ $t('本公司提供24小时全天候的高素质客户服务热线，及多种语言选择，包括中文、台语及英语，如有任何疑问请与我们联系。') }}</div>
      <el-row class="!w-full items-center mb-20">
        <span class="mr-10 block w-120px text-right">{{ $t('问题类型') }}</span>
        <el-select
          v-model="formDataCallbackService.questiontype"
          class="!w-571px"
          :placeholder="$t('请选择问题类型')"
          size="large"
        >
          <el-option
            v-for="item in questionTypeOptions[2]"
            :key="item"
            :label="item"
            :value="item"
          />
        </el-select>
      </el-row>
      <el-row class="!w-full items-center mb-20">
        <span class="mr-10 block w-120px text-right">{{ $t('语言') }}</span>
        <el-select
          v-model="formDataCallbackService.language"
          class="!w-571px"
          :placeholder="$t('请选择语言')"
          size="large"
        >
          <el-option
            v-for="item in languageOptions"
            :key="item"
            :label="item"
            :value="item"
          />
        </el-select>
      </el-row>
      <el-row class="!w-full items-center mb-20">
        <span class="mr-10 block w-120px text-right">{{ $t('手机号码') }}</span>
        <el-input
          v-model="formDataCallbackService.phonenumber"
          size="large"
          class="!w-571px"
          :placeholder="$t('+请加上区域码，例如大陆地区+86，台湾地区+886')"
        />
      </el-row>
      <el-row class="pl-130 mt-20">
        <el-button
          class="!w-300px !h-46px !rounded-40px !bg-#25D55B"
          type="success"
          :loading="loadingCallbackService"
          @click="handleSubmitCallbackService"
        >
          {{ $t('确认') }}
        </el-button>
      </el-row>
      <el-row class="flex flex-col">
        <div class="font-600 text-16px text-#3A3541 mb-20 mt-30">{{ $t('电子邮件客服') }}</div>
        <div class="text-14px text-#3A3541 mb-30 my-10">{{ $t('如您有任何相关问题，希望通过电子邮件与我们联系，请发邮件到下方地址，我们专业的客服人员，将尽速回复您的疑问，谢谢!') }}
        </div>
        <div class="cursor-pointer w-300px h-46px border-1 border-solid border-#25D55B text-#25D55B px-10px mr-10 rounded-8px flex items-center justify-center"
        @click="handleEmailSupport">
          盛乐体育hk88@gmail.com
        </div>
      </el-row>
    </el-card>
  </div>
</template>

<script setup>
import Title from "@/components/Title/index.vue";
import { ElMessage } from 'element-plus'
import { Plus } from '@element-plus/icons-vue'
import { apiContactUs } from '@/service/api/user.js'
import Upload from "@/components/Upload/index.vue"
import { useI18n } from "vue-i18n";

const { t } = useI18n()

const questionTypeOptions = computed(() => {
  return {
    1: [t('建议'), t('投诉')],
    2: [t('点数问题'), t('球赛问题'), t('彩球问题'), t('现场游戏问题'), t('会员注册问题'), t('电子游戏问题')]
  }
})

const languageOptions = computed(() => {
  return ['English', '繁体中文', '简体中文']
})

const formDataComplaintBox = ref({
  questiontype: '',
  Description: '',
  piclink: ''
})

const formDataCallbackService = ref({
  questiontype: '',
  language: '',
  phonenumber: ''
})

const loadingComplaintBox = ref(false)
const loadingCallbackService = ref(false)

const handleSubmitComplaintBox = async () => {
  if (!formDataComplaintBox.value.questiontype || !formDataComplaintBox.value.Description) {
    ElMessage.error(t('请填写所有必填字段'))
    return
  }
  loadingComplaintBox.value = true
  try {
    const response = await apiContactUs({
      complainttype: 1,
      questiontype: formDataComplaintBox.value.questiontype,
      Description: formDataComplaintBox.value.Description,
      piclink: formDataComplaintBox.value.piclink
    })
    ElMessage.success(t('投诉箱提交成功'))
    // 清空投诉箱表单
    formDataComplaintBox.value = {
      questiontype: '',
      Description: '',
      piclink: ''
    }
  } catch (error) {
    ElMessage.error(t('投诉箱提交失败'))
  } finally {
    loadingComplaintBox.value = false
  }
}

const handleSubmitCallbackService = async () => {
  if (!formDataCallbackService.value.questiontype || !formDataCallbackService.value.language || !formDataCallbackService.value.phonenumber) {
    ElMessage.error(t('请填写所有必填字段'))
    return
  }
  loadingCallbackService.value = true
  try {
    const response = await apiContactUs({
      complainttype: 2,
      questiontype: formDataCallbackService.value.questiontype,
      language: formDataCallbackService.value.language,
      phonenumber: formDataCallbackService.value.phonenumber
    })
    ElMessage.success(t('回电服务提交成功'))
    // 清空回电服务表单
    formDataCallbackService.value = {
      questiontype: '',
      language: '',
      phonenumber: ''
    }
  } catch (error) {
    ElMessage.error(t('回电服务提交失败'))
  } finally {
    loadingCallbackService.value = false
  }
}

const handleEmailSupport = () => {
  const email = '盛乐体育hk88@gmail.com' // 替换为实际的客服邮箱
  const subject = encodeURIComponent(t('客户支持请求'))
  const body = encodeURIComponent(t('您好，我需要帮助...'))
  window.location.href = `mailto:${email}?subject=${subject}&body=${body}`
}

</script>

<style lang="scss" scoped>
.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>
