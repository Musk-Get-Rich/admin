import {useDialogFormStore} from "@/components/DialogForm/store/dialogForm.store.js";
import {ElMessage, ElMessageBox} from "element-plus";
import {storeToRefs} from "pinia";
import {useDeviceStore} from "@/store/modules/device.store.js";
import { useUserStore } from "@/store/modules/user.store.js";
import {apiAddUSDTWallet, apiChangePaymentPassword} from "@/service/api/user.js";

export const useAddUSDTAddress = () => {
  const addAddress = () => {
    const userStore = useUserStore()

    const { isMobile } = storeToRefs(useDeviceStore())

    let password1 = ''

    const option = {
      labelWidth: '0',
      labelPosition: 'top',
      column: [
        {
          label: '加密货币钱包名称',
          prop: 'openningbank',
          span: 24,
          placeholder: '加密货币钱包名称',
          rules: [
            {
              required: true,
              message: "请输入加密货币钱包名称",
              trigger: "blur"
            },
          ],
        },
        {
          label: '加密货币地址',
          prop: 'paymentaccount',
          span: 24,
          placeholder: '加密货币地址',
          rules: [
            {
              required: true,
              message: "请输入加密货币地址",
              trigger: "blur"
            },
          ],
        },
        {
          label: '协议',
          prop: 'opreateChannel',
          type: 'select',
          span: 24,
          placeholder: '协议',
          dicData: [{
            label: 'TRC',
            value: 0
          }, {
            label: 'ERC',
            value: 1
          }],
          rules: [
            {
              required: true,
              message: "请选择协议",
              trigger: "blur"
            },
          ],
        },
      ]
    }

    useDialogFormStore().showDialog({
      dialog: {
        title: `添加加密钱包`,
        width: isMobile.value ? '90%' : '40%'
      },
      option,
      submit(formData, done, cancel) {
        console.log(formData);

        apiAddUSDTWallet({
          ...formData,
          bankcode: 'B000',
          opreateChannel: 3,
          accountname: 'USDT'
        }).then(res => {
          done()
          ElMessage.success('修改成功')
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
