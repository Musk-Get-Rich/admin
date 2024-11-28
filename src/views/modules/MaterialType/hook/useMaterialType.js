import {useDialogFormStore} from "@/components/DialogForm/store/dialogForm.store.js";
import {
  apiChangeMaterialType,
  apiDeleteMaterialType
} from "@/service/api/api.js";
import {ElMessage, ElMessageBox} from "element-plus";
import RichTextEditor from "@/components/RichTextEditor/RichTextEditor.vue";
import {storeToRefs} from "pinia";
import {useDeviceStore} from "@/store/modules/device.store.js";

export const useMaterialType = () => {
  const changeMaterialType = (config) => {
    const { isMobile } = storeToRefs(useDeviceStore())

    const type = config.type

    const method = type === "add" ? 'add' : 'update'

    const title = type === "add" ? '新增' : '编辑'

    const option = {

      labelWidth: '90',
      labelPosition: 'left',
      column: [
        {
          label: '标题',
          prop: 'title',
          span: 24,
          rules: [
            {
              required: true,
              message: "请输入标题",
              trigger: "blur"
            },
          ],
        },
        // {
        //   label: '内容',
        //   prop: 'content',
        //   span: 24,
        //   type: 'custom',
        //   component: markRaw(RichTextEditor),
        //   rules: [
        //     {
        //       required: true,
        //       message: "请输入内容",
        //       trigger: "blur"
        //     },
        //   ],
        // },
        {
          label: '排序',
          prop: 'sort',
          span: 24,
          type: 'number',
        },
        {
          label: '是否跳转',
          prop: 'canLink',
          span: 24,
          type: 'switch',
          value: 0,
          dicData: [{
            value: 0
          }, {
            value: 1
          }],
        },
      ]
    }

    const data = {
      ...config.data
    }

    useDialogFormStore().showDialog({
      dialog: {
        title: `${title}资料类型`,
        width: isMobile.value ? '90%' : '60%'
      },
      data,
      option,
      submit(formData, done, cancel) {
        apiChangeMaterialType({
          ...formData,
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

  const deleteMaterialType = ({id, done}) => {
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
    changeMaterialType,
    deleteMaterialType
  }
}
