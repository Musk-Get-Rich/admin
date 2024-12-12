import { useDialogFormStore } from "@/components/DialogForm/store/dialogForm.store.js";
import {
  apiRegisterAgent,
  apiEditAgent,
  apiCheckAgentAccount
} from "@/service/api/api.js";
import { ElMessage, ElMessageBox } from "element-plus";
import { storeToRefs } from "pinia";
import { useDeviceStore } from "@/store/modules/device.store.js";
import { computed } from "vue";
import { useUserStore } from "@/store/modules/user.store.js";

export const useAgent = () => {

  const userStore = useUserStore()
  console.log(userStore.userInfo.dividend);

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

                  if (/[^0-9a-zA-Z]/.test(value)) {
                    return Promise.reject('代理账号只支持字母数字')
                  }
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
          placeholder: `请输入佣金比例(不能大于${userStore.userInfo.dividend})`,
          span: 24,
          type: 'number',
          max: 1,
          step: 0.1,
          rules: [
            {
              required: true,
              message: `请输入佣金比例`,
              trigger: "blur"
            },
          ],
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
        console.log(userStore.userInfo, 'userStore.userInfouserStore.userInfo')
        const api = type === 'add' ? apiRegisterAgent : apiEditAgent
        api({
          ...formData,
          loginaccount: `${prependName.value}${formData.loginaccount}`,
          parentemployeecode: userStore.userInfo.employeecode,
          employeecode: data?.employeecode,
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
    // ElMessageBox.confirm(
    //   '您确定要删除吗?',
    //   'Warning',
    //   {
    //     confirmButtonText: '确定',
    //     cancelButtonText: '取消',
    //     type: 'warning',
    //   }
    // )
    //   .then(async () => {
    //     apiDeleteMaterialType(id).then(res => {
    //       ElMessage.success(`删除成功`)
    //       done && done()
    //     })
    //   })
    ElMessageBox.alert('敬请期待', '温馨提示', {
      confirmButtonText: 'OK',
      callback: (action) => {
      },
    })
  }

  return {
    changeDetail,
    onDelete
  }
}
