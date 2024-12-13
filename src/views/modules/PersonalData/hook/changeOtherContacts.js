import {useDialogFormStore} from "@/components/DialogForm/store/dialogForm.store.js";
import {ElMessage, ElMessageBox} from "element-plus";
import {storeToRefs} from "pinia";
import {useDeviceStore} from "@/store/modules/device.store.js";
import { useUserStore } from "@/store/modules/user.store.js";
import {apiEditAgent} from "@/service/api/api.js";

export const useChangeOtherContacts = () => {
  const change = () => {

    const userStore = useUserStore()

    const { isMobile } = storeToRefs(useDeviceStore())
    const { userInfo } = storeToRefs(useUserStore())

    console.log(userInfo)
    console.log(userInfo.value.otherimno1)
    console.log(userInfo.value.employeecode)

    const option = {
      labelWidth: '0',
      labelPosition: 'left',
      column: [
        {
          label: '',
          prop: 'otherimno1',
          maxlength: 6,
          span: 24,
          placeholder: '请输入其他联系方式',
          value: userInfo.value.otherimno1,
          rules: [
            {
              required: true,
              message: "请输入其他联系方式",
              trigger: "blur"
            },
          ],
        },
      ]
    }

    useDialogFormStore().showDialog({
      dialog: {
        title: `其他联系方式`,
        width: isMobile.value ? '90%' : '40%'
      },
      option,
      submit(formData, done, cancel) {
        console.log('formData')
        console.log(formData)
        apiEditAgent({
          ...formData
        }).then(res => {
          done()
          userStore.changeUserInfo()
          ElMessage.success('修改成功')
        }).catch(err => {
          cancel()
        })
      }
    })
  }

  return {
    change,
  }
}
