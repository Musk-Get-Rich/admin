import {ElMessage} from 'element-plus'

export const formErrorPopup = (errors) => {
  Object.keys(errors).forEach(key => {
    ElMessage.error({
      message: errors[key][0].message,
      duration: 3000
    })
  })
}
