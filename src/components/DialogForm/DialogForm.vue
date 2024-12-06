<template>
  <el-dialog
    v-bind="params.dialog"
    v-model="dialogVisible"
    :before-close="close"
    class="!rounded-12 !px-30 !pb-30"
  >
    <avue-form
      class="dialog-wrapper"
      ref="formRef"
      :option="option"
      :modelValue="params.data"
      @submit="onSubmit"
      @reset-change="handleCancel"
    >

    </avue-form>
<!--    <template #footer>-->
<!--      <div>-->
<!--        <el-button @click="handleCancel">Cancel</el-button>-->
<!--        <el-button type="primary" @click="handleSubmit">Submit</el-button>-->
<!--      </div>-->
<!--    </template>-->
  </el-dialog>
</template>

<script setup>
import {ElDialog} from "element-plus"
import { useDialogFormStore } from "@/components/DialogForm/store/dialogForm.store.js";

const props = defineProps({
  params: {
    type: Object,
    required: true
  }
})

const formRef = ref(null)

const option = {
  ...props.params.option,
  // submitBtn: false,
  // emptyBtn: false
  emptyText: "取消"
}

const dialogVisible = ref(true)

// 提交
// const handleSubmit = (form, done) => {
//   formRef.value.validateField && formRef.value.validateField().then(valid => {
//     if (valid) {
//       formRef.value.submit && formRef.value.submit()
//     }
//   }).catch(err => {
//     console.log(err);
//   })
// }

const onSubmit = (form, done) => {
  const doneAndClose = () => {
    done();
    close();
  };

  // 表单数据 / 成功的回调可关闭弹窗 / 失败或成功的回调，不关闭弹窗
  props.params.submit(form, doneAndClose, done)
}

// 取消
const handleCancel = () => {
  close()
}

const show = () => {
  dialogVisible.value = true
}

const close = () => {
  dialogVisible.value = false

  setTimeout(() => {
    useDialogFormStore().closeDialog()
  }, 500)

  props.params?.close && props.params.close()
}

defineExpose({
  show,
  close
})
</script>

<style lang="scss" scoped>
:deep(.avue-form__menu) {
  margin-top: 20px;
  padding: 0;
}

:deep(.avue-form__menu--center) {
  text-align: right;
}
</style>
