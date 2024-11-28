import {useDialogFormStore} from "@/components/DialogForm/store/dialogForm.store.js";
import {apiChangeMaterial, apiDeleteMaterial} from "@/service/api/api.js";
import {ElMessage, ElMessageBox} from "element-plus";
import { year } from "@/config/data.js"
import Test from "@/views/modules/test.vue"
import RichTextEditor from "@/components/RichTextEditor/RichTextEditor.vue";
import {storeToRefs} from "pinia";
import {useDeviceStore} from "@/store/modules/device.store.js";

export const useMaterial = () => {
  const changeMaterial = (config) => {
    const { isMobile } = storeToRefs(useDeviceStore())

    const type = config.type

    const method = type === "add" ? 'add' : 'update'

    const title = type === "add" ? '新增' : '编辑'

    const option = shallowRef({
      labelWidth: '90',
      labelPosition: 'left',
      column: [
        {
          label: '年份',
          prop: 'year',
          type: 'select',
          dicData: year,
          span: 24,
          rules: [
            {
              required: true,
              message: "请选择年份",
              trigger: "blur"
            },
          ],
        },
        {
          label: '开奖期数',
          prop: 'period',
          type: 'number',
          span: 24,
          placeholder: '请输入开奖期数',
          min: 1,
          max: 365,
          rules: [{
            required: true,
            message: "请输入开奖期数",
            trigger: "blur"
          }]
        },
        {
          label: '资料类型',
          prop: 'articleTypeId',
          type: 'select',
          dicData: config.materialTypeList,
          span: 24,
          rules: [
            {
              required: true,
              message: "请选择资料类型",
              trigger: "blur"
            },
          ],
        },
        {
          label: '标题',
          prop: 'title',
          span: 24,
          type: 'custom',
          component: markRaw(RichTextEditor),
          rules: [
            {
              required: true,
              message: "请输入标题",
              trigger: "blur"
            },
          ],
        },
        {
          label: '内容',
          prop: 'content',
          span: 24,
          type: 'custom',
          component: markRaw(RichTextEditor),
        },
        {
          label: '排序',
          prop: 'sort',
          span: 24,
          type: 'number',
        },
      ]
    })

    const data = {
      ...config.data
    }

    useDialogFormStore().showDialog({
      dialog: {
        title: `${title}资料`,
        width: isMobile.value ? '90%' : '60%'
      },
      data,
      option,
      submit(formData, done, cancel) {
        const articleTypeName = (config.materialTypeList.find(item => item.value === formData.articleTypeId)).label

        apiChangeMaterial({
          ...formData,
          articleTypeName
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

  const deleteMaterial = ({id, done}) => {
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
        apiDeleteMaterial(id).then(res => {
          ElMessage.success(`删除成功`)

          done && done()
        })
      })
  }

  return {
    changeMaterial,
    deleteMaterial
  }
}
