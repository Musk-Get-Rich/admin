<template>
  <Teleport to="body">
    <el-dialog v-model="dialogVisible" :title="`${type === 'add' ? '创建' : '编辑'}代理`" width="40%" :before-close="close">
      <div class="!w-full flex justify-center">
        <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" status-icon class="!w-[70%]" label-width="100"
          label-position="left">
          <el-form-item label="代理账号" prop="account">
            <el-input v-model="ruleForm.account" type="text" autocomplete="new-password" placeholder="请输入代理账号" />
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="ruleForm.password" type="password" autocomplete="new-password" placeholder="请输入密码" />
          </el-form-item>
          <el-form-item label="姓名" prop="name">
            <el-input v-model="ruleForm.name" type="text" placeholder="请输入姓名" />
          </el-form-item>
          <el-form-item label="佣金比例" prop="rate">
            <el-input v-model="ruleForm.rate" type="text" placeholder="请输入佣金比例" />
          </el-form-item>
          <el-form-item label="Telegram" prop="telegram">
            <el-input v-model="ruleForm.telegram" type="text" placeholder="请输入Telegram" />
          </el-form-item>
          <el-form-item label="备注" prop="remark">
            <el-input v-model="ruleForm.telegram" type="textarea" placeholder="请输入备注" />
          </el-form-item>
          <el-form-item label="其他联系方式" prop="contract">
            <el-input v-model="ruleForm.contract" type="text" placeholder="请输入其他联系方式" />
          </el-form-item>
          <el-form-item>
            <div class="w-full flex justify-end">
              <el-button :icon="Check" type="primary" @click="submitForm">
                提交
              </el-button>
              <el-button :icon="Delete" @click="close">取消</el-button>
            </div>
          </el-form-item>
        </el-form>
      </div>
    </el-dialog>
  </Teleport>
</template>

<script setup>
import { ElMessage, ElMessageBox } from 'element-plus'
import { Check, Delete } from '@element-plus/icons-vue'
import { year } from "@/config/data.js"
import RichTextEditor from "@/components/RichTextEditor/RichTextEditor.vue";
// import {apiChangeMaterial, apiGetMaterialTypeAll} from "@/service/api/api.js";
import { storeToRefs } from "pinia";
import { useDeviceStore } from "@/store/modules/device.store.js";

const props = defineProps({
  type: {
    type: String,
    required: true
  },
  info: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['refresh', 'close'])

const { isMobile } = storeToRefs(useDeviceStore())

const materialTypeList = ref([])
// apiGetMaterialTypeAll().then(res => {
//   console.log(res.data, 'apiGetMaterialTypeAll');
//   materialTypeList.value = res.data.map(item => ({
//     label: item.title,
//     value: item.id
//   }))
// })

const ruleFormRef = ref(null)
const ruleForm = ref({
  id: '',
  year: '',
  period: '',
  articleTypeId: '',
  title: '',
  content: '',
  sort: ''
})

watch(() => props.info, () => {
  if (Object.keys(props.info).length > 0) {
    Object.keys(ruleForm.value).forEach(key => {
      ruleForm.value[key] = props.info[key]
    })
  }
})

const rules = reactive({
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
  ],
  name: [
    { required: true, message: '请输入姓名', trigger: 'blur' },
  ],
})

const submitForm = async () => {
  if (!ruleFormRef.value) return;

  await ruleFormRef.value.validate((valid, fields) => {
    if (valid) {
      onSubmit()
    } else {
      console.log('error submit!', fields)
    }
  })
}

const onSubmit = () => {
  const res = (materialTypeList.value.find(item => item.value === ruleForm.value.articleTypeId))


  const method = props.type === "add" ? 'add' : 'update'

  console.log(ruleForm.value);

  // apiChangeMaterial({
  //   ...ruleForm.value,
  //   articleTypeName: res ? res?.label : '',
  // }, method).then(res => {
  //   console.log(res);
  //   ElMessage.success(`${props.type === 'add' ? '新增' : '编辑'}成功`)

  //   emit('refresh')

  //   close()
  // }).catch(err => {

  // })
}

const resetForm = () => {
  if (!ruleFormRef.value) return
  ruleFormRef.value.resetFields()

  ruleForm.value = {
    id: '',
    year: '',
    period: '',
    articleTypeId: '',
    title: '',
    content: '',
    sort: ''
  }
}

const dialogVisible = ref(false)

const show = () => {
  dialogVisible.value = true
}

const close = (done) => {
  resetForm()

  dialogVisible.value = false

  emit('close')
}

defineExpose({
  show
})
</script>
