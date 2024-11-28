import {useDialogFormStore} from "@/components/DialogForm/store/dialogForm.store.js";
import {apiChangeLottery, apiDeleteLottery} from "@/service/api/api.js";
import {ElMessage, ElMessageBox} from "element-plus";
import dayjs from "dayjs";
import router from "@/router/index.js";
import {replenishStr} from "@/utils/index.js";
import {storeToRefs} from "pinia";
import {useDeviceStore} from "@/store/modules/device.store.js";

const validatePass = (rule, value, callback) => {
  console.log(dayjs(value).valueOf());
  if (value === '') {
    callback(new Error('请选择开奖时间'));
  } else if (dayjs(value).valueOf() < Date.now()) {
    callback(new Error('下次开奖时间需大于当前时间'));
  } {
    callback();
  }
};

export const useAward = () => {
  const changeAward = (config) => {
    const { isMobile } = storeToRefs(useDeviceStore())

    const type = config.type

    const method = type === "add" ? 'add' : 'update'

    const title = type === "add" ? '新增' : '编辑'

    const option = {
      labelWidth: '110',
      labelPosition: 'left',
      column: [
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
          label: '1号球',
          prop: 'one',
          span: 24,
          placeholder: '请输入开奖数字',
          // rules: [{
          //   required: true,
          //   message: "请输入开奖数字",
          //   trigger: "blur"
          // }]
        },
        {
          label: '2号球',
          prop: 'two',
          span: 24,
          placeholder: '请输入开奖数字',
          // rules: [{
          //   required: true,
          //   message: "请输入开奖数字",
          //   trigger: "blur"
          // }]
        },
        {
          label: '3号球',
          prop: 'three',
          span: 24,
          placeholder: '请输入开奖数字',
          // rules: [{
          //   required: true,
          //   message: "请输入开奖数字",
          //   trigger: "blur"
          // }]
        },
        {
          label: '4号球',
          prop: 'four',
          span: 24,
          placeholder: '请输入开奖数字',
          // rules: [{
          //   required: true,
          //   message: "请输入开奖数字",
          //   trigger: "blur"
          // }]
        },
        {
          label: '5号球',
          prop: 'five',
          span: 24,
          placeholder: '请输入开奖数字',
          // rules: [{
          //   required: true,
          //   message: "请输入开奖数字",
          //   trigger: "blur"
          // }]
        },
        {
          label: '6号球',
          prop: 'six',
          span: 24,
          placeholder: '请输入开奖数字',
          // rules: [{
          //   required: true,
          //   message: "请输入开奖数字",
          //   trigger: "blur"
          // }]
        },
        {
          label: '7号球',
          prop: 'seven',
          span: 24,
          placeholder: '请输入开奖数字',
          // rules: [{
          //   required: true,
          //   message: "请输入开奖数字",
          //   trigger: "blur"
          // }]
        },
        {
          label: '下次开奖时间',
          prop: 'nextLotteryTime',
          type: 'datetime',
          span: 24,
          rules: [
            {
              required: true,
              message: "请选择开奖时间",
              trigger: "blur"
            },
            // {validator: validatePass, trigger: 'change'}
          ],
          valueFormat: "YYYY-MM-DD HH:mm:ss",
          // pickerOptions: {
          //   disabledDate(time) {
          //     console.log(time);
          //     return false
          //   },
          // }
        },
      ]
    }

    const data = {
      ...config.data
    }

    useDialogFormStore().showDialog({
      dialog: {
        title: `${title}开奖`,
        width: isMobile.value ? '90%' : '60%'
      },
      data,
      option,
      submit(formData, done, cancel) {
        const numbers = `${replenishStr(formData.one, 2, '0')},${replenishStr(formData.two, 2, '0')},${replenishStr(formData.three, 2, '0')},${replenishStr(formData.four, 2, '0')},${replenishStr(formData.five, 2, '0')},${replenishStr(formData.six, 2, '0')},${replenishStr(formData.seven, 2, '0')}`

        apiChangeLottery({
          id: data.id,
          period: formData.period.toString(),
          year: dayjs(formData.nextLotteryTime).format('YYYY'),
          numbers,
          nextLotteryTime: formData.nextLotteryTime
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

  const deleteAward = ({id, done}) => {
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
        apiDeleteLottery(id).then(res => {
          ElMessage.success(`删除成功`)

          done && done()
        })
      })
  }

  return {
    changeAward,
    deleteAward
  }
}
