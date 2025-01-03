import {useDialogFormStore} from "@/components/DialogForm/store/dialogForm.store.js";
import {ElMessage, ElMessageBox} from "element-plus";
import {storeToRefs} from "pinia";
import {useDeviceStore} from "@/store/modules/device.store.js";
import { useUserStore } from "@/store/modules/user.store.js";
import {apiAddUSDTWallet, apiChangePaymentPassword} from "@/service/api/user.js";
import i18n from "@/i18n/index.js";
const t = i18n.global.t

export const useAddUSDTAddress = (refresh) => {
  const addAddress = () => {
    const userStore = useUserStore()

    const { isMobile } = storeToRefs(useDeviceStore())

    const option = {
      labelWidth: '0',
      labelPosition: 'top',
      column: [
        {
          label: t('加密货币钱包名称'),
          prop: 'openningbank',
          span: 24,
          placeholder: t('加密货币钱包名称'),
          readonly: true
        },
        {
          label:  t('加密货币地址'),
          prop: 'paymentaccount',
          span: 24,
          placeholder:  t('加密货币地址'),
          rules: [
            {
              required: true,
              message:  t("请输入加密货币地址"),
              trigger: "blur"
            },
          ],
        },
        {
          label:  t('协议'),
          prop: 'accountname',
          type: 'select',
          span: 24,
          placeholder:  t('协议'),
          dicData: [{
            label: 'TRC20',
            value: 'TRC20'
          }, {
            label: 'ERC20',
            value: 'ERC20'
          }],
          rules: [
            {
              required: true,
              message:  t("请选择协议"),
              trigger: "blur"
            },
          ],
        },
      ]
    }

    const data = {
      openningbank: 'USDT'
    }

    useDialogFormStore().showDialog({
      dialog: {
        title:  t(`添加加密钱包`),
        width: isMobile.value ? '90%' : '40%'
      },
      option,
      data,
      submit(formData, done, cancel) {
        console.log(formData);

        apiAddUSDTWallet({
          ...formData,
          bankcode: 'B000',
          opreateChannel: 3,
        }).then(res => {
          done()
          ElMessage.success(t('添加成功'))

          refresh && refresh()
        }).catch(err => {
          cancel()
        })
      }
    })
  }

  return {
    addAddress,
  }
}
