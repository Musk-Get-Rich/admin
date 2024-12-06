import { useDialogFormStore } from "@/components/DialogForm/store/dialogForm.store.js";
import {
  apiRegisterAgent,
  apiDeleteMaterialType,
  apiCheckAgentAccount
} from "@/service/api/api.js";
import { ElMessage, ElMessageBox } from "element-plus";
import { storeToRefs } from "pinia";
import { useDeviceStore } from "@/store/modules/device.store.js";
import { computed } from "vue";

export const useAgent = () => {
  const changeDetail = (config) => {
    const { isMobile } = storeToRefs(useDeviceStore())

    const type = config.type

    const method = type === "add" ? 'add' : 'update'

    const title = type === "add" ? '新增' : '编辑'

    const prependName = computed(() => {
      return {
        2: 'AB',
        3: 'BB'
      }[+config.params.agentLevel + 1] || 'BB'
    })

    const option = {
      labelWidth: '110',
      labelPosition: 'right',
      column: [
        {
          label: '代理账号',
          prop: 'loginaccount',
          placeholder: '请输入代理账号',
          span: 24,
          autocomplete: "new-password",
          prepend: prependName.value,
          disabled: !!config.data?.agentlinecode,
          rules: [
            {
              trigger: 'blur',
              asyncValidator: async (rule, value) => {
                if (value) {
                  await apiCheckAgentAccount({ loginaccount: `${prependName.value}${value}` }).catch(() => {
                    return Promise.reject('代理账号已存在')
                  })
                  return true
                }
                return Promise.reject('请输入代理账号')
              },
            }
          ]
        },
        {
          label: '密码',
          prop: 'loginpassword',
          placeholder: '请输入密码',
          span: 24,
          autocomplete: "new-password",
          type: 'password',
          rules: [
            {
              required: true,
              message: "请输入密码",
              trigger: "blur"
            },
          ],
        },
        {
          label: '姓名',
          prop: 'displayalias',
          placeholder: '请输入姓名',
          span: 24,
          rules: [
            {
              required: true,
              message: "请输入姓名",
              trigger: "blur"
            },
          ],
        },
        {
          label: '佣金比例',
          prop: 'dividend',
          placeholder: '请输入佣金比例',
          span: 24,
        },
        {
          label: 'Telegram',
          prop: 'otherimname1',
          placeholder: '请输入Telegram',
          span: 24,
        },
        {
          label: '备注',
          prop: 'remark',
          placeholder: '请输备注',
          span: 24,
          type: 'textarea'
        },
        {
          label: '其他联系方式',
          prop: 'otherimno1',
          placeholder: '请输入其他联系方式',
          span: 24,
        },
      ]
    }

    const data = {
      ...config.data
    }

    useDialogFormStore().showDialog({
      dialog: {
        title: `${title}下级`,
        width: isMobile.value ? '90%' : '40%'
      },
      data,
      option,
      submit(formData, done, cancel) {
        apiRegisterAgent({
          ...formData,
          loginaccount: `${prependName.value}${formData.loginaccount}`
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

  const onDelete = ({ id, done }) => {
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
    changeDetail,
    onDelete
  }
}
