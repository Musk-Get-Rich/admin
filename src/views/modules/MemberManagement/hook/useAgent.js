import { useDialogFormStore } from "@/components/DialogForm/store/dialogForm.store.js";
import {
  apiChangeMaterialType,
  apiDeleteMaterialType
} from "@/service/api/api.js";
import { ElMessage, ElMessageBox } from "element-plus";
import { storeToRefs } from "pinia";
import { useDeviceStore } from "@/store/modules/device.store.js";
import i18n from "@/i18n/index.js";
const t = i18n.global.t

export const useAgent = () => {
  const changeDatail = (config) => {
    const { isMobile } = storeToRefs(useDeviceStore())

    const type = config.type

    const method = type === "add" ? 'add' : 'update'

    const title = type === "add" ? t('新增') : t('编辑')

    const option = {
      labelWidth: '110',
      labelPosition: 'right',
      column: [
        {
          label: t('代理账号'),
          prop: 'account',
          placeholder: t('请输入代理账号'),
          span: 24,
          autocomplete: "new-password"
        },
        {
          label: t('密码'),
          prop: 'password',
          placeholder: t('请输入密码'),
          span: 24,
          autocomplete: "new-password",
          type: 'password',
          rules: [
            {
              required: true,
              message: t("请输入密码"),
              trigger: "blur"
            },
          ],
        },
        {
          label: t('姓名'),
          prop: 'name',
          placeholder: t('请输入姓名'),
          span: 24,
          rules: [
            {
              required: true,
              message: t("请输入姓名"),
              trigger: "blur"
            },
          ],
        },
        {
          label: t('佣金比例'),
          prop: 'rate',
          placeholder: t('请输入佣金比例'),
          span: 24,
        },
        {
          label: 'Telegram',
          prop: 'telegram',
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
          prop: 'contract',
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
        width: isMobile.value ? '90%' : '30%'
      },
      data,
      option,
      submit(formData, done, cancel) {
        apiChangeMaterialType({
          ...formData,
        }, method).then(res => {
          ElMessage.success(`${title}${t('成功')}`)

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
      t('您确定要删除吗?'),
      'Warning',
      {
        confirmButtonText: t('确定'),
        cancelButtonText: t('取消'),
        type: 'warning',
      }
    )
      .then(async () => {
        apiDeleteMaterialType(id).then(res => {
          ElMessage.success(t(`删除成功`))

          done && done()
        })
      })
  }

  return {
    changeDatail,
    onDelete
  }
}
