import { globalOption } from "@/config/tabOption.js";
import i18n from "@/i18n/index.js";
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

const t = i18n.global.t

export const useAgent = () => {
  const userStore = useUserStore()

  const changeDetail = (config) => {
    const { isMobile } = storeToRefs(useDeviceStore())

    const type = config.type

    const method = type === "add" ? 'add' : 'update'

    const title = type === "add" ? t('新增') : t('编辑')

    const prependName = computed(() => {
      return {
        2: 'AB',
        3: 'BB'
      }[+config.params.agentLevel + 1] || 'BB'
    })

    const option = {
      labelWidth: '140',
      labelPosition: 'right',
      column: [
        {
          label: t('代理账号'),
          prop: 'loginaccount',
          placeholder: t('请输入代理账号'),
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
                    return Promise.reject(t('代理账号已存在'))
                  })

                  if (/[^0-9a-zA-Z]/.test(value)) {
                    return Promise.reject(t('代理账号只支持字母数字'))
                  }
                  return true
                }
                return Promise.reject(t('请输入代理账号'))
              },
            }
          ]
        },
        {
          label: t('密码'),
          prop: 'loginpassword',
          placeholder: t('请输入密码'),
          span: 24,
          autocomplete: "new-password",
          type: 'password',
          rules: [
            {
              validator: (rule, value, callback) => {
                const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?!.*\s)[a-zA-Z\d]{6,16}$/;
                if (value) {
                  if (!passwordRegex.test(value)) {
                    callback(new Error(t('密码必须包含字母，最少6位')));
                  } else {
                    callback();
                  }
                }
              },
              trigger: 'blur'
            }
          ],
        },
        {
          label: t('姓名'),
          prop: 'displayalias',
          placeholder: t('请输入姓名'),
          span: 24,
          rules: [
            {
              required: true,
              message: t('请输入姓名'),
              trigger: "blur"
            },
          ],
        },
        {
          label: t('佣金比例'),
          prop: 'dividend',
          placeholder: `${t('请输入佣金比例')}(${t('不能大于')}${userStore.userInfo.dividend})`,
          span: 24,
          type: 'number',
          max: 1,
          step: 0.1,
          rules: [
            {
              required: true,
              message: t('请输入佣金比例'),
              trigger: "blur"
            },
          ],
        },
        {
          label: 'Telegram',
          prop: 'otherimname1',
          placeholder: t('请输入Telegram'),
          span: 24,
        },
        {
          label: t('备注'),
          prop: 'remark',
          placeholder: t('请输备注'),
          span: 24,
          type: 'textarea'
        },
        {
          label: t('其他联系方式'),
          prop: 'otherimno1',
          placeholder: t('请输入其他联系方式'),
          span: 24,
        },
      ]
    }

    const data = {
      ...config.data
    }

    useDialogFormStore().showDialog({
      dialog: {
        title: `${title}${t('下级')}`,
        width: isMobile.value ? '90%' : '40%'
      },
      data,
      option,
      submit(formData, done, cancel) {
        const api = type === 'add' ? apiRegisterAgent : apiEditAgent
        api({
          ...formData,
          loginaccount: `${prependName.value}${formData.loginaccount}`,
          parentemployeecode: userStore.userInfo.employeecode,
          employeecode: data?.employeecode,
        }, method).then(res => {
          ElMessage.success(`${title}${t('下级')}${t('成功')}`)

          done()

          config.done && config.done()
        }).catch(err => {
          cancel()
        })
      }
    })
  }

  const onDelete = ({ id, done }) => {
    ElMessageBox.alert(t('敬请期待'), t('温馨提示'), {
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