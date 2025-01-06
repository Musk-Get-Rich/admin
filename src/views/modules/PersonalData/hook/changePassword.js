import {useDialogFormStore} from "@/components/DialogForm/store/dialogForm.store.js";
import {ElMessage, ElMessageBox} from "element-plus";
import {storeToRefs} from "pinia";
import {useDeviceStore} from "@/store/modules/device.store.js";
import { useUserStore } from "@/store/modules/user.store.js";
import { apiUpdatepwd } from "@/service/api/api.js";
import i18n from "@/i18n/index.js";

const t = i18n.global.t


export const useChangePassword = () => {
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
          prop: 'oldloginpassword',
          type: 'password',
          maxlength: 15,
          span: 24,
          placeholder: t('请填写旧密码')  ,
          rules: [
            {
              required: true,
              message: t('请填写旧密码'),
              trigger: "blur"
            },
          ],
        },
        {
          label: '',
          prop: 'newloginpassword',
          type: 'password',
          span: 24,
          maxlength: 15,
          placeholder: t('请输入密码'),
          rules: [
            {
              validator: (rule, value, callback) => {
                if (value === '') {
                  callback(new Error(t('请输入密码')));
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
          prop: 'newloginpassword2',
          type: 'password',
          span: 24,
          maxlength: 15,
          placeholder: t('请再次输入新密码'),
          rules: [
            {
              validator: (rule, value, callback) => {
                if (value === '') {
                    callback(new Error(t('请再次输入新密码')));
                } else {

                  if (value !== password1) {
                    callback(new Error(t('两次密码不一致')));
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

    // if (userStore.userInfo.fundpassword === 'false') {
    //   option.column.shift()
    // }

    useDialogFormStore().showDialog({
      dialog: {
        title: t('修改登录密码'),
        width: isMobile.value ? '90%' : '40%'
      },
      option,
      submit(formData, done, cancel) {
        apiUpdatepwd(formData).then(res => {
          done()
          userStore.changeUserInfo()
          ElMessage.success(t('修改成功'))
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
