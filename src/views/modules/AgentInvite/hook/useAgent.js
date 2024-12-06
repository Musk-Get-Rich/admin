import { useDialogFormStore } from "@/components/DialogForm/store/dialogForm.store.js";
import {
  apiChangeMaterialType,
  apiDeleteMaterialType
} from "@/service/api/api.js";
import { ElMessage, ElMessageBox } from "element-plus";
import RichTextEditor from "@/components/RichTextEditor/RichTextEditor.vue";
import { storeToRefs } from "pinia";
import { useDeviceStore } from "@/store/modules/device.store.js";

export const useAgent = () => {
  const changeDatail = (config) => {
    const { isMobile } = storeToRefs(useDeviceStore())

    const type = config.type

    const method = type === "add" ? 'add' : 'update'

    const title = type === "add" ? '新增' : '编辑'

    const option = {
      labelWidth: '110',
      labelPosition: 'right',
      column: [
        {
          label: '账号',
          prop: 'account',
          placeholder: '请输入账号',
          span: 24,
          autocomplete: "new-password",
          rules: [
            {
              required: true,
              message: "请输入账号",
              trigger: "blur"
            },
          ],
        },
        {
          label: '用户姓名',
          prop: 'name',
          placeholder: '请输入用户姓名',
          span: 24,
          autocomplete: "new-password",
          rules: [
            {
              required: true,
              message: "请输入用户姓名",
              trigger: "blur"
            },
          ],
        },
        {
          label: '登录密码',
          prop: 'password',
          placeholder: '请输入登录密码',
          span: 24,
          autocomplete: "new-password",
          type: 'password',
          rules: [
            {
              required: true,
              message: "请输入登录密码",
              trigger: "blur"
            },
          ],
        },
        {
          label: '重复密码',
          prop: 'confirmPassword',
          placeholder: '请输入重复密码',
          span: 24,
          autocomplete: "new-password",
          type: 'password',
          rules: [
            {
              required: true,
              message: "请输入重复密码",
              trigger: "blur"
            },
          ],
        },
        {
          label: '国家选择',
          prop: 'country',
          placeholder: '请选择国家',
          span: 24,
          type: 'select',
          dicData: [
            {
              value: 'zh',
              label: '中国'
            },
            {
              value: 'en',
              label: '美国'
            }
          ],
          rules: [
            {
              required: true,
              message: "请选择国家",
              trigger: "blur"
            },
          ],
        },
      ]
    }

    const data = {
      ...config.data
    }

    useDialogFormStore().showDialog({
      dialog: {
        title: `${title}下线`,
        width: isMobile.value ? '90%' : '30%'
      },
      data,
      option,
      submit(formData, done, cancel) {
        apiChangeMaterialType({
          ...formData,
        }, method).then(res => {
          ElMessage.success(`${title}成功`)

          done()

          config.done && config.done()
        }).catch(err => {
          cancel()
        })
      }
    })
  }

  const onDelete = ({id, done}) => {
    ElMessageBox.confirm(
      '您确定要删除吗?',
      'Warning',
      {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }
    )
      .then(async () => {
        apiDeleteMaterialType(id).then(res => {
          ElMessage.success(`删除成功`)

          done && done()
        })
      })
  }

  return {
    changeDatail,
    onDelete
  }
}
