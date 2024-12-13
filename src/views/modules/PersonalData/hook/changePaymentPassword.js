import {useDialogFormStore} from "@/components/DialogForm/store/dialogForm.store.js";
import {ElMessage, ElMessageBox} from "element-plus";
import {storeToRefs} from "pinia";
import {useDeviceStore} from "@/store/modules/device.store.js";
import { useUserStore } from "@/store/modules/user.store.js";
import {apiChangePaymentPassword} from "@/service/api/user.js";

export const useChangePaymentPassword = () => {
  const change = () => {
    const userStore = useUserStore()

    const { isMobile } = storeToRefs(useDeviceStore())

    let password1 = ''

    const option = {
      labelWidth: '0',
      labelPosition: 'left',
      column: [
        {
          label: '',
          prop: 'oldfundpassword',
          type: 'password',
          maxlength: 6,
          span: 24,
          placeholder: '请填写旧密码',
          rules: [
            {
              required: true,
              message: "请填写旧密码",
              trigger: "blur"
            },
          ],
        },
        {
          label: '',
          prop: 'newfundpassword',
          type: 'password',
          span: 24,
          maxlength: 6,
          placeholder: '请输入6位的支付密码',
          rules: [
            {
              validator: (rule, value, callback) => {
                if (value === '') {
                  callback(new Error('请输入6位的支付密码'));
                } else {
                  password1 = value
                  console.log(password1);
                  callback();
                }
              },
              trigger: 'blur'
            }
          ],
        },
        {
          label: '',
          prop: 'newfundpassword2',
          type: 'password',
          span: 24,
          maxlength: 6,
          placeholder: '请再次输入新密码',
          rules: [
            {
              validator: (rule, value, callback) => {
                if (value === '') {
                  callback(new Error('请输入6位的支付密码'));
                } else {

                  if (value !== password1) {
                    callback(new Error('两次密码不一致'));
                  } else {
                    callback();
                  }
                }
              },
              trigger: 'blur'
            }
          ],
        },
      ]
    }

    if (userStore.userInfo.fundpassword === 'false') {
      option.column.shift()
    }

    useDialogFormStore().showDialog({
      dialog: {
        title: `修改支付密码`,
        width: isMobile.value ? '90%' : '40%'
      },
      option,
      submit(formData, done, cancel) {
        apiChangePaymentPassword(formData).then(res => {
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