<template>
  <Teleport to="body">
    <el-dialog
      v-model="dialogVisible"
      :title="`${type === 'add' ? '新增' : '编辑'}资料`"
      :width="isMobile ? '90%' : '60%'"
      :before-close="close"
    >
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        :rules="rules"
        status-icon
        class="!w-full"
        label-width="100"
        label-position="left"
      >
        <el-form-item label="年份：" prop="year">
          <el-select v-model="ruleForm.year" placeholder="请选择年份" >
            <el-option
              v-for="item in year"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="开奖期数：" prop="period">
          <el-input v-model="ruleForm.period" type="number" placeholder="请输入开奖期数" />
        </el-form-item>
        <el-form-item label="资料类型：" prop="articleTypeId">
          <el-select v-model="ruleForm.articleTypeId" placeholder="请选择资料类型" >
            <el-option
              v-for="item in materialTypeList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="标题：" prop="title">
          <RichTextEditor
            v-if="dialogVisible"
            ref="titleEditorRef"
            :content="ruleForm.title"
          />
        </el-form-item>
        <el-form-item label="内容：" prop="content">
          <RichTextEditor
            v-if="dialogVisible"
            ref="contentEditorRef"
            :content="ruleForm.content"
          />
        </el-form-item>
        <el-form-item label="排序：" prop="sort">
          <el-input v-model="ruleForm.sort" type="number" placeholder="请输入排序" />
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
      <!--      <span>This is a message</span>-->
      <!--      <template #footer>-->
      <!--        <div class="dialog-footer">-->
      <!--          <el-button :icon="Check" type="primary" @click="dialogVisible = false">-->
      <!--            提交-->
      <!--          </el-button>-->
      <!--          <el-button :icon="Delete" @click="dialogVisible = false">取消</el-button>-->
      <!--        </div>-->
      <!--      </template>-->
    </el-dialog>
  </Teleport>
</template>

<script setup>
import {ElMessage, ElMessageBox} from 'element-plus'
import {Check, Delete} from '@element-plus/icons-vue'
import { year } from "@/config/data.js"
import RichTextEditor from "@/components/RichTextEditor/RichTextEditor.vue";
import {apiChangeMaterial, apiGetMaterialTypeAll} from "@/service/api/api.js";
import {storeToRefs} from "pinia";
import {useDeviceStore} from "@/store/modules/device.store.js";

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

const titleEditorRef = ref(null)
const contentEditorRef = ref(null)

const materialTypeList = ref([])
apiGetMaterialTypeAll().then(res => {
  console.log(res.data, 'apiGetMaterialTypeAll');
  materialTypeList.value = res.data.map(item => ({
    label: item.title,
    value: item.id
  }))
})

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
  year: [
    {required: true, message: '请选择年份', trigger: 'blur'},
  ],
  period: [
    {required: true, message: '请输入开奖期数', trigger: 'blur'},
  ],
  articleTypeId: [
    {required: true, message: '请选择资料类型', trigger: 'blur'},
  ],
  title: [
    {required: true, message: '请输入标题', trigger: 'blur'},
  ],
})

const submitForm = async () => {
  if (!ruleFormRef.value) return

  ruleForm.value.title = titleEditorRef.value.getHtml()
  ruleForm.value.content = contentEditorRef.value.getHtml()

  console.log(ruleForm.value.title);

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

  apiChangeMaterial({
    ...ruleForm.value,
    articleTypeName: res ? res?.label : '',
  }, method).then(res => {
    console.log(res);
    ElMessage.success(`${props.type === 'add' ? '新增' : '编辑'}成功`)

    emit('refresh')

    close()
  }).catch(err => {

  })
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
